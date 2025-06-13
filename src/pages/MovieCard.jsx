import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieId } = useParams(); // Extracts movie ID from nested route
  const { director } = useOutletContext(); // Gets current director context

  if (!director) return <h2>Director not found.</h2>;

  // Finds specific movie via ID
  const movie = director.movies.find((movie) => movie.id === movieId);
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieCard;
