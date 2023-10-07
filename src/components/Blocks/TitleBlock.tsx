import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
    title: string;
    description: undefined | null | string;
    children:  undefined | null | ReactNode,
}

function TitleBlock(props: LayoutProps){
    const { 
        title, 
        description, 
        children 
    } = props;

    return(
        <Box className="titleBlock">
            <Box className="container">
                <Box className="title-contaniner">
                    <Box className="title">{title}</Box>
                    <Box className="children">{children}</Box>
                </Box>
                <Box className="description">{description}</Box>
            </Box>
        </Box>
    )
}

export default TitleBlock;