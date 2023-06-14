import {Context, createContext, useState} from "react";
import HomePage from "./components/HomePage.tsx";
// import NavBar from "./components/NavBar";
import NavBarMUI from "./components/NavBarMUI.tsx";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';


export const DarkModeContext: Context<any> = createContext(false);

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: "#3767af",
            },
            secondary: {
                main: '#fffbad'
            }
        }
    });

    const handleDarkModeToggle = (): void => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <DarkModeContext.Provider value={{darkMode, handleDarkModeToggle}}>

                            {/*<NavBar/>*/}
                            <NavBarMUI/>
                            <div className="d-flex flex-column p-4 gap-4 py-md-5">
                                <HomePage/>
                            </div>
                        </DarkModeContext.Provider>
                    </CssBaseline>
                </ThemeProvider>
            </LocalizationProvider>
        </>
    );
}

export default App;
