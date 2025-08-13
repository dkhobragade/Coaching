"use client"

import { useState } from "react";
import Image from "next/image";
import MenuBox from "./Menu";
import colors from "@/lib/color";
import MobileDrawer from "./MobileDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { coursesData, pyqData } from "@/lib/constant";
import { Box, Typography, IconButton, Avatar, Menu } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAtom, useSetAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { postWrapper } from "@/lib/postWrapper";
import { toast } from "react-toastify";

export default function Header ()
{

    const router = useRouter()
    const userAtomState = useAtom( userAtom )
    const setUserAtomState = useSetAtom( userAtom )
    const [ open, setOpen ] = useState<boolean>( false );
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>( null );
    const openProfile = Boolean( anchorEl );

    const handleClick = ( event: React.MouseEvent<HTMLDivElement> ) =>
    {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () =>
    {
        setAnchorEl( null );
    };

    const toggleDrawer = ( newOpen: boolean ) => () =>
    {
        setOpen( newOpen );
    };


    const onClickLogout = () =>
    {
        postWrapper( 'auth/logout' ).then( ( resp ) =>
        {
            toast.success( resp.message )
        } ).catch( ( error ) =>
        {
            toast.success( error.message )
        } ).finally( () =>
        {
            setUserAtomState( { isLoggedIn: false, user: { name: '', email: '', id: '', mobile: '', role: '', img: '' } } )
        } )

    }

    const handleOnClickCourseData = ( label: string ) =>
    {
        console.log( "label", label )
    }

    const handleOnClickPYQData = ( label: string ) =>
    {
        if ( label == "Test" )
            router.push( '/test' )
    }

    return (
        <Box width="100%" height={ 60 } borderBottom={ 1 } borderColor="#ccc" px={ 2 } display="flex" alignItems="center" justifyContent="space-between">
            {/* Logo */ }
            <Box display="flex" onClick={ () => router.push( '/' ) } alignItems="center">
                <Image src='/logo.png' alt="Logo" width={ 80 } height={ 50 } className="cursor-pointer" />
            </Box>

            <Box display={ { xs: 'none', md: 'flex' } } alignItems="center" gap={ 4 }>
                <MenuBox onClick={ ( label: string ) => handleOnClickCourseData( label ) } title="Courses" menuItems={ coursesData } />
                <Box onClick={ () => router.push( '/books' ) } className='cursor-pointer' width="fit-content" p={ 1 }>
                    <Typography>Books</Typography>
                </Box>
                <MenuBox title='PYQ' onClick={ ( label: string ) => handleOnClickPYQData( label ) } menuItems={ pyqData } />
                <Box className='cursor-pointer' width="fit-content" p={ 1 }>
                    <Typography>Free Initiative</Typography>
                </Box>
                <Box onClick={ () => router.push( '/counselling' ) } className='cursor-pointer' width="fit-content" p={ 1 }>
                    <Typography>Counselling</Typography>
                </Box>
                { userAtomState[ 0 ].isLoggedIn ?
                    <>
                        <Avatar
                            aria-controls={ openProfile ? 'basic-menu' : undefined }
                            aria-haspopup="true"
                            aria-expanded={ openProfile ? 'true' : undefined }
                            onClick={ handleClick }
                            src={ userAtomState[ 0 ].user.img }
                            className="cursor-pointer" sx={ { width: 40, height: 40, fontWeight: 600 } }>{ !userAtomState[ 0 ].user.img?.trim() && userAtomState[ 0 ].user.name[ 0 ]?.toUpperCase() }</Avatar>
                        <Menu
                            id="basic-menu"
                            anchorEl={ anchorEl }
                            open={ openProfile }
                            onClose={ handleClose }
                            slotProps={ {
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            } }
                        >
                            <Box width="fit-content" padding={ 2 } >
                                <Box onClick={ () => router.push( '/profile' ) } padding={ 1 } display="flex" gap={ 2 } className="cursor-pointer hover:bg-[#FCA311]" mb={ 1 }  >
                                    <AccountCircleIcon />
                                    <Typography>
                                        My Profile
                                    </Typography>
                                </Box>
                                <Box onClick={ () => router.push( '/account' ) } display="flex" padding={ 1 } gap={ 2 } className="cursor-pointer hover:bg-[#FCA311]" mb={ 1 } >
                                    <ManageAccountsIcon />
                                    <Typography>
                                        My Account
                                    </Typography>
                                </Box>
                                <Box onClick={ onClickLogout } display="flex" padding={ 1 } gap={ 2 } className="cursor-pointer hover:bg-[#FCA311]"  >
                                    <LogoutIcon />
                                    <Typography>
                                        Logout
                                    </Typography>
                                </Box>
                            </Box>
                        </Menu>
                    </>


                    :
                    <Box className='cursor-pointer' onClick={ () => router.push( '/signup' ) } bgcolor={ colors.Zinnia }
                        borderRadius={ 2 }
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        px={ 2 }
                        height={ 40 }>
                        <Typography fontWeight={ 500 } textAlign="center">
                            Get Started
                        </Typography>
                    </Box>
                }
            </Box >

            <Box display={ { xs: 'block', md: 'none' } }>
                <IconButton onClick={ toggleDrawer( true ) }>
                    <MenuIcon />
                </IconButton>
            </Box>

            <MobileDrawer
                open={ open }
                toggleDrawer={ toggleDrawer }
            />
        </Box >
    )
}
