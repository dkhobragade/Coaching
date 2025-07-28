import { BounceBox } from "@/components/lowLevelComponent/Animation";
import colors from "@/lib/color";
import { Box, Grid, Typography } from "@mui/material";

export default function Test ()
{

    const renderBox = ( initial: string, text: string, boxColor?: string ) =>
    {
        return <Box className='cursor-pointer' width={ 150 } boxShadow={ 5 } borderRadius={ 5 } minHeight={ 120 } maxHeight="fit-content" mb={ 3 } bgcolor={ boxColor ?? colors.DrWhite } >
            <Typography textAlign="end" padding={ 2 } color={ colors.Black } fontWeight={ 600 } fontSize={ 20 } >
                { initial }
            </Typography>
            <Typography padding={ 2 } color={ colors.BlueAstro } fontWeight={ 700 }>
                { text }
            </Typography>
        </Box>
    }

    return <Box minHeight="100vh">
        <Grid container>
            <Grid size={ 8 } >
                <Box minHeight="100vh" sx={ { position: "relative", overflow: "hidden" } }>
                    <Box sx={ {
                        position: "absolute",
                        top: "-10px", // adjust for vertical placement
                        left: "-150px", // adjust for horizontal placement
                        width: "750px", // width for elongation
                        height: "600px", // height for circle height
                        background: colors.CottonBoll,
                        borderRadius: "50% 50% 50% 50%", // make it a full ellipse
                        transform: "rotate(-30deg)", // for angled look (optional)
                        zIndex: -1,
                    } } />
                    <BounceBox>
                        <Box ml={ 8 } width={ 40 } height={ 40 } border={ 5 } borderRadius={ 2 } className='rotate-50' borderColor={ colors.Zinnia } />
                    </BounceBox>
                    <Box display="flex" gap={ 0 } >
                        <Box mt={ 1 } ml={ 10 } >
                            { renderBox( "M", "Mains Paper" ) }
                            { renderBox( "P", "Prelims Paper" ) }
                            { renderBox( "R", "Revision Sets", colors.FlorentineLapis ) }
                        </Box>
                        <Box mt={ 6 } ml={ 4 } >
                            { renderBox( "A", "Answer Keys", colors.DarkMidnightBlue ) }
                            { renderBox( "C", "Current Affairs", ) }
                            { renderBox( "S", "Subject-Wise Tests", colors.YrielYellow ) }
                        </Box>
                        <Box mt={ 14 } ml={ 4 }>
                            <BounceBox>
                                <Box ml={ 8 } width={ 40 } mb={ 5 } height={ 40 } border={ 5 } borderRadius={ 2 } className='rotate-50' borderColor={ colors.Zinnia } />
                            </BounceBox>
                            { renderBox( "T", "Test Strategy" ) }
                        </Box>
                    </Box >
                </Box>
            </Grid>
            <Grid size={ 4 } >2</Grid>
        </Grid>
    </Box >
}