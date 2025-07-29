import colors from "@/lib/color";
import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { testPlanData } from "@/lib/constant";


export default function TestPlan ()
{


    const renderBox = () =>
    {
        return <Box display="flex" flexDirection={ { md: 'row', xs: 'column' } } >
            { testPlanData.map( ( item ) => (
                <>
                    <Typography fontSize={ 50 } fontWeight={ 800 } color={ colors.White } >
                        { item.number }
                    </Typography>
                    <Box
                        sx={ {
                            borderRadius: '50% 50% 0% 0%'
                        } } width={ 300 } height={ 300 } bgcolor={ item.color } >
                        <Box height="100%" gap={ 2 } padding={ 2 } display="flex" flexDirection="column" alignSelf="center" justifyContent="center" >
                            <Typography fontWeight={ 700 } textAlign="center" fontSize={ 30 } >
                                { item.title }
                            </Typography>
                            <Typography fontSize={ 14 } >
                                { item.description }
                            </Typography>
                            <Box display="flex" justifyContent="space-between" >
                                <Typography fontWeight={ 500 } fontSize={ 13 }>
                                    { item.btnText }
                                </Typography>
                                <Box
                                    className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                                    sx={ {
                                        borderRadius: '50% 50% 50% 50%'
                                    } }
                                    width={ 50 }
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height={ 50 }
                                    border={ 5 }
                                    borderColor={ colors.White } >
                                    <ArrowOutwardIcon sx={ { fontSize: 30 } } />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            ) ) }
        </Box>

    }


    return <Box minHeight="fit-content" width="100%" bgcolor={ colors.Black } padding={ 2 } >
        <Box mb={ 3 } display="flex" flexDirection="column" justifySelf="center" >
            <Typography color={ colors.White } fontSize={ 40 } fontWeight={ 700 }>
                Plan Your Preparation
            </Typography>
            <Box width="fit-content" bgcolor={ colors.Zinnia } ml={ { md: 5, xs: 0, sm: 5 } } borderRadius={ 5 } padding={ 1 } minHeight="fit-content" >
                <Typography color={ colors.White } fontSize={ 40 } fontWeight={ 700 } >
                    Journey Smartly
                </Typography>
            </Box>
        </Box>
        <Typography color={ colors.White } textAlign="center" fontSize={ 20 } >
            Break down your learning path with strategic tools tailored to help you stay consistent and exam-ready.
        </Typography>
        <Box marginTop={ 15 } display="flex" flexDirection="row" justifyContent="center" >
            { renderBox() }
        </Box>
    </Box>
}