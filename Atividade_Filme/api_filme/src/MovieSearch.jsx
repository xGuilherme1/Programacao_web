import React, { useState } from "react";
import axios from "axios";
import "./MovieSearch.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query },
      });
      setMovies(response.data.results);
    } catch (err) {
      setError("Erro ao buscar filmes. Tente novamente.");
    }
    setLoading(false);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-search-container">
      <h1>Busca de Filmes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Buscar</button>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.overview.slice(0, 100)}...</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details">
          <button onClick={handleCloseDetails}>Fechar</button>
          <h2>{selectedMovie.title}</h2>
          <p><strong>Lançamento:</strong> {selectedMovie.release_date}</p>
          <p><strong>Descrição:</strong> {selectedMovie.overview}</p>
          <p><strong>Avaliação:</strong> {selectedMovie.vote_average} / 10</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
        </div>
      )}
    </div>
  );
}
