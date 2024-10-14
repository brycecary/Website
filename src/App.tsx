import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Copyright from "./components/Copyright";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
}

function TabPanel(props: TabPanelProps) {
    return (
        <div role="tabpanel" hidden={props.value !== props.index} id={`vertical-tabpanel-${props.index}`} aria-labelledby={`vertical-tab-${props.index}`}>
            {props.value === props.index && <Box sx={{ mt: 4 }}>{props.children}</Box>}
        </div>
    );
}

export default function App() {
    const [page, setPage] = React.useState(window.location.pathname ?? "/");

    const handleChange = (event: React.SyntheticEvent, newPage: string) => {
        setPage(newPage);
    };

    return (
        <Box sx={{ flexGrow: 1, display: "flex", minHeight: "100vh", background: "radial-gradient(circle, rgba(45,121,190,1) 0%, rgba(28,37,65,1) 100%)", m: 0 }}>
            <Box
                sx={{
                    background: "rgba(4, 7, 16, 0.9)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(8px)",
                    width: "100vw",
                    height: "100vh",
                    m: 0,
                    overflow: "hidden",
                }}
            >
                <Box sx={{ height: "100vh", width: "100vw", display: "flex", overflowY: "auto", flexDirection: "column" }}>
                    <Container sx={{ flex: "1 0 auto" }}>
                        <Box sx={{ textAlign: "center", mt: 2 }}>
                            <img src="//assets.brycecary.dev/banner/v2/banner_v2_blue.png" alt="Bryce Cary" style={{ width: "60%", userSelect: "none" }} draggable={false} />
                        </Box>

                        <About />
                        <Projects />
                        <Contact />
                    </Container>

                    <Box sx={{ flexShrink: "0" }}>
                        <Copyright />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
