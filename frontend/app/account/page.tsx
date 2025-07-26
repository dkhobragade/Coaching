import colors from "@/lib/color";
import { Box, Typography } from "@mui/material";

export default function Account ()
{
    return <Box width="100%" minHeight="100vh" padding={ 2 }>
        <Typography fontSize={ 20 } mb={ 2 } fontWeight={ 600 } >
            My Orders
        </Typography>
        <Box width="100%" padding={ 2 } borderRadius={ 5 } minHeight="50vh" bgcolor={ colors.KissMeKate } >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quas hic, sed iusto eum quod illum magnam dolore. Aspernatur officia quam architecto corrupti consectetur consequatur maiores, tempore ipsa non a?
        </Box>
        <Typography fontSize={ 20 } mb={ 2 } mt={ 2 } fontWeight={ 600 } >
            My Courses
        </Typography>
        <Box width="100%" padding={ 2 } borderRadius={ 5 } minHeight="50vh" bgcolor={ colors.KissMeKate } >
            -
        </Box>
    </Box>
}