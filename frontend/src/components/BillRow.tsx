import {Box, Chip, Paper} from "@mui/material";
import {useEffect, useState} from "react";

interface Props {
    bill: { id: number; title: string; date: string; total: number };
    onDelete: (billId: number) => void;
}

function BillRow({bill, onDelete}: Props) {
    // BOX
    const [boxWidth, setBoxWidth] = useState(window.innerWidth);
    // const [height, setHeight] = useState(128);

    const dateFormatted = new Date(bill.date).toLocaleDateString('en-us', {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    useEffect(() => {
        // this handles the resizing of the bills according to screen size
        const handleResize = () => {
            setBoxWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);


    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& >:not(style)': {
                    border: '.5px solid black',
                    m: 1,
                    p: 1,
                    width: boxWidth,
                    height: 115,
                },
            }}
        >
            <Paper
                elevation={5}
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
    );
}

export default BillRow;
