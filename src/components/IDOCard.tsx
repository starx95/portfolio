import type { JSX } from "react";
import { Box } from "@mui/material";

interface IDOCardProps {
    icon: JSX.Element | string;
    title: string;
    desc: string;
}

export const IDOCard: React.FC<IDOCardProps> = ({ icon, title, desc }) => {
    return(
        <Box className="container">
            <Box/>
            {icon}
            <h5 >{title}</h5>
            <p>{desc}</p>
        </Box>
    )
} 