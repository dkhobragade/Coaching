import colors from "@/lib/color";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { BounceBox } from "../lowLevelComponent/Animation";

export default function BooksFAQs ()
{
    return <Box padding={ 5 } bgcolor={ colors.RoastedSesame } width="100%"   >
        <Box bgcolor={ colors.White } padding={ 3 } borderRadius={ 5 } minHeight={ 500 } justifyContent="center" justifyItems="center" display="flex" justifySelf="center" >
            <Grid container spacing={ 6 }>
                <Grid size={ { xs: 12, md: 6 } } order={ { xs: 1 } }>
                    <Typography fontSize={ { xs: 25, md: 50 } } textAlign={ { xs: "center", md: 'start' } } color={ colors.RaspberryLeafGreen } fontWeight={ 800 }>
                        FAQs.
                    </Typography>
                    <Box width={ { xs: '100%', md: 450 } } height={ 400 } padding={ 1 } sx={ {
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        '&::-webkit-scrollbar': {
                            width: '6px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#FFD700',
                            borderRadius: '3px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'transparent',
                        }
                    } } >
                        <Stack spacing={ 3 }>
                            <Box className='cursor-pointer' width={ { xs: '100%', md: 420 } } minHeight={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.Black } color={ colors.White } >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, possimus. Eos dolorum quod necessitatibus, possimus aut, ducimus dolorem voluptate illo suscipit reprehenderit nemo ipsa doloribus quam ad architecto omnis sunt?
                            </Box>
                            <Box className='cursor-pointer' width={ { xs: '100%', md: 420 } } minHeight={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box className='cursor-pointer' width={ { xs: '100%', md: 420 } } minHeight={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box className='cursor-pointer' width={ { xs: '100%', md: 420 } } minHeight={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box className='cursor-pointer' width={ { xs: '100%', md: 420 } } minHeight={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                            <Box className='cursor-pointer' width={ { xs: '100%', md: 420 } } minHeight={ 35 } borderRadius={ 2 } padding={ 1 } bgcolor={ colors.KissMeKate }>ldsngfsldn</Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid size={ { xs: 12, md: 6 } } order={ { xs: 2 } } >
                    <Typography fontSize={ { xs: 25, md: 50 } } textAlign={ { xs: "center", md: 'start' } } color={ colors.RaspberryLeafGreen } fontWeight={ 800 }>
                        Ans.
                    </Typography>
                    <Box width={ { xs: '100%', md: 450 } } borderRadius={ 5 } padding={ { xs: 3, md: 2 } } minHeight={ 400 } bgcolor={ colors.CitrusSplash } >
                        <BounceBox>
                            <Brightness5Icon />
                        </BounceBox>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
}