import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface LayoutProps{
    children?: ReactNode,
    title?: string,
    description?: string,
}

function FormPanelBlock(props : LayoutProps){
    const { 
        children, 
        title, 
        description 
    } = props;

    return(
        <Box className="panel-block">
            <Box className="title-block">
                <Box className="title">{title}</Box>
                <Box className="description">{description}</Box>
            </Box>
            <Box className="content">{children}</Box>
        </Box>
    )
}
export default FormPanelBlock;