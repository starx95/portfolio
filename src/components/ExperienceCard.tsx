import type { Dispatch } from 'react';
import '../css/ExperienceCard.css';

interface CardProps {
  exp: string;
  award?: string;
  setOpenAward: Dispatch<React.SetStateAction<boolean>>;
}

export const ExperienceCard = ({ exp = "4+", award = "3" }: CardProps) => {
  return (
    <div className="container" id="experienceCard">
    <div
    >
      <div style={{ fontSize: "26px", fontWeight: "bold" }}>{exp}</div>
      <div style={{ fontSize: "14px", opacity: 0.8 }}>Years Experience</div>
    </div>
    <div
      // onClick={() => setOpenAward(true)}
     
    >
      <div style={{ fontSize: "26px", fontWeight: "bold" }}>{award}</div>
      <div style={{ fontSize: "14px", opacity: 0.8 }}>Award winning</div>
    </div>
    </div>
  );
};