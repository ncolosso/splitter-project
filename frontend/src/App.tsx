import AllBillsList from "./components/AllBillsList";
import NavBar from "./components/NavBar";

function App() {
  const allTabs = [
    { id: 1, name: "Amity Hall", total: 249.0 },
    { id: 2, name: "White Horse Tavern", total: 68.94 },
    { id: 3, name: "PF Changs", total: 146.14 },
  ];

  return (
    <>
      <NavBar />
      <div className="d-flex flex-column p-4 gap-4 py-md-5">
        <AllBillsList allTabs={allTabs} />
      </div>
    </>
  );
}

export default App;
