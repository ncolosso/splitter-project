import {useState} from "react";
import {NewBillRequest, saveBill} from "../api/billService.tsx";
import {Button, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import {Dayjs} from 'dayjs';

interface Props {
    onFormClose: () => void;
    onSubmitNewBill: () => void;
}

const NewBillForm = ({onFormClose, onSubmitNewBill}: Props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const onFormSubmit = (title: string, date: string) => {
        saveBill(new NewBillRequest(title, date)).then(res => {
            console.log(res);
            onSubmitNewBill();
        });
    }

    // DATE PICKER
    const [dateValue, setDateValue] = useState<Dayjs | null>(null);
    const datePickerHandler = (newValue: any) => {
        // must be in 2023-03-21 YYYY-MM-DD format
        setDateValue(newValue);
        setDate(newValue.format("YYYY-MM-DD"));
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <TextField
                        id={"title"}
                        label={"Title"}
                        variant={"outlined"}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </TextField>
                    <div id="titleExample" className="form-text">
                        ex. Dinner at 12 Chairs
                    </div>
                </div>
                <div className="mb-3">

                    <DatePicker
                        value={dateValue}
                        onChange={datePickerHandler}
                    />

                </div>
                <div className="d-flex">
                    <Button
                        type="submit"
                        // color={"success"}
                        // className="btn btn-primary"
                        onClick={() => onFormSubmit(title, date)}
                    >
                        Submit
                    </Button>
                    &nbsp;
                    <Button
                        color={"error"}
                        // variant={"contained"}
                        // className="btn btn-outline-secondary"
                        onClick={onFormClose}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </>
    );
};

export default NewBillForm;
