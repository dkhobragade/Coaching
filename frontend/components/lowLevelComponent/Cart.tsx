import colors from "@/lib/color";
import { Badge, Box, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart ()
{
    return <Box className='cursor-pointer' padding={ 1 } borderRadius={ 2 } sx={ {
        position: 'fixed', top: 200, right: -110, zIndex: 9999, transition: 'right 0.4s ease-in-out', '&:hover': {
            right: -20
        }
    } } bgcolor={ colors.BneiBrakBay } width={ 150 } height='fit-content' >
        <Box color={ colors.White } display="flex" gap={ 1 } >
            <Badge badgeContent={ 4 } color="error" >
                <ShoppingCartIcon />
            </Badge>
            <Typography color={ colors.White } fontWeight={ 600 } >
                View Cart
            </Typography>
        </Box>
    </ Box>
}