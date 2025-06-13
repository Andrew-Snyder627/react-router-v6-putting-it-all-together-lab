import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies.
          Click below to start exploring!
        </p>
        {/* Links to main app sections */}
        <nav>
          <Link to="/directors">View Directors</Link>
          {" | "} {/* Little UI spacing/pipe */}
          <Link to="/about">Learn More About This App</Link>
        </nav>
      </main>
    </>
  );
}

export default Home;
