import { useState } from "react";
import BillRow from "./BillRow";
import NewBillForm from "./NewBillForm";

interface Props {
  allBills: { id: number; title: string; date: string; total: number }[];
  onSubmitNewBill: (title: string, date: string) => void;
  onDeleteBill: (billId: number) => void;
}

function AllBillsList({ allBills, onSubmitNewBill, onDeleteBill }: Props) {
  const [formVisible, setFormVisible] = useState(false);

  const handleFormSubmitted = (title: string, date: string) => {
    onSubmitNewBill(title, date);
    setFormVisible(false);
  };

  return (
    <>
      <div className="d-flex">
        <h1>My Bills</h1> &nbsp;
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => {
            setFormVisible(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
          </svg>
          New
        </button>
      </div>
      {formVisible && (
        <NewBillForm
          onFormClose={() => {
            setFormVisible(false);
          }}
          onFormSubmit={(title, date) => handleFormSubmitted(title, date)}
        />
      )}
      {allBills.length === 0 && <p>No bills found.</p>}
      <ol className="list-group">
        {allBills.map((bill) => {
          return (
            <BillRow
              key={bill.id}
              bill={bill}
              onDelete={(billId) => onDeleteBill(billId)}
            />
          );
        })}
      </ol>
    </>
  );
}

export default AllBillsList;
