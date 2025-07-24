import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";

export default function GlobalLoading ()
{
    return <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center" >
        <CircularProgress />
    </Box>
}