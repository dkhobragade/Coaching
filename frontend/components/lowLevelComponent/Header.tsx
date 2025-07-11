"use client"

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ScaleButton } from "./Animation";
import { useState } from "react";
import MenuBox from "./Menu";
import colors from "@/lib/color";

export default function Header ()
{

    const [ isHovered, setIsHovered ] = useState( false )

    const coursesData = [
        {
            label: 'Prelims',
        },
        {
            label: 'Mains',
        },
    ];

    const pyqData = [
        {
            label: 'Download',
        },
        {
            label: 'Test',
        },
    ];

    return <Box width="100%" height={ 40 } borderBottom={ 1 }>
        <Grid container>
            <Grid size={ 4 }>
                <Image src='/logo.png' alt="Logo" width={ 80 } height={ 50 } className="cursor-pointer" />
            </Grid>
            <Grid size={ 8 } justifyItems="end">
                <Box display="flex" gap={ 5 } >
                    <MenuBox title="Courses" menuItems={ coursesData } />
                    <Box className='cursor-pointer' width="fit-content" p={ 1 } height="100%">
                        <Typography>
                            Books
                        </Typography>
                    </Box>
                    <MenuBox title='PYQ' menuItems={ pyqData } />
                    <Box className='cursor-pointer' width="fit-content" p={ 1 } height="100%">
                        <Typography>
                            Free Initiative
                        </Typography>
                    </Box>
                    <Box className='cursor-pointer' width="fit-content" p={ 1 } height="100%">
                        <Typography>
                            Counselling
                        </Typography>
                    </Box>
                    <Box className='cursor-pointer' bgcolor={ colors.Zinnia } borderRadius={ 2 } width="fit-content" p={ 1 } height="100%">
                        <Typography fontWeight={ 500 }>
                            Get Started
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
}