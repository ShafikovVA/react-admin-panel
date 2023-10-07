import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface LayoutProps{
    children?: ReactNode,
    title?: string,
    description?: string,
}

function PanelBlock(props : LayoutProps){
    const { 
        children, 
        title, 
        description 
    } = props;

    return(
        <Box className="panel-block">
            <Box className="title-block">
                <Box>
                    <Box className="title">{title}</Box>
                    <Box className="description">{description}</Box>
                </Box>
            </Box>
            <Box className="div">{children}</Box>
        </Box>
    )
}
export default PanelBlock;