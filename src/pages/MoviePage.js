import React, { useState } from 'react';
import Movie from '../Componetns/Movie';
import MovieForm from '../Componetns/MovieForm';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const removeMovie = id => {
    setMovies(
      movies.filter(movie => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie, index) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : '추가된 영화가 없습니다.';

  const addMovie = movie => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
};

export default MoviePage;
