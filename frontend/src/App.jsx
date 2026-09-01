import { useState } from "react";
import "./App.css";

const API_URL = "https://movie-recommendation-api-8vao.onrender.com";

function App() {
  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getRecommendations = async () => {
    if (!movie.trim()) {
      setError("Please enter a movie name.");
      return;
    }

    setLoading(true);
    setError("");
    setRecommendations([]);

    try {
      const response = await fetch(
        `${API_URL}/recommend/${encodeURIComponent(movie)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Movie not found.");
      }

      setRecommendations(data.recommendations);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Unable to connect to the movie recommendation server."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getRecommendations();
    }
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <div className="badge">
            AI MOVIE RECOMMENDER
          </div>

          <h1>
            Find your next
            <span> favourite movie.</span>
          </h1>

          <p className="subtitle">
            Discover movies similar to your favourites using
            machine learning and content-based recommendation.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              onClick={getRecommendations}
              disabled={loading}
            >
              {loading ? "Finding..." : "Recommend"}
            </button>
          </div>

          {error && (
            <p className="error">
              {error}
            </p>
          )}
        </div>
      </header>

      <main className="container results">
        {loading && (
          <div className="loading">
            Finding movies similar to <strong>{movie}</strong>...
          </div>
        )}

        {!loading && recommendations.length > 0 && (
          <>
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  RECOMMENDATIONS
                </p>

                <h2>
                  Because you liked {movie}
                </h2>
              </div>

              <span className="count">
                {recommendations.length} movies
              </span>
            </div>

            <div className="movie-grid">
              {recommendations.map((movie, index) => (
                <div
                  className="movie-card"
                  key={`${movie.title}-${index}`}
                >
                  <div className="poster-container">
                    {movie.poster ? (
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="poster"
                      />
                    ) : (
                      <div className="no-poster">
                        No Poster
                      </div>
                    )}
                  </div>

                  <div className="movie-info">
                    <h3>
                      {movie.title}
                    </h3>

                    <div className="movie-meta">
                      <span>
                        Movie
                      </span>

                      <span className="rating">
                        ★ {movie.rating?.toFixed(1) ?? "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {!loading &&
          recommendations.length === 0 &&
          !error && (
            <div className="empty-state">
              <div className="film-icon">
                🎬
              </div>

              <h2>
                Discover something new
              </h2>

              <p>
                Search for a movie above to get
                similar movie recommendations.
              </p>
            </div>
          )}
      </main>

      <section className="how-section">
        <div className="container">
          <p className="eyebrow">
            HOW IT WORKS
          </p>

          <h2>
            Recommendation powered by machine learning.
          </h2>

          <div className="steps">
            <div className="step">
              <span>01</span>

              <h3>
                Movie Data
              </h3>

              <p>
                Movie information is processed from
                the TMDB 5000 dataset.
              </p>
            </div>

            <div className="step">
              <span>02</span>

              <h3>
                TF-IDF
              </h3>

              <p>
                Movie metadata is converted into
                numerical vectors using TF-IDF.
              </p>
            </div>

            <div className="step">
              <span>03</span>

              <h3>
                Similarity
              </h3>

              <p>
                Cosine similarity identifies movies
                with similar characteristics.
              </p>
            </div>

            <div className="step">
              <span>04</span>

              <h3>
                Recommendations
              </h3>

              <p>
                The most similar movies are returned
                through the FastAPI backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Built with
          <strong>
            Python · FastAPI · Scikit-learn · React
          </strong>
        </p>
      </footer>
    </div>
  );
}

export default App;