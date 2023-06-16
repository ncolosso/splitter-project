import {Avatar, Input, InputAdornment, Stack, TextField} from "@mui/material";
import {useState} from "react";

interface Person {
    id: number;
    name: string;
}

interface Props {
    name: string;
    price: number;
    person: Person;
    quantity: number;
}

export default function ReceiptItemInput({name, price, person, quantity}: Props) {

    // @ts-ignore
    const [value, setValue] = useState(1);


    return (
        <>


            <Stack
                direction={"row"}
                spacing={{
                    xs: 1,
                    sm: 2,
                    md: 4
                }}
            >

                <Avatar/>

                <TextField id={"standard-basic"}
                           label={"Enter a receipt item"}
                           variant={"standard"}
                           sx={{
                               flex: 3,
                           }}
                />

                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    sx={{
                        flex: 1,
                    }}
                />

            </Stack>

        </>

    )
}