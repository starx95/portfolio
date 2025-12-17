import { Box, Button, Chip } from "@mui/material";
import "../css/Home.css";
import me from "../assets/me.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { LinkedIn, YouTube } from "@mui/icons-material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { FancyTooltip } from "../components/FancyTooltip";

export function Home() {
  return (
    <Box className="content">
      <Box className="home-grid-wrapper">
      <Box className="home-grid">
        <Box className="text-column">
          <Chip label="NIZAM YUSERI" className="chip" />

          <h2>
            HI! I'M NIZAM A
            <span className="highlight"> FULL STACK DEVELOPER</span>
          </h2>

          <p>
            Full-Stack Software Engineer with 4+ years of experience 
            building enterprise-grade React and Next.js applications 
            using component-driven architecture. Strong expertise in 
            designing reusable, scalable UI component libraries with 
            Tailwind CSS, improving development speed, consistency, 
            and maintainability across teams. Experienced in 
            internationalization (i18n), and collaborative 
            Git based workflows.
          </p>

          <Box className="ctaDiv">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRightAltIcon className="arrowIcon" />}
              className="moreBtn"
            >
              MORE ABOUT ME
            </Button>

             <Box className="iconGroup">
            <FancyTooltip title="Download Resume" arrow>
              <Button
                variant="outlined"
                size="small"
                onClick={() =>
                  window.open(
                    "/portfolio/Resume-Mohamad_Nizam_Bin_Mohd_Yuseri.pdf",
                    "_blank"
                  )
                }
                className="iconBtn"
              >
                <PictureAsPdfIcon sx={{ scale: 1.4 }} />
              </Button>
            </FancyTooltip>

            <Button
              size="small"
              variant="outlined"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohamad-nizam-yuseri/",
                  "_blank"
                )
              }
              className="iconBtn"
            >
              <LinkedIn sx={{ scale: 1.4 }} />
            </Button>

            <Button
              size="small"
              variant="outlined"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@mohamadnizam3867",
                  "_blank"
                )
              }
              className="iconBtn"
            >
              <YouTube sx={{ scale: 1.4 }} />
            </Button>
            </Box>
          </Box>
        </Box>

        <Box className="image-column">
          <div className="overlay" />
          <img src={me} alt="Portrait in suit" className="portrait" />
        </Box>
      </Box>
      </Box>
    </Box>
  );
}
