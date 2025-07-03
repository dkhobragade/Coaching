import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function LandingPage() {
  return (
    <Grid container>
      <Grid size={7} display="flex" justifyContent="center" alignItems="center">
        <Box width={550} padding={5}>
          <Box mb={3}>
            <Typography component="div" fontWeight={700} fontSize={35}>
              No more confusion, no more delays Start your
              <Box bgcolor="#FCA311" width="fit-content" padding={1} mt={1}>
                <Typography fontSize={35} fontWeight={700}>
                  Journey now
                </Typography>
              </Box>
            </Typography>
          </Box>
              <Box
                paddingX={3}
                paddingY={1.5}
                className="cursor-pointer hover:scale-105"
                bgcolor="black"
                color="white"
                width="fit-content"
                padding={2}
              >
                Explore Courses
              </Box>
        </Box>
      </Grid>
      <Grid size={5}>
        <Box
          bgcolor="#14213D"
          className="h-screen"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="relative hover:scale-105 inline-block mt-2">
            <Box className="absolute top-2 left-2 w-full h-full bg-[#FCA311] rounded z-0"></Box>
            <Box className="relative z-10 bg-white text-black px-6 py-3 rounded font-semibold shadow-md cursor-pointer">
              Get Started
            </Box>
          </Box>
          <Image src="/Girl.png" alt="Girl" width={500} height={550} className="max-w-full" />
        </Box>
      </Grid>
    </Grid>
  );
}
