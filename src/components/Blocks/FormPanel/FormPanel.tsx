import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface LayoutProps{
    children?: ReactNode,
}

function FormPanel(props: LayoutProps){
    const { children } = props;

    return(
        <Box className="form-panel"> 
            {children}
        </Box>
    )
}

export default FormPanel;