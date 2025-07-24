"use client"

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ScaleButton } from "../lowLevelComponent/Animation";
import colors from "@/lib/color";

export default function LandingPage ()
{

  return (
    <Grid container>
      <Grid size={ 7 } display="flex" justifyContent="center" alignItems="center">
        <Box width={ 550 } padding={ 5 }>
          <Box mb={ 3 }>
            <Typography component="div" fontWeight={ 700 } fontSize={ { xs: 26, sm: 30, md: 35 } } >
              No more confusion, no more delays Start your
              <Box bgcolor={ colors.Zinnia } width="fit-content" padding={ 1 } mt={ 1 }>
                <Typography fontSize={ { xs: 26, sm: 30, md: 35 } } fontWeight={ 700 }>
                  Journey now
                </Typography>
              </Box>
            </Typography>
          </Box>
          <ScaleButton justify="start" text="Explore Courses" />
        </Box>
      </Grid >
      <Grid size={ 5 }>
        <Box
          bgcolor={ colors.CoolBalaclavasAreForever }
          className="h-screen"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src="/Girl.png" alt="Girl" width={ 500 } height={ 550 } className="max-w-full" loading="lazy" />
        </Box>
      </Grid>
    </Grid >
  );
}
