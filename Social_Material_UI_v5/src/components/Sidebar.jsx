import {Box} from "@mui/material";

export const Sidebar = () => {
    return (
        <Box p={2} bgcolor='skyblue' flex={1}
             sx={{display: {xs: "none", sm: 'block'}}}
        >Sidebar</Box>
    )
}
