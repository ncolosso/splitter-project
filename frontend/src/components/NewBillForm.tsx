import { useState } from "react";
import {NewBillRequest, saveBill} from "../api/billService.tsx";

interface Props {
  onFormClose: () => void;
  onSubmitNewBill: (title: string, date: string) => void;
}

const NewBillForm = ({ onFormClose, onSubmitNewBill }: Props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const onFormSubmit = (title: string, date: string) => {
    saveBill(new NewBillRequest(title, date)).then(res => {
      console.log(res);
      onSubmitNewBill(title, date);
    });
  }

  return (
    <div className="">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="title"
            aria-describedby="titleExample"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="titleExample" className="form-text">
            ex. Dinner at 12 Chairs
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div id="dateFormat" className="form-text">
            ex. Jan 1, 2023
          </div>
        </div>
        <div className="d-flex">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => onFormSubmit(title, date)}
          >
            Submit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onFormClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBillForm;
