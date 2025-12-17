import { Box } from "@mui/material";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { IoLogoIonic } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FancyTooltip } from "./FancyTooltip";


export const TechStackFooter = () => {
  const logos = [
    { Icon: AiOutlineDotNet, alt: ".NET", hover: "Dotnet" },
    { Icon: FaReact, alt: "React.js", hover: "ReactJs" },
    { Icon: TbBrandReactNative, alt: "React Native", hover: "React Native" },
    { Icon: FaVuejs, alt: "Vuejs", hover: "VueJs" },
    { Icon: FaAngular, alt: "Angular", hover: "Angular" },
    { Icon: FaFlutter, alt: "Flutter", hover: "Flutter" },
    { Icon: IoLogoIonic, alt: "Ionic", hover: "Ionic" },
    { Icon: SiMui, alt: "Material UI", hover: "Material ui" },
    { Icon: RiTailwindCssFill, alt: "Tailwind", hover: "Tailwind css" },
    { Icon: SiRedux, alt: "Redux", hover: "Redux" },
    { Icon: DiMongodb, alt: "MongoDB", hover: "Mongodb" },
    { Icon: VscAzureDevops, alt: "Azure DevOps", hover: "Azure Devops" },
    { Icon: FaNodeJs, alt: "NodeJs", hover: "NodeJs" },
    { Icon: TbBrandCSharp, alt: "CSharp", hover: "Csharp" },
    { Icon: FaPhp, alt: "Php", hover: "Php" },
    { Icon: SiPostgresql, alt: "Postgresql", hover: "PostgreSql" },
    { Icon: DiMsqlServer, alt: "Microsoft SQL Server", hover: "Microsoft SQL Server" },
    { Icon: SiMysql, alt: "MySql", hover: "MySql" },
    { Icon: SiPrisma, alt: "Prisma", hover: "Prisma ORM" },
    { Icon: TbBrandThreejs, alt: "Threejs", hover: "ThreeJs" },
  ];

  return (
    <Box
      className="tech-stack-footer"
      sx={{
        width: "100%",
        padding: "30px 0",
        display: "flex",
        justifyContent: "center",
        gap: "2%",
        flexWrap: "wrap",
        background: "#0d1827",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {logos.map(({ Icon, hover }, index) => (
        <div key={index}>
        <FancyTooltip title={hover} arrow>
        <Box
          key={index}
          sx={{
            opacity: 0.65,
            transition: "0.3s",
            filter: "grayscale(30%)",
            cursor: "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              opacity: 1,
              filter: "grayscale(0%)",
            },
          }}
        >
          <Icon size={50} color="white" />
        </Box>
        </FancyTooltip>
        </div>
      ))}
    </Box>
  );
}
