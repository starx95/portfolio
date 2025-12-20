import { Box, Chip } from "@mui/material";
import '../css/MyPortfolio.css';

export function MyPortfolio() {
    return(
    <Box className="content">
        <Box className="page-wrapper">
            <Chip label="MY PORTFOLIO" className="chip" />
            <Box className="portfolio-grid-wrapper">
                <Box className="portfolio-grid">
                    <Box className="portfolio-item">
                      <img src="/project.png" alt="Project" />
                      <h3>AI powered Resume Analyzer</h3>
                      <p>React, MUI, C#, MSSQL</p>

                      <Box className="portfolio-tags">
                        <Chip label="React" size="small" />
                        <Chip label="C#" size="small" />
                        <Chip label="MSSQL" size="small" />
                      </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>)}