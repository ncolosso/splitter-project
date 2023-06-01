import {JSX} from "react";
import {Navbar, Text, Spacer, Link, Image} from "@nextui-org/react";
import {Button} from "@mui/material";
// import DarkModeToggle from "./DarkModeToggle.tsx";


export default function NavBarMUI(): JSX.Element {
    const collapseItems = [
        "Home",
        "About",
        "Login"
    ]
    return (
        <Navbar

            isBordered
            variant={"floating"}

        >
            <Navbar.Brand>
                <Navbar.Toggle aria-label={"toggle"}/>
                <Spacer y={.5}/>
                {/* TODO LOGO HERE */}
                <Image src={"../src/assets/split_logo.png"} width={50} height={50} alt={"logo"}/>
                <Text h1>Splitter</Text>
                <Spacer y={1}/>
                <Text i>the bill splitting app</Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn={"sm"} variant={"underline"}>
                <Button
                    variant={"contained"}
                >
                    Login
                </Button>

            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>


        </Navbar>
    )
}