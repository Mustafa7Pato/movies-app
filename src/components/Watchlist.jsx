import React from "react";
import { useMovieContext } from "../Context/GlobalContext";
import MovieCard from "./MovieCard";
import "../components/style/watchlist.css";
const Watchlist = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watchlist</h1>
          <span className="movies-count">
            {MovieContext.watchlist.length}{" "}
            {MovieContext.watchlist.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => {
              return (
                <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
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

export default Watchlist;
