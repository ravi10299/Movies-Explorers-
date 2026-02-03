import { useEffect, useRef, useState } from "react";
import MoviesList from "../components/MoviesList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const fatchMovies = async (quary) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=15eb6af2&s=${quary}`,
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.Search || []);
    setLoading(false);
  };
  useEffect(() => {
    fatchMovies("The Avengers");
  }, []);

  const handleOnSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      fatchMovies(query);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleOnSearch}>
        <input
          className="searchInput"
          ref={inputRef}
          placeholder="Search for a movie..."
        />
        <button type="submit" className="searchBtn">
          Search 🔎
        </button>
      </form>
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
        </div>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
}

export default Home;
