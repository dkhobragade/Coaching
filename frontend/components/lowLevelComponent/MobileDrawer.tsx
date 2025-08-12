"use client"

import { Avatar, Box, Divider, Drawer, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from "react";
import colors from "@/lib/color";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { postWrapper } from "@/lib/postWrapper";
import { toast } from "react-toastify";
import { useAtom, useSetAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import { useRouter } from "next/navigation";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import Button from '../lowLevelComponent/Button'

type MobileDrawerProps = {
    open: boolean;
    toggleDrawer: ( newOpen: boolean ) => () => void;
};

export default function MobileDrawer ( { open, toggleDrawer, }: MobileDrawerProps )
{
    const [ openCourses, setOpenCourses ] = useState<boolean>( false );
    const [ openPYQ, setOpenPYQ ] = useState<boolean>( false );
    const setUserAtomState = useSetAtom( userAtom )
    const userAtomState = useAtom( userAtom )
    const router = useRouter()

    const onCloseDrawer = () =>
    {
        toggleDrawer( false )()
        if ( openCourses ) setOpenCourses( false );
        if ( openPYQ ) setOpenPYQ( false );
    }


    const onClickLogout = () =>
    {
        postWrapper( 'auth/logout' ).then( ( resp ) =>
        {
            toast.success( resp.message )
            router.push( '/' )
            onCloseDrawer()
            setUserAtomState( { isLoggedIn: false, user: { name: '', email: '', id: '', mobile: '', role: '', img: '' } } )
        } ).catch( ( error ) =>
        {
            toast.success( error.message )
        } )
    }


    return (
        <Drawer anchor="right" open={ open } onClose={ () => onCloseDrawer() }>
            <Box sx={ { width: 300 } } >
                { userAtomState[ 0 ].isLoggedIn &&
                    <Box>
                        <Box display="flex" justifyContent="center" alignItems="center" mt={ 2 }>
                            <Avatar
                                className="p-1"
                                src={ userAtomState[ 0 ].user.img }
                            >
                                { !userAtomState[ 0 ].user.img?.trim() &&
                                    userAtomState[ 0 ].user.name[ 0 ]?.toUpperCase() }
                            </Avatar>
                        </Box>
                        <Box width="100%" padding={ 2 } >
                            <Box onClick={ () =>
                            {
                                router.push( '/profile' ),
                                    onCloseDrawer()
                            } } padding={ 1 } display="flex" gap={ 2 } className="cursor-pointer hover:bg-amber-200" mb={ 1 }  >
                                <AccountCircleIcon />
                                <Typography>
                                    My Profile
                                </Typography>
                            </Box>
                            <Box onClick={ () =>
                            {
                                router.push( '/account' )
                                onCloseDrawer()
                            } } display="flex" padding={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200" mb={ 1 } >
                                <ManageAccountsIcon />
                                <Typography>
                                    My Account
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                }
                <Divider />
                <Box width="100%" padding={ 1 } >
                    <Box onClick={ () =>
                    {
                        router.push( '/books' )
                        onCloseDrawer()
                    } } mt={ 1 } mb={ 1 } padding={ 1 } display="flex" gap={ 2 } className="cursor-pointer hover:bg-amber-200">
                        <MenuBookIcon />
                        <Typography>
                            Books
                        </Typography>
                    </Box>
                    <Box onClick={ () => setOpenCourses( !openCourses ) } padding={ 1 } display="flex" justifyContent="space-between" gap={ 2 } className="cursor-pointer hover:bg-amber-200" >
                        <Box display="flex" gap={ 2 } >
                            <InboxIcon />
                            <Typography>
                                Courses
                            </Typography>
                        </Box>
                        { openCourses ? <ExpandLess /> : <ExpandMore /> }
                    </Box>
                    { openCourses &&
                        <Box padding={ 1 }>
                            <Box padding={ 1 } display="flex" mb={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200" >
                                <StarBorder />
                                <Typography>
                                    Prelims
                                </Typography>
                            </Box>
                            <Box padding={ 1 } display="flex" mb={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200" >
                                <StarBorder />
                                <Typography>
                                    Mains
                                </Typography>
                            </Box>
                        </Box>
                    }
                </Box>
                <Box width="100%" padding={ 1 } >
                    <Box onClick={ () => setOpenPYQ( !openPYQ ) } padding={ 1 } display="flex" justifyContent="space-between" gap={ 2 } className="cursor-pointer hover:bg-amber-200" >
                        <Box display="flex" gap={ 2 } >
                            <SendIcon />
                            <Typography>
                                PYQ
                            </Typography>
                        </Box>
                        { openPYQ ? <ExpandLess /> : <ExpandMore /> }
                    </Box>
                    { openPYQ &&
                        <Box padding={ 2 }>
                            <Box padding={ 1 } display="flex" mb={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200" >
                                <StarBorder />
                                <Typography>
                                    Download
                                </Typography>
                            </Box>
                            <Box onClick={ () =>
                            {
                                router.push( '/test' )
                                onCloseDrawer()
                            } } padding={ 1 } display="flex" mb={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200" >
                                <StarBorder />
                                <Typography>
                                    Test
                                </Typography>
                            </Box>
                        </Box>
                    }
                </Box>
                <Box mt={ 1 } mb={ 1 } padding={ 1 } display="flex" gap={ 2 } className="cursor-pointer hover:bg-amber-200">
                    <SlowMotionVideoIcon />
                    <Typography>
                        Free Initiative
                    </Typography>
                </Box>
                <Box mt={ 1 } mb={ 1 } padding={ 1 } display="flex" gap={ 2 } className="cursor-pointer hover:bg-amber-200">
                    <SafetyDividerIcon />
                    <Typography>
                        Counselling
                    </Typography>
                </Box>
                <Box width="100%" padding={ 1 }>
                    { !userAtomState[ 0 ].isLoggedIn &&
                        <Button label="Get Started" onClick={ () =>
                        {
                            router.push( '/signup' )
                            onCloseDrawer()
                        } } bgColor={ colors.Zinnia } fullWidth />
                    }
                    { userAtomState[ 0 ].isLoggedIn &&
                        <Box onClick={ onClickLogout } display="flex" padding={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200"  >
                            <LogoutIcon />
                            <Typography>
                                Logout
                            </Typography>
                        </Box>
                    }
                </Box>
            </Box>
        </Drawer>
    );
}
