import {Chip, Box, Paper} from "@mui/material";
// import {useState} from "react";

interface Props {
    bill: { id: number; title: string; date: string; total: number };
    onDelete: (billId: number) => void;
}

function BillRow({bill, onDelete}: Props) {
    // BOX
    // const [width, setWidth] = useState(1000);
    // const [height, setHeight] = useState(128);

    const dateFormatted = new Date(bill.date).toLocaleDateString('en-us', {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& >:not(style)': {
                        border: '.5px solid black',
                        m: 1,
                        p: 1,
                        width: 1000,
                        height: 128,
                    },
                }}
            >
                <Paper
                    elevation={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between', // This will space out the children elements evenly
                        alignItems: 'center', // This will align the children elements vertically in the center
                        width: '100%', // This will make the Paper element take the full width of the Box
                        padding: '0 16px', // Add some padding to the sides of the Paper element
                    }}
                >
                    <div className="fw-bold">{bill.title}</div>
                    <div className="ms-2 me-auto">{dateFormatted}</div>

                    <Chip
                        label={bill.total.toFixed(2)}
                        // TODO ADD AVATAR
                        // avatar={<span>$</span>}
                        className="badge text-bg-success"></Chip>
                        <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => {
                            onDelete(bill.id);
                        }}
                    ></button>


                </Paper>
            </Box>
        </>
    );
}

export default BillRow;
