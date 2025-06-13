import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [genres, setGenres] = useState("");
  const { id } = useParams(); // Extracts director ID from URL
  const navigate = useNavigate();
  const { director, setDirectors } = useOutletContext(); // Access current director

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct new movie with unique ID
    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((genre) => genre.trim()),
    };
    // PATCH request to update directors movie list
    fetch(`http://localhost:4000/directors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movies: [...director.movies, newMovie] }),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to add movie");
        }
        return r.json();
      })
      .then((data) => {
        console.log(data);
        // Update State with new movie
        setDirectors((prev) => prev.map((d) => (d.id === data.id ? data : d)));
        // Navigate to new movie details
        navigate(`/directors/${id}/movies/${newMovie.id}`);
      })
      .catch(console.log);
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;
