import { Box, Chip } from "@mui/material";
import '../css/MyPortfolio.css';
import resumeThumb from '../assets/resume-analyze-dashboard.png';
import { useState } from "react";

const tags = ["ReactJS", "MUI", "Tailwind", "C#", "MSSQL", "Docker"];
export function MyPortfolio() {
    const [showAll, setShowAll] = useState(false);
    const visibleTags = showAll ? tags : tags.slice(0, 3);
    const hiddenCount = tags.length - 3;

    return(
    <Box className="content">
        <Box className="page-wrapper">
            <Chip label="MY PORTFOLIO" className="chip" />
            <Box className="portfolio-grid-wrapper">
                <Box className="portfolio-grid">
                    <Box className="portfolio-item">
                      <img src={resumeThumb} alt="Project" />
                      <h3>AI powered Resume Analyzer</h3>
                      <p>ReactJS, MUI, Tailwind, C#, MSSQL, Docker</p>

                          <Box className="portfolio-tags">
                          {visibleTags.map((tag) => (
                            <Chip key={tag} label={tag} size="small" />
                          ))}
                    
                          {tags.length > 3 && !showAll && (
                            <Chip
                              label={`+${hiddenCount} more`}
                              size="small"
                              variant="outlined"
                              onClick={() => setShowAll(true)}
                              sx={{
                                  cursor: "pointer",
                                  "& .MuiChip-label": {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    textAlign: "center",
                                  },
                                }}
                            />
                          )}
                    
                          {showAll && (
                            <Chip
                              label="Show less"
                              size="small"
                              variant="outlined"
                              onClick={() => setShowAll(false)}
                              sx={{ cursor: "pointer" }}
                            />
                          )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>)}