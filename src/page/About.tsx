import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../css/About.css';
import { ExperienceCard } from "../components/ExperienceCard";
import { TechStackFooter } from "../components/TechStackFooter";
import { useState } from "react";
import { LinkedIn, YouTube, GitHub, Facebook } from "@mui/icons-material";
import { SiGmail } from "react-icons/si";
import me from '../assets/me.png';

export function About() {
  const [openAward, setOpenAward] = useState(false);

  const handleEmailClick = () => {
    const mailtoLink = `nizam.yuseri@gmail.com`;
     window.location.href = `mailto:${mailtoLink}`;

    setTimeout(() => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mailtoLink}`, "_blank");
    }, 1000);
  };

  return (
    <Box className="content">
    <Box className="page-wrapper">
      <Box className="about-intro">
         <div className="image-column">
          <div className="portrait-container">
            <div>
                <div className="overlay"/>
                <img src={me} alt="Portrait in suit" className="portrait" />
            </div>
            </div>
        </div>
        <div className="about-column">
            <Chip label="ABOUT ME" className="chip" />
            <h2>I AM AVAILABLE FOR FULLTIME POSITIONS IN BOTH<span className="highlight"> WEB OR MOBILE DEVELOPMENT</span> </h2>
            <p>I possess extensive hands on experience in multiple web and mobile frameworks with robust data fetching and state management capabilities. In addition, I have strong proficiency in working with Prisma ORM, SQL and MongoDB databases, enabling the design and implementation of reliable, efficient, and high-quality data solutions.
            </p>
            <div>
              <ExperienceCard exp="4+" setOpenAward={setOpenAward} />
            </div>
            <div className="ctaDiv">
              <Button variant="contained" size="large" endIcon={<ArrowRightAltIcon className="arrowIcon"/>}>GET IN TOUCH</Button>
              <div style={{
                    gap: 'inherit',
                    display: 'flex',
              }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => window.open("https://www.facebook.com/Mohd.Nizam.Yuseri/", "_blank")}
              >
                <Facebook sx={{scale: 1.4}} />
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => window.open("https://github.com/starx95", "_blank")}
              >
                <GitHub sx={{scale: 1.4}} />
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => window.open("https://www.linkedin.com/in/mohamad-nizam-yuseri/", "_blank")}
              >
                <LinkedIn sx={{scale: 1.4}} />
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => window.open("https://www.youtube.com/@mohamadnizam3867", "_blank")}
              >
                <YouTube sx={{scale: 1.4}} />
              </Button>
              <Button
                size="small"
                variant="outlined"
                component="a"
                onClick={handleEmailClick}
                target="_blank"
              >
                <SiGmail style={{scale: 1.4}} />
              </Button>
            </div>
            </div>
        </div>
      </Box>
    <TechStackFooter />
    </Box>
    <Dialog open={openAward} onClose={() => setOpenAward(false)} maxWidth="sm" fullWidth>
        <DialogTitle>🏆 Award-Winning Project</DialogTitle>
        <DialogContent dividers>
          <p>
            I received a recognition award for delivering a high-performance, scalable web/mobile solution 
            that significantly improved workflow efficiency and UI responsiveness. The project involved 
            full-stack development across React, React Native, Prisma, MongoDB, SQL, and cloud 
            infrastructures.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAward(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}