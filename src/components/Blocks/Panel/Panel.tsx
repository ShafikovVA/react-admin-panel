import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface LayoutProps{
    children?: null | undefined | ReactNode,
}

function Panel(props: LayoutProps){
    const { children } = props;

    return(
        <Box className="panel"> 
            {children}
        </Box>
    )
}

export default Panel;