"use client"

import { useState } from "react";
import Image from "next/image";
import MenuBox from "./Menu";
import colors from "@/lib/color";
import MobileDrawer from "./MobileDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { coursesData, pyqData } from "@/lib/constant";
import { Box, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Header ()
{

    const router = useRouter()

    const [ open, setOpen ] = useState( false );

    const toggleDrawer = ( newOpen: boolean ) => () =>
    {
        setOpen( newOpen );
    };

    const handleCourseCLick = ( label: string ) =>
    {
        console.log( "label", label )
    }

    const handlePYQCLick = ( label: string ) =>
    {
        console.log( "label", label )
    }

    return (
        <Box width="100%" height={ 60 } borderBottom={ 1 } borderColor="#ccc" px={ 2 } display="flex" alignItems="center" justifyContent="space-between">
            {/* Logo */ }
            <Box display="flex" onClick={ () => router.push( '/' ) } alignItems="center">
                <Image src='/logo.png' alt="Logo" width={ 80 } height={ 50 } className="cursor-pointer" />
            </Box>

            <Box display={ { xs: 'none', md: 'flex' } } alignItems="center" gap={ 4 }>
                <MenuBox title="Courses" menuItems={ coursesData } onClick={ handleCourseCLick } />
                <Box onClick={ () => router.push( '/books' ) } className='cursor-pointer' width="fit-content" p={ 1 }>
                    <Typography>Books</Typography>
                </Box>
                <MenuBox title='PYQ' menuItems={ pyqData } onClick={ handlePYQCLick } />
                <Box className='cursor-pointer' width="fit-content" p={ 1 }>
                    <Typography>Free Initiative</Typography>
                </Box>
                <Box className='cursor-pointer' width="fit-content" p={ 1 }>
                    <Typography>Counselling</Typography>
                </Box>
                <Box className='cursor-pointer' bgcolor={ colors.Zinnia }
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
            </Box>

            <Box display={ { xs: 'block', md: 'none' } }>
                <IconButton onClick={ toggleDrawer( true ) }>
                    <MenuIcon />
                </IconButton>
            </Box>

            <MobileDrawer
                open={ open }
                toggleDrawer={ toggleDrawer }
                onCourseClick={ handleCourseCLick }
                onPYQClick={ handlePYQCLick }
            />
        </Box>
    )
}
