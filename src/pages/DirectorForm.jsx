import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const { setDirectors } = useOutletContext(); // Allows for updating global list
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Builds new director object with empty movie list
    const newDirector = { name, bio, movies: [] };
    // POST request to backend to create a new director
    fetch("http://localhost:4000/directors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDirector),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to add director");
        }
        return r.json();
      })
      .then((data) => {
        console.log(data);
        setDirectors((prev) => [...prev, data]); // Adds new director to state
        navigate(`/directors/${data.id}`); //Redirects to new director page
      })
      .catch(console.log);
  };

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm;
