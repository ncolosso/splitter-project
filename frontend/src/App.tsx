import HomePage from "./components/HomePage.tsx";
import NavBar from "./components/NavBar";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: "#3767af",
            },
            secondary: {
                main: '#fffbad'
            }
        }
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <NavBar/>
                    <div className="d-flex flex-column p-4 gap-4 py-md-5">
                        <HomePage/>
                    </div>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}

export default App;
