import {useEffect, useState} from "react";
import {getBills} from "../api/billService.tsx";
import NewBillForm from "./NewBillForm.tsx";
import BillRow from "./BillRow.tsx";

function BillsList() {
    const initData = [
        { id: 1, title: "Amity Hall", date: "May 1, 2023", total: 249.0 },
        { id: 2, title: "White Horse Tavern", date: "Feb 21, 2023", total: 68.94 },
        { id: 3, title: "12 Chairs", date: "Oct 11, 2022", total: 146.14 },
    ];

    const [staticBillsData, setStaticBillsData] = useState(initData);

    const handleDeleteBill = (billId: number) => {
        setStaticBillsData(staticBillsData.filter((bill) => bill.id != billId));
    };

    const [bills, setBills] = useState<any[]>([]);
    const [formVisible, setFormVisible] = useState(false);

    const fetchBills = () => {
        getBills().then(res => {
            setBills(res.data);
        })
    }

    useEffect(() => {
        fetchBills();
    }, [])

    const handleSubmitNewBill = (title: string, date: string) => {
        staticBillsData.push({
            id: Math.floor(Math.random() * 100),
            title: title,
            date: date,
            total: 0,
        });
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
                    onSubmitNewBill={(title, date) => handleSubmitNewBill(title, date)}
                />
            )}
            {bills.length === 0 && <p>No bills found.</p>}
            <ol className="list-group">
                {bills.map((bill) => {
                    return (
                        <BillRow
                            key={bill.id}
                            bill={bill}
                            onDelete={(billId) => handleDeleteBill(billId)}
                        />
                    );
                })}
            </ol>
        </>
    );
}

export default BillsList;