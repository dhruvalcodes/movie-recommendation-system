# 🎬 Movie Recommendation System

An AI/ML-powered movie recommendation system that recommends similar movies using content-based filtering, TF-IDF vectorisation, and cosine similarity.

## 🌐 Live Demo

**Frontend:** https://dhruval-movie-recommender.netlify.app/

**API Documentation:** https://movie-recommendation-api-8vao.onrender.com/docs

---

## 📌 Overview

This project is a content-based movie recommendation system built using Python and machine learning.

The system analyses movie metadata and uses TF-IDF and cosine similarity to find movies with similar characteristics. A FastAPI backend serves the recommendation model through a REST API, while a React frontend provides a user-friendly interface.

The TMDB API is used to retrieve additional movie information such as posters, ratings, release years, and overviews.

---

## ✨ Features

- 🎬 Content-based movie recommendations
- 🤖 TF-IDF vectorisation
- 🔎 Cosine similarity
- ⚡ FastAPI REST API
- ⚛️ React frontend
- 🎥 TMDB API integration
- ⭐ Movie ratings and metadata
- 🖼️ Movie poster retrieval
- 🛡️ Frontend error handling
- ☁️ Cloud deployment
- 📦 Git LFS for trained ML models

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Python | Machine learning and backend |
| Pandas | Data processing |
| Scikit-learn | TF-IDF and cosine similarity |
| FastAPI | REST API |
| React | Frontend |
| JavaScript | Frontend logic |
| TMDB API | Movie metadata and posters |
| Git LFS | Large ML model files |
| Netlify | Frontend deployment |
| Render | Backend deployment |

---

## 🧠 How It Works

### 1. Movie Data

Movie information from the TMDB 5000 dataset is cleaned and processed.

### 2. Feature Processing

Relevant movie metadata is combined to create a feature representation for each movie.

### 3. TF-IDF

TF-IDF converts the movie metadata into numerical vectors.

### 4. Cosine Similarity

Cosine similarity compares the movie vectors and identifies movies with similar characteristics.

### 5. Recommendations

The movies with the highest similarity scores are returned through the FastAPI backend.

### 6. TMDB API

The TMDB API provides additional movie information such as posters, ratings, release years, and overviews.

---

## 📂 Project Structure

    movie-recommendation-system/
    │
    ├── backend/
    │   ├── app.py
    │   ├── requirements.txt
    │   ├── movies.pkl
    │   └── similarity.pkl
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── App.jsx
    │   │   ├── App.css
    │   │   └── main.jsx
    │   │
    │   ├── package.json
    │   └── index.html
    │
    ├── .gitattributes
    ├── .gitignore
    └── README.md

---

## 🚀 Setup

### Clone the Repository

    git clone https://github.com/dhruvalcodes/movie-recommendation-system.git

    cd movie-recommendation-system

---

## 🐍 Backend Setup

Navigate to the backend directory:

    cd backend

Install the dependencies:

    pip install -r requirements.txt

Create a `.env` file:

    TMDB_API_KEY=your_api_key_here

Start the FastAPI server:

    uvicorn app:app --reload

The API will run at:

    http://127.0.0.1:8000

Open the API documentation:

    http://127.0.0.1:8000/docs

---

## ⚛️ Frontend Setup

Open a new terminal and navigate to the frontend:

    cd movie-recommendation-system/frontend

Install dependencies:

    npm install

Start the development server:

    npm run dev

The frontend will normally run at:

    http://localhost:5173

---

## 🔌 API Endpoint

### Get Movie Recommendations

    GET /recommend/{movie_name}

Example:

    GET /recommend/iron%20man

Example response:

    {
      "movie": "iron man",
      "recommendations": [
        {
          "title": "Iron Man 3",
          "rating": 6.932,
          "poster": "https://image.tmdb.org/t/p/w500/example.jpg",
          "overview": "Movie overview...",
          "release_year": "2013"
        }
      ]
    }

---

## 📊 Machine Learning

The recommendation engine uses content-based filtering.

### TF-IDF

TF-IDF converts movie metadata into numerical vectors based on the importance of words within the dataset.

### Cosine Similarity

Cosine similarity compares the vectors and identifies movies with similar feature representations.

The trained recommendation models are stored using Git LFS because of their large file sizes.

---

## ☁️ Deployment

| Component | Platform |
|---|---|
| Frontend | Netlify |
| Backend | Render |
| ML Models | Git LFS |
| Source Code | GitHub |

---

## 🛡️ Error Handling

The frontend handles common errors including:

- Empty movie searches
- Movies not found in the dataset
- Backend server errors
- Network connection errors
- Empty recommendation results

Users receive friendly messages instead of raw API errors.

---

## 🔮 Future Improvements

- Fuzzy movie-title matching
- Movie search autocomplete
- Genre-based filtering
- Improved recommendation ranking
- Personalised user recommendations
- Movie trailers
- Additional TMDB information
- Improved mobile responsiveness

---

## 👨‍💻 Author

**Dhruval Prajapati**

GitHub: https://github.com/dhruvalcodes

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.
