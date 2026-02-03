import MoviesCard from "./MoviesCard";

function MoviesList({ movies }) {
  if (movies.length === 0) {
    return (
      <div className="loading-container">
        <div className="loader">no movies found</div>
      </div>
    );
  }
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MoviesCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
