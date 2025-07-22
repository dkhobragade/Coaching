"use client"

import { Avatar, Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
import { useSetAtom } from "jotai";
import { userAtom } from "@/lib/store/userAtom";
import { useRouter } from "next/navigation";

type MobileDrawerProps = {
    open: boolean;
    toggleDrawer: ( newOpen: boolean ) => () => void;
    onCourseClick: ( label: string ) => void;
    onPYQClick: ( label: string ) => void;
    isLoggedIn: boolean
    userName: string
};

export default function MobileDrawer ( { open, toggleDrawer, onCourseClick, onPYQClick, isLoggedIn, userName }: MobileDrawerProps )
{
    const [ openCourses, setOpenCourses ] = useState<boolean>( false );
    const [ openPYQ, setOpenPYQ ] = useState<boolean>( false );
    const setUserAtomState = useSetAtom( userAtom )
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
            setUserAtomState( { isLoggedIn: false, user: { name: '', email: '', id: '', mobile: '', role: '' } } )
        } ).catch( ( error ) =>
        {
            toast.success( error.message )
        } )
    }


    return (
        <Drawer anchor="right" open={ open } onClose={ () => onCloseDrawer() }>
            <Box sx={ { width: 300 } } >
                { isLoggedIn &&
                    <Box>
                        <Avatar className="p-1 justify-self-center mt-2">userName[0]</Avatar>
                        <Box width="100%" padding={ 2 } >
                            <Box onClick={ () => router.push( '/profile' ) } padding={ 1 } display="flex" gap={ 2 } className="cursor-pointer hover:bg-amber-200" mb={ 1 }  >
                                <AccountCircleIcon />
                                <Typography>
                                    My Profile
                                </Typography>
                            </Box>
                            <Box display="flex" padding={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200" mb={ 1 } >
                                <ManageAccountsIcon />
                                <Typography>
                                    My Account
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                }
                <List >
                    <ListItemButton onClick={ () => setOpenCourses( !openCourses ) }>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Courses" />
                        { openCourses ? <ExpandLess /> : <ExpandMore /> }
                    </ListItemButton>
                    <Collapse in={ openCourses } timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            { [ "Prelims", "Mains" ].map( ( course ) => (
                                <ListItemButton key={ course } sx={ { pl: 4 } } onClick={ () => onCourseClick( course ) }>
                                    <ListItemIcon><StarBorder /></ListItemIcon>
                                    <ListItemText primary={ course } />
                                </ListItemButton>
                            ) ) }
                        </List>
                    </Collapse>

                    <ListItemButton onClick={ () => setOpenPYQ( !openPYQ ) }>
                        <ListItemIcon><SendIcon /></ListItemIcon>
                        <ListItemText primary="PYQ" />
                        { openPYQ ? <ExpandLess /> : <ExpandMore /> }
                    </ListItemButton>
                    <Collapse in={ openPYQ } timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            { [ "Download", "Test" ].map( ( pyq ) => (
                                <ListItemButton key={ pyq } sx={ { pl: 4 } } onClick={ () => onPYQClick( pyq ) }>
                                    <ListItemIcon><StarBorder /></ListItemIcon>
                                    <ListItemText primary={ pyq } />
                                </ListItemButton>
                            ) ) }
                        </List>
                    </Collapse>

                    <ListItemButton>
                        <ListItemText primary="Books" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Free Initiative" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Counselling" />
                    </ListItemButton>
                    { !isLoggedIn &&
                        <ListItemButton>
                            <Box bgcolor={ colors.Zinnia } width="100%" px={ 2 } py={ 1 } borderRadius={ 2 }>
                                <Typography fontWeight={ 500 } textAlign="center" >Get Started</Typography>
                            </Box>
                        </ListItemButton>
                    }
                    { isLoggedIn &&
                        <Box onClick={ onClickLogout } display="flex" padding={ 1 } gap={ 2 } className="cursor-pointer hover:bg-amber-200"  >
                            <LogoutIcon />
                            <Typography>
                                Logout
                            </Typography>
                        </Box>
                    }
                </List>
            </Box>
        </Drawer>
    );
}
