import { Link } from "react-router-dom";

function MoviesCard({ movie }) {
  return (
    <div>
      <div className="movie-card">
        <img alt="The Avengers" src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movies/${movie.imdbID}`}>Details</Link>
      </div>
    </div>
  );
}

export default MoviesCard;
