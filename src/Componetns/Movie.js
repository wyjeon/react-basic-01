import React from 'react';

const Movie = ({ movie, removeMovie }) => {
  return (
    <div className="movie">
      <div className="movie__title">{movie.title}</div>
      <span className="movie__year">({movie.year})</span>
      <div>
        <button onClick={() => removeMovie(movie.id)}>삭제</button>
      </div>
    </div>
  );
};

export default Movie;
