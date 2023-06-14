import {Modal,} from '@nextui-org/react';
import {Button, Typography} from '@mui/material';

interface Props {
    bill: { id: number; title: string; date: string; total: number };
    setVisible: (visible:boolean) => void;
    bindings: any;
    isMobile: boolean;
}

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function(txt:string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}



export default function BillDetail({bill, setVisible, bindings, isMobile}: Props) {
    // find if user is mobile




    const handleModalClose = () => {
        setVisible(false);
    }
    const dateFormatted = new Date(bill.date).toLocaleDateString('en-us', {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const titleFormatted = toTitleCase(bill.title)


    return (
        <Modal
            scroll
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
                <Typography
                    variant={"subtitle1"}
                >
                    {dateFormatted}
                </Typography>
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