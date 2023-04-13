import React from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionTypes";
const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i>
              {" "}
              <FaEye size={25} />
            </i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
          >
            <FaTimes size={25} />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i>
              {" "}
              <FaEyeSlash size={25} />
            </i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
          >
            <FaTimes size={25} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
