import { Box, Divider, Stack, Typography } from "@mui/material";

export default function Copyright() {
    return (
        <Box sx={{ mb: 3 }}>
            <footer>
                <Divider sx={{ m: 3 }} />
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Typography variant="body2" color="text.secondary" align="center" className="fixed-bottom">
                        {`© ${new Date().getFullYear()} Bryce Cary`}
                    </Typography>
                </Stack>
            </footer>
        </Box>
    );
}
