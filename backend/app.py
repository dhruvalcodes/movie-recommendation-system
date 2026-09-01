import pickle
from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
import os
import requests
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

TMDB_API_KEY = os.getenv("TMDB_API_KEY")

app = FastAPI(title="Movie Recommendation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load recommendation data
movies = pickle.load(open("movies.pkl", "rb"))
similarity = pickle.load(open("similarity.pkl", "rb"))


def recommend(movie):
    movie = movie.lower()

    movie_list = movies["title"].str.lower()

    if movie not in movie_list.values:
        return None

    index = movie_list[movie_list == movie].index[0]

    distances = list(enumerate(similarity[index]))

    movies_list = sorted(
        distances,
        key=lambda x: x[1],
        reverse=True
    )[1:6]

    recommendations = []

    for i in movies_list:
        recommendations.append(movies.iloc[i[0]].title)

    return recommendations


def get_movie_details(movie_name):
    url = "https://api.themoviedb.org/3/search/movie"

    params = {
        "api_key": TMDB_API_KEY,
        "query": movie_name
    }

    response = requests.get(url, params=params)

    if response.status_code != 200:
        return None

    data = response.json()

    if not data["results"]:
        return None

    movie = data["results"][0]

    poster = None

    if movie.get("poster_path"):
        poster = f"https://image.tmdb.org/t/p/w500{movie['poster_path']}"

    release_date = movie.get("release_date", "")

    year = release_date[:4] if release_date else "N/A"

    return {
        "title": movie.get("title"),
        "rating": movie.get("vote_average", 0),
        "poster": poster,
        "overview": movie.get("overview", "No overview available."),
        "release_year": year
    }


@app.get("/")
def home():
    return {
        "message": "Movie Recommendation API is running!"
    }


@app.get("/recommend/{movie_name}")
def get_recommendations(movie_name: str):

    recommendations = recommend(movie_name)

    if recommendations is None:
        raise HTTPException(
            status_code=404,
            detail="Movie not found in recommendation dataset"
        )

    detailed_movies = []

    for movie in recommendations:

        details = get_movie_details(movie)

        if details:
            detailed_movies.append(details)

    return {
        "movie": movie_name,
        "recommendations": detailed_movies
    }
