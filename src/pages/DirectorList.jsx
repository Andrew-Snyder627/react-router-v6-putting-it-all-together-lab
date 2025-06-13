import { useOutletContext, Link } from "react-router-dom";

const DirectorList = () => {
  // Gets list of directors from parent (Director Container)
  const { directors } = useOutletContext();
  // Dynamically generate links to each directors page
  const displayDirectors = directors.map((d) => (
    <li key={d.id}>
      <Link to={`/directors/${d.id}`}>{d.name}</Link>
    </li>
  ));

  return <ul>{displayDirectors}</ul>;
};

export default DirectorList;
