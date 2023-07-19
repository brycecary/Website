import { Box, Typography } from "@mui/material";

export default function Copyright() {
    return (
        <Box sx={{ mb: 3 }}>
            <footer>
                <Typography variant="body2" color="text.secondary" align="center" className="fixed-bottom">
                    {`© ${new Date().getFullYear()} Bryce Cary`}
                </Typography>
            </footer>
        </Box>
    );
}
