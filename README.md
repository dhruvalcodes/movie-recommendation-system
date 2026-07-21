# Movie Recommendation System 🎬

An AI/ML project that recommends similar movies using content-based filtering with Python and machine learning.

## Features

- Movie recommendations using TF-IDF and cosine similarity
- FastAPI backend for serving recommendations
- TMDB API integration for movie posters and ratings

## Tech Stack

- Python
- Pandas
- Scikit-learn
- FastAPI
- TMDB API

## How It Works

1. Movie data is cleaned and processed.
2. Movie features are converted into vectors using TF-IDF.
3. Cosine similarity is used to find similar movies.
4. FastAPI provides recommendations through an API.
5. TMDB API fetches additional movie details such as posters and ratings.

## Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
TMDB_API_KEY=your_api_key_here
```

Run the API:

```bash
uvicorn app:app --reload
```

Open API documentation:

```text
http://127.0.0.1:8000/docs
```

## Note

The trained model files (`movies.pkl` and `similarity.pkl`) are not included due to GitHub file size limits.

## Author

Dhruval Prajapati