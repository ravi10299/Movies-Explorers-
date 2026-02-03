import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MoviesDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMaovies() {
      const results = await fetch(
        `https://www.omdbapi.com/?apikey=15eb6af2&i=${id}`,
      );
      const data = await results.json();
      setMovie(data);
      console.log(data);
    }
    getMaovies();
  }, [id]);

  if (!movie) return <p>Loading ....</p>;

  return (
    <div>
      <div className="movie-details-container">
        <div className="movie-details">
          {/* Left Side Poster */}
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>

          {/* Right Side Content */}
          <div className="movie-content">
            {/* Title */}
            <h1>
              {movie.Title} <span>({movie.Year})</span>
            </h1>

            {/* Tags Row */}
            <div className="movie-tags">
              <span>{movie.Genre}</span>
              <span>{movie.Language}</span>
              <span>{movie.Country}</span>
            </div>

            {/* Movie Info */}
            <div className="movie-info">
              <p>
                <strong>Actors:</strong> {movie.Actors}
              </p>
              <p>
                <strong>Director:</strong> {movie.Director}
              </p>
              <p>
                <strong>Writer:</strong> {movie.Writer}
              </p>
            </div>

            {/* Highlights */}
            <div className="movie-highlights">
              <div className="highlight-box">
                ⭐ IMDb <br /> {movie.imdbRating}
              </div>

              <div className="highlight-box">
                💰 BoxOffice <br /> {movie.BoxOffice}
              </div>

              <div className="highlight-box">
                🏆 Awards <br /> {movie.Awards}
              </div>
            </div>

            {/* Plot */}
            <h3>Plot</h3>
            <p className="plot-text">{movie.Plot}</p>

            {/* Ratings */}
            <h3>Ratings</h3>
            <ul className="ratings-list">
              {movie.Ratings.map((rate, index) => (
                <li key={index} className="rating-item">
                  <span className="rating-source">{rate.Source}</span>
                  <span className="rating-value">{rate.Value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
