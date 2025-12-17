import { styled, Tooltip, tooltipClasses, type TooltipProps  } from "@mui/material";

export const FancyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#1a73e8',   
    color: '#fff',                
    fontWeight: 'normal',
    fontSize: '0.9rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
    transform: 'scale(1)',
    transition: 'all 0.2s ease-in-out',
    [`& .${tooltipClasses.arrow}`]: {
    color: '#1a73e8', 
  },
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

