import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface LayoutProps{
    title?: ReactNode,
    subtitle?: ReactNode,
    children?: ReactNode,
}

function PanelTitle(props: LayoutProps){
    const { 
        title, 
        subtitle, 
        children 
    } = props;
    
    return(
        <Box className="panelTitle">
            {(title || children) &&
                <Box className="panelTitle-container">
                    <Box className="title">{title}</Box>
                    <Box className="children">{children}</Box>    
                </Box>
            }
            {subtitle && 
                <Box className="subtitle">{subtitle}</Box>
            }
        </Box>
    )
}
export default PanelTitle