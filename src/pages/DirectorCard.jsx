import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors, setDirectors } = useOutletContext();
  const director = directors.find((d) => d.id === id);

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            {/* Links to nested movie pages */}
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      {/* Links to nested new movie form */}
      <Link to={`movies/new`}>Add New Movie</Link>
      {/* Enables nested rendering via Outlet context */}
      <Outlet context={{ director, setDirectors }} />
    </div>
  );
}

export default DirectorCard;
