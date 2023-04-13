import React from "react";
import "../components/style/resultsCard.css";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionTypes";
const ResultsCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date"> {movie.Year} </h4> : "-"}
        </div>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="btn"
          >
            Add To Watchlist
          </button>
          <button
            disabled={watchedDisabled}
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn"
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
