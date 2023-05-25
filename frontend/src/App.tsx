import { useState } from "react";
import AllBillsList from "./components/AllBillsList";
import NavBar from "./components/NavBar";

function App() {
  const initData = [
    { id: 1, title: "Amity Hall", date: "May 1, 2023", total: 249.0 },
    { id: 2, title: "White Horse Tavern", date: "Feb 21, 2023", total: 68.94 },
    { id: 3, title: "12 Chairs", date: "Oct 11, 2022", total: 146.14 },
  ];

  const [allBills, setAllBills] = useState(initData);

  const handleSubmitNewBill = (title: string, date: string) => {
    allBills.push({
      id: Math.floor(Math.random() * 100),
      title: title,
      date: date,
      total: 0,
    });
  };

  const handleDeleteBill = (billId: number) => {
    setAllBills(allBills.filter((bill) => bill.id != billId));
  };

  return (
    <>
      <NavBar />
      <div className="d-flex flex-column p-4 gap-4 py-md-5">
        <AllBillsList
          allBills={allBills}
          onSubmitNewBill={handleSubmitNewBill}
          onDeleteBill={(billId) => handleDeleteBill(billId)}
        />
      </div>
    </>
  );
}

export default App;
