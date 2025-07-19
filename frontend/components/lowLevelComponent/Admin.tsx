import colors from "@/lib/color";
import { Badge, Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useRouter } from "next/navigation";

export default function Admin ()
{
    const router = useRouter();

    const handleClick = () =>
    {
        router.push( '/admin' );
    };

    return (
        <Box
            onClick={ handleClick }
            className='cursor-pointer'
            padding={ 1 }
            borderRadius={ 2 }
            sx={ {
                position: 'fixed',
                top: 250,
                right: -110,
                zIndex: 9999,
                transition: 'right 0.4s ease-in-out',
                '&:hover': {
                    right: -20
                }
            } }
            bgcolor={ colors.BneiBrakBay }
            width={ 150 }
            height='fit-content'
        >
            <Box color={ colors.White } display="flex" gap={ 1 }>
                <Badge>
                    <AdminPanelSettingsIcon />
                </Badge>
                <Typography color={ colors.White } fontWeight={ 600 }>
                    Admin Shop
                </Typography>
            </Box>
        </Box>
    )

}