"use client"

import colors from "@/lib/color";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ScaleButton } from "../lowLevelComponent/Animation";
import { useRouter } from "next/navigation";

export default function LandingPage ()
{

  const router = useRouter()

  const onClickSingUp = () =>
  {
    router.push( '/signup' )
  }


  return (
    <Grid container>
      <Grid size={ 7 } display="flex" justifyContent="center" alignItems="center">
        <Box width={ 550 } padding={ 5 }>
          <Box mb={ 3 }>
            <Typography component="div" fontWeight={ 700 } fontSize={ 35 }>
              No more confusion, no more delays Start your
              <Box bgcolor={ colors.Zinnia } width="fit-content" padding={ 1 } mt={ 1 }>
                <Typography fontSize={ 35 } fontWeight={ 700 }>
                  Journey now
                </Typography>
              </Box>
            </Typography>
          </Box>
          <ScaleButton justify="start" text="Explore Courses" />
        </Box>
      </Grid>
      <Grid size={ 5 }>
        <Box
          bgcolor={ colors.CoolBalaclavasAreForever }
          className="h-screen"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* <ScaleButton onClick={ onClickSingUp } text="Get Started" bgColor="bg-white" textColor="text-black" /> */ }
          <Image src="/Girl.png" alt="Girl" width={ 500 } height={ 550 } className="max-w-full" loading="lazy" />
        </Box>
      </Grid>
    </Grid>
  );
}
