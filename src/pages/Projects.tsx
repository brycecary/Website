import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Button, Chip, Grid, Paper, Stack, Typography } from "@mui/material";

interface IProject {
    name: string;
    description: string;
    url: string;
    tags: string[];
    active: boolean;
}

const projects: IProject[] = [
    {
        name: "Uptime",
        description: "A Discord bot that tracks how much time you spend glued to the service.",
        url: "https://adduptime.net",
        tags: ["Discord", "node", "JS/TS", "Postgres", "Docker"],
        active: true,
    },
    {
        name: "Deploy",
        description: "Lightweight script for automatically deploying repos.",
        url: "https://github.com/brycecary/Deploy",
        tags: ["Public", "Node", "JS/TS", "GitHub", "Webhooks"],
        active: true,
    },
    {
        name: "River Hawk Website",
        description: "A website for the River Hawk Chapter of Nentico Lodge 12, Order of the Arrow.",
        url: "https://riverhawkoa.org",
        tags: ["React", "JS/TS", "Material UI", "Node", "Docker", "Postgres"],
        active: true,
    },
    {
        name: "Nentico Lodge 12 Website",
        description: "A website for Nentico Lodge 12, Order of the Arrow.",
        url: "https://nentico.org",
        tags: ["WordPress", "Bootstrap", "PHP"],
        active: true,
    },
    {
        name: "FRC Robot Software",
        description: "Software for the FIRST Robotics Competition (FRC) 2019-2021 seasons.",
        url: "https://github.com/cavineers",
        tags: ["Public", "Java", "Gradle", "WPILib", "FRC"],
        active: false,
    },
];

export default function Projects() {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Projects
            </Typography>
            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} justifyContent={"space-evenly"}>
                {projects.map((project) => (
                    <Paper key={project.name} elevation={2} sx={{ p: 4, maxWidth: { xs: "100%", md: "48%" } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={9}>
                                <Typography variant="h4" gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {project.description}
                                </Typography>
                                <Grid container spacing={1} sx={{ mt: 3 }}>
                                    <Grid item>
                                        <Chip variant="outlined" label={project.active ? "Active" : "Inactive"} color={project.active ? "success" : "warning"} />
                                    </Grid>
                                    {project.tags.map((tag) => (
                                        <Grid item key={tag}>
                                            <Chip variant="outlined" label={tag} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Button variant="outlined" href={project.url} startIcon={<OpenInNewIcon />} target="_blank" fullWidth>
                                    View
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
}
