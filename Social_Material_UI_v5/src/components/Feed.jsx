import {Box, Skeleton, Stack} from "@mui/material";
import Post from "./Post.jsx";
import {useState} from "react";

export const Feed = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(()=>{
        setLoading(false);
    }, [3000]);

    return (
        <Box p={{xs: 0, md: 2}} flex={4}>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton variant="text" height={100}/>
                    <Skeleton variant="text" height={20}/>
                    <Skeleton variant="text" height={20}/>
                    <Skeleton variant="rectangular" height={300}/>
                </Stack>
            ) : (
                <>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </>
            )}

        </Box>
    )
}
