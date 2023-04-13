import React from "react";
import { useMovieContext } from "../Context/GlobalContext";
import MovieCard from "./MovieCard";
import "../components/style/watchlist.css";
const Watched = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h1>My Watched</h1>
          <span className="movies-count">
            {MovieContext.watched.length}{" "}
            {MovieContext.watched.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => {
              return (
                <MovieCard key={movie.imdbID} movie={movie} type="watched" />
              );
            })}
          </div>
        ) : (
          <h1 className="no-movies">No Movies in Your list,add some!</h1>
        )}
      </div>
    </div>
  );
};

export default Watched;
