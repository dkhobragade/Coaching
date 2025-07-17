'use client'

import colors from "@/lib/color";
import { Badge, Box, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom, userCartItems } from "@/lib/store/userAtom";

export default function Cart ()
{
    const router = useRouter();
    const [ userState ] = useAtom( userAtom );
    const [ cartItemsVal ] = useAtom( userCartItems )

    const handleClick = () =>
    {
        router.push( '/cart' );
    };

    if ( !userState.isLoggedIn ) return null;

    return (
        <Box
            onClick={ handleClick }
            className='cursor-pointer'
            padding={ 1 }
            borderRadius={ 2 }
            sx={ {
                position: 'fixed',
                top: 200,
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
                <Badge badgeContent={ cartItemsVal } color="error">
                    <ShoppingCartIcon />
                </Badge>
                <Typography color={ colors.White } fontWeight={ 600 }>
                    View Cart
                </Typography>
            </Box>
        </Box>
    );
}
