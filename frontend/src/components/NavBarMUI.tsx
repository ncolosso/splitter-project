import {JSX} from "react";
import {Image, Link, Navbar, Spacer, Text} from "@nextui-org/react";
import {Button} from "@mui/material";

// import DarkModeToggle from "./DarkModeToggle.tsx";

class Page{
    title: string;
    link: string;
    constructor(title: string, link: string) {
        this.title = title;
        this.link = link;
    }
}

export default function NavBarMUI(): JSX.Element {
    const pages: Page[] = [
        // ADD NEW ROUTES HERE
        new Page("Home", "/"),
        new Page("About", "/about"),
        new Page("Login", "/login"),
    ]


    return (
        <Navbar
            isBordered
            variant={"floating"}

        >
            <Navbar.Brand>
                <Navbar.Toggle aria-label={"toggle"}/>
                <Spacer y={.5}/>
                <Image src={"../src/assets/split_logo.png"} width={50} height={50} alt={"logo"}/>
                <Text h1>Splitter</Text>
                <Spacer y={1}/>
                <Text i>the bill splitting app</Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn={"sm"} variant={"underline"}>
                <Button
                    variant={"outlined"}
                >
                    Login
                </Button>

            </Navbar.Content>
            <Navbar.Collapse>
                {pages.map((item) => (
                    <Navbar.CollapseItem key={item.title}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.link}
                        >
                            {item.title}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>


        </Navbar>
    )
}