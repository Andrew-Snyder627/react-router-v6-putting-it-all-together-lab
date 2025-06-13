import NavBar from "../components/NavBar";
// Simple Error message if faulty URL is usedd
function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1> 404 - Page Not Found</h1>
        <p>The page you are looking for does not exist. Sorry..</p>
      </main>
    </>
  );
}

export default ErrorPage;
