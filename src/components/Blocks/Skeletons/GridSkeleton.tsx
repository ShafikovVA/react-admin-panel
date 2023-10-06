import { Skeleton } from "@mui/material";

function GridSkeleton(){
    return(
        <>
            <thead>
                <tr>
                    <td> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                </tr>
                <tr>    
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                </tr>
                <tr>    
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                </tr>
                <tr>    
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                </tr>
                <tr>    
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                    <td><Skeleton variant="text" sx={{ fontSize: '1rem' }} /></td>
                </tr>
            </tbody>
        </>
    )
}
 
export default GridSkeleton;