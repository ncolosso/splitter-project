import {ToggleButton} from "@mui/material";
import DarkMode from "@mui/icons-material/DarkMode";
import {useContext} from "react";
import {DarkModeContext} from "../App";


export default function DarkModeToggle() {
    const {darkMode, handleDarkModeToggle} = useContext(DarkModeContext);
    return (
        <>
            <ToggleButton
                value={"check"}
                selected={darkMode}
                onChange={handleDarkModeToggle}
                >
                <DarkMode/>
            </ToggleButton>



        </>
    )
}