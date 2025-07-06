import colors from "@/lib/color";
import { Box } from "@mui/material";
import Image from "next/image";

export default function FormatComparison ()
{
    return <Box
        padding={ 5 }
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center" bgcolor={ colors.CrystalCut } height="100vh"  >
        <Image src='/image.png' alt="Comparsion" width={ 600 } height={ 500 } />
    </Box>
}