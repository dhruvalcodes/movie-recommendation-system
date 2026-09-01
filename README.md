# Movie Recommendation System 🎬

An AI/ML movie recommendation system that recommends similar movies using content-based filtering, TF-IDF, and cosine similarity.

## 🚀 Live Demo

Frontend: https://dhruval-movie-recommender.netlify.app/

API Documentation: https://movie-recommendation-api-8vao.onrender.com/docs

## Features

- Content-based movie recommendations
- TF-IDF vectorisation for movie features
- Cosine similarity to find similar movies
- FastAPI REST API for serving recommendations
- React frontend
- TMDB API integration for movie posters, ratings, and additional details
- Frontend error handling for invalid movie searches
- Deployed frontend and backend

## Tech Stack

- Python
- Pandas
- Scikit-learn
- FastAPI
- React
- JavaScript
- TMDB API
- Git LFS
- Netlify
- Render

## How It Works

1. Movie data is cleaned and processed.
2. Movie metadata is converted into numerical vectors using TF-IDF.
3. Cosine similarity is used to identify similar movies.
4. FastAPI serves the recommendations through a REST API.
5. The React frontend communicates with the FastAPI backend.
6. TMDB API provides additional movie information such as posters and ratings.

## Project Architecture

React Frontend
      ↓
   Netlify
      ↓
FastAPI REST API
      ↓
TF-IDF + Cosine Similarity
      ↓
Movie Dataset + Trained Models
      ↓
   TMDB API

## Setup

### Backend

Navigate to the backend directory:

cd backend

Install dependencies:

pip install -r requirements.txt

Create a .env file:

TMDB_API_KEY=your_api_key_here

Run the API:

uvicorn app:app --reload

Open the API documentation:

http://127.0.0.1:8000/docs

### Frontend

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

## Machine Learning

The recommendation system uses:

- TF-IDF to convert movie metadata into numerical vectors.
- Cosine Similarity to calculate similarity between movies.
- Trained recommendation models stored using Git LFS.

## Deployment

Frontend: Netlify

Backend: Render

ML model files: Git LFS

## Future Improvements

- Add fuzzy movie-title matching
- Add genre-based filtering
- Improve recommendation ranking
- Add user-based recommendations
- Add movie search/autocomplete

## Author

Dhruval Prajapati
