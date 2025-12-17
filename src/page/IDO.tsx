import { Box, Chip } from "@mui/material";
import '../css/IDO.css';
import { IDOCard } from "../components/IDOCard";
import { CiGlobe } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { BiSolidReport } from "react-icons/bi";
import { TbAugmentedReality } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";

export function IDO() {
    const icons = [
        { Icon: CiGlobe, title: "Frontend Development", desc: "Building responsive and dynamic websites using modern frameworks and technologies." },
        { Icon: CiMobile1, title: "Mobile App Development", desc: "Creating user-friendly mobile applications for both Android and iOS platforms." },
        { Icon: BiSolidReport, title: "Reporting tools Development", desc: "Designing and implementing reporting tools to visualize data effectively." },
        { Icon: TbAugmentedReality, title: "Augmented Reality Development", desc: "Building browser-based augmented reality experiences with a focus on performance, 3D interaction, and seamless user experience." },
        { Icon: TbApi, title: "Backend Development", desc: "Creating scalable backend systems, REST APIs, database structures, and server-side logic to support modern web and mobile applications." },
        { Icon: LuLayoutDashboard, title: "UI/UX Implementation", desc: "Transforming designs into clean, accessible, and responsive user interfaces with smooth interactions."},
    ];
  return (
    <Box className="content">
        <Box className="page-wrapper">
            <Chip label="WHAT I DO" className="chip" />
            <Box className="ido-cards-wrapper">
                {icons.map(({ Icon, title, desc }) => (
                    <div key={title}>
                        <IDOCard  title={title} desc={desc} icon={<Icon className="ido-card-icon" color="#00c6ff" size={80}/>} />
                    </div>
                ))}
            </Box>
        </Box>
    </Box>
        
  );
}