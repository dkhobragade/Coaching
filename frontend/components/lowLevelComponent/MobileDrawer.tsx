"use client"

import { Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from "react";
import colors from "@/lib/color";

type MobileDrawerProps = {
    open: boolean;
    toggleDrawer: ( newOpen: boolean ) => () => void;
    onCourseClick: ( label: string ) => void;
    onPYQClick: ( label: string ) => void;
};

export default function MobileDrawer ( { open, toggleDrawer, onCourseClick, onPYQClick }: MobileDrawerProps )
{
    const [ openCourses, setOpenCourses ] = useState( false );
    const [ openPYQ, setOpenPYQ ] = useState( false );

    const onCloseDrawer = () =>
    {
        toggleDrawer( false )()
        if ( openCourses ) setOpenCourses( false );
        if ( openPYQ ) setOpenPYQ( false );
    }


    return (
        <Drawer anchor="right" open={ open } onClose={ () => onCloseDrawer() }>
            <Box sx={ { width: 300 } } >
                <List>
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
                    <ListItemButton>
                        <Box bgcolor={ colors.Zinnia } width="100%" px={ 2 } py={ 1 } borderRadius={ 2 }>
                            <Typography fontWeight={ 500 } textAlign="center" >Get Started</Typography>
                        </Box>
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    );
}
