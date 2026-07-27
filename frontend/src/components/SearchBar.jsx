import { useState } from "react";

function SearchBar({ onSearch }) {
    const [movie, setMovie] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (movie.trim()) {
            onSearch(movie);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a movie name..."
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
            />

            <button type="submit">
                Recommend
            </button>
        </form>
    );
}

export default SearchBar;