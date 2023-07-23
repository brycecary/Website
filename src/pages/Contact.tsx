import { GitHub, LinkedIn, MailOutline, Twitter } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, createSvgIcon } from "@mui/material";

interface IContact {
    name: string;
    url: string;
    icon: any;
}

const TwitchSVG = createSvgIcon(
    <svg viewBox="0 0 2400 2800" fill="currentColor">
        <g>
            <g id="Layer_1-2">
                <path d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600 V1300z" />
                <rect x="1700" y="550" width="200" height="600" />
                <rect x="1150" y="550" width="200" height="600" />
            </g>
        </g>
    </svg>,
    "Twitch"
);

const DiscordSVG = createSvgIcon(
    <svg viewBox="0 0 245 240" fill="currentColor">
        <g>
            <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
            <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
        </g>
    </svg>,
    "Discord"
);

const contactLinks: IContact[] = [
    {
        name: "contact@brycecary.dev",
        url: "mailto:contact@brycecary.dev",
        icon: MailOutline,
    },
    {
        name: "GitHub",
        url: "https://github.com/brycecary",
        icon: GitHub,
    },
    {
        name: "Twitter",
        url: "https://twitter.com/brycecary_",
        icon: Twitter,
    },
    {
        name: "Twitch",
        url: "https://twitch.tv/topmastered_",
        icon: TwitchSVG,
    },
    {
        name: "Discord",
        url: "https://discord.gg/KZzEZ2X",
        icon: DiscordSVG,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brycecary/",
        icon: LinkedIn,
    },
];

export default function Contact() {
    return (
        <Box sx={{ mt: 4 }}>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                {contactLinks.map((contact) => (
                    <Tooltip key={contact.name} title={contact.name} placement="top">
                        <IconButton href={contact.url} target="_blank" size="large">
                            <contact.icon />
                        </IconButton>
                    </Tooltip>
                ))}
            </Stack>
        </Box>
    );
}
