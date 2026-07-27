import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {

  const [movies, setMovies] = useState([]);

  const handleSearch = async (movieName) => {

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/recommend/${movieName}`
      );

      setMovies(response.data.recommendations);

    } catch (error) {
      console.log("Error fetching movies:", error);
    }

  };


  return (
    <div>

      <h1>Movie Recommendation System 🎬</h1>

      <SearchBar onSearch={handleSearch} />

      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>

          {movie.poster && (
            <img
              src={movie.poster}
              width="200"
            />
          )}

        </div>
      ))}

    </div>
  );
}

export default App;