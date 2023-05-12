import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
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
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
            {value === index && <Box sx={{ mt: 4 }}>{children}</Box>}
        </div>
    );
}

export default function App() {
    const [value, setValue] = React.useState(window.location.pathname ?? "/");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", minHeight: "100vh" }}>
            <Container>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                    <img src="//assets.brycecary.dev/banner/v2/banner_v2_blue.png" alt="Bryce Cary" style={{ width: "60%", height: "auto", userSelect: "none" }} draggable={false} />
                </Box>

                <Box sx={{ minHeight: "75%" }}>
                    <Router>
                        <Tabs orientation="horizontal" value={value} onChange={handleChange} aria-label="Vertical tabs example" centered>
                            <Tab value="/" label="About" component={Link} to="/" />
                            <Tab value="/projects" label="Projects" component={Link} to="/projects" />
                            <Tab value="/contact" label="Contact" component={Link} to="/contact" />
                        </Tabs>
                        <TabPanel value={value} index={"/"}>
                            <About />
                        </TabPanel>
                        <TabPanel value={value} index={"/projects"}>
                            <Projects />
                        </TabPanel>
                        <TabPanel value={value} index={"/contact"}>
                            <Contact />
                        </TabPanel>
                    </Router>
                </Box>

                <Copyright />
            </Container>
        </Box>
    );
}
