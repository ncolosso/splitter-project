import {Modal,} from '@nextui-org/react';
import {Button, Stack, Typography} from '@mui/material';
import ReceiptItemInput from './ReceiptItemInput.tsx';
import {useState} from "react";

interface Props {
    bill: { id: number; title: string; date: string; total: number };
    setVisible: (visible: boolean) => void;
    bindings: any;
    isMobile: boolean;
}

interface Person {
    id: number;
    name: string;
}

interface ReceiptItem {
    bid: number;
    title: string;
    price: number;
    quantity: number;
    person: Person;
}

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


export default function BillDetail({bill, setVisible, bindings, isMobile}: Props) {
    const handleModalClose = () => {
        setVisible(false);
    }
    // @ts-ignore
    const dateFormatted = new Date(bill.date).toLocaleDateString('en-us', {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const titleFormatted = toTitleCase(bill.title);

    // DETAILS MODAL PROPS
    const [receiptItems, setReceiptItems] = useState<ReceiptItem[]>([<ReceiptItemInput key={0}/>]);
    const handleAddButtonClick = () => {
        setReceiptItems(prevItems => [...prevItems, <ReceiptItemInput key={prevItems.length}/>]);
    }

    const [itemTitle, setItemTitle] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemQuantity, setItemQuantity] = useState(1);





    return (
        <Modal
            scroll
            width={"800px"}
            fullScreen={isMobile}
            closeButton
            aria-labelledby={"modal-title"}
            aria-describedby={"modal-description"}
            {...bindings}
        >
            <Modal.Header>
                <Typography
                    id={"modal-title"}
                    variant={"h2"}
                >
                    {titleFormatted}

                </Typography>

            </Modal.Header>
            <Modal.Body>

                {/*<Typography*/}
                {/*    variant={"subtitle1"}*/}
                {/*>*/}
                {/*    {dateFormatted}*/}
                {/*</Typography>*/}

                {/*RECEIPT ITEMS*/}
                <Stack spacing={2}>
                    {receiptItems}
                </Stack>
                <Button
                    onClick={handleAddButtonClick}
                >
                    Add</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant={"contained"}
                    color={"success"}
                    onClick={handleModalClose}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}