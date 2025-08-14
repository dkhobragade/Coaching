import colors from "@/lib/color";
import { Box, Typography } from "@mui/material";

export default function CounsellingHeroSection ()
{
    return <Box minWidth="100%" minHeight="fit-content">
        <Box m={ 5 }>
            <Typography fontSize={ 25 } fontWeight={ 700 } textAlign="center" >
                Counselling Services
            </Typography>
            <Typography textAlign="center" fontWeight={ 600 } >
                Guiding you through every step of your MPSC journey — from preparation to final selection.
            </Typography>
        </Box>
        <Box display="flex" gap={ 2 } >
            <Box display="flex" flexDirection="column" justifyContent="space-evenly" width={ 250 } padding={ 2 } borderRadius={ 5 } className='cursor-pointer  hover:scale-105 transition-transform duration-300 rotate-x-20 -rotate-y-20' height={ 350 } bgcolor={ colors.BeniukonBronze } >
                <Typography fontSize={ 25 } fontWeight={ 700 }>
                    Registration & Form Assistance
                </Typography>
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    Step-by-step help in filling MPSC applications correctly and on time.
                </Typography>
            </Box>
            <Box width={ 250 } display="flex" flexDirection="column" justifyContent="space-evenly" padding={ 2 } borderRadius={ 5 } className='cursor-pointer  hover:scale-105 transition-transform duration-300 rotate-x-20 -rotate-y-30' height={ 350 } bgcolor={ colors.BeniukonBronze } >
                <Typography fontSize={ 25 } fontWeight={ 700 }>
                    Study Plan & Strategy

                </Typography>
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    Customised preparation strategies to maximise your MPSC score.
                </Typography>
            </Box>
            <Box width={ 250 } display="flex" flexDirection="column" justifyContent="space-evenly" padding={ 2 } borderRadius={ 5 } className='cursor-pointer hover:scale-105 transition-transform duration-300' height={ 350 } bgcolor={ colors.BeniukonBronze } >
                <Typography fontSize={ 25 } fontWeight={ 700 }>
                    Mock Tests & Analysis
                </Typography>
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    Practice with realistic tests and receive detailed performance insights.
                </Typography>
            </Box>
            <Box width={ 250 } display="flex" flexDirection="column" justifyContent="space-evenly" padding={ 2 } borderRadius={ 5 } className='cursor-pointer  hover:scale-105 transition-transform duration-300 rotate-x-20 rotate-y-30' height={ 350 } bgcolor={ colors.BeniukonBronze } >
                <Typography fontSize={ 25 } fontWeight={ 700 }>
                    Personalised Career Guidance
                </Typography>
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    Get tailored advice based on your strengths, weaknesses, and career goals.
                </Typography>
            </Box>
            <Box width={ 250 } display="flex" flexDirection="column" justifyContent="space-evenly" padding={ 2 } borderRadius={ 5 } className='cursor-pointer  hover:scale-105 transition-transform duration-300 rotate-x-20 rotate-y-20' height={ 350 } bgcolor={ colors.BeniukonBronze } >
                <Typography fontSize={ 25 } fontWeight={ 700 }>
                    Interview & Personality Development
                </Typography>
                <Typography fontSize={ 20 } fontWeight={ 500 } >
                    Prepare for the MPSC interview stage with expert tips and mock sessions.
                </Typography>
            </Box>
        </Box>
    </Box>
}