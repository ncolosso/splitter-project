import HomePage from "./components/HomePage.tsx";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <div className="d-flex flex-column p-4 gap-4 py-md-5">
        <HomePage/>
      </div>
    </>
  );
}

export default App;
