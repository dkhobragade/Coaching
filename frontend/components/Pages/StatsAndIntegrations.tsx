import
  {
    Box,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

export default function StatsAndIntegrations ()
{
  return (
    <Grid padding={ 5 }>
      <Grid display="flex" flexDirection="column" gap={ 5 }>
        <Grid container spacing={ 3 }>
          <Grid size={ 9 }>
            <Box bgcolor="#2D2323" height={ 300 } borderRadius={ 5 }>
              <Box padding={ 3 } color="white">
                <Typography fontSize={ 25 }>
                  Stay Connected with Us — Wherever You Are
                </Typography>
                <Typography fontStyle="italic" fontWeight={ 100 } fontSize={ 12 }>
                  From live classes to quick updates, we’re with you across all
                  platforms.
                  <br />
                  Join the community and never miss a beat in your MPSC prep.
                </Typography>
              </Box>
              <Box className="grid grid-cols-5 grid-rows-2 gap-4">
                <Box
                  alignContent="center"
                  justifyContent="center"
                  height={ 70 }
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="cursor-pointer socialButton"
                  boxShadow={ 2 }
                >
                  <Grid container spacing={ 1 } alignItems="center" wrap="nowrap">
                    <Image
                      src="/socialMedia/mail.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography color="white">Google Mail</Typography>
                  </Grid>
                </Box>
                <Box
                  bgcolor="red"
                  alignContent="center"
                  justifyContent="center"
                  height={ 70 }
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="cursor-pointer socialButton"
                >
                  <Grid container spacing={ 1 } alignItems="center">
                    <Image
                      src="/socialMedia/whatsapp.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography>Whats App</Typography>
                  </Grid>
                </Box>
                <Box
                  bgcolor="red"
                  height={ 70 }
                  alignContent="center"
                  justifyContent="center"
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="col-span-2 cursor-pointer socialButton"
                >
                  <Grid container spacing={ 1 } alignItems="center">
                    <Image
                      src="/socialMedia/drive.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography>Google Drive</Typography>
                    <span className="text-xs">{ `(Access all the pdf)` }</span>
                  </Grid>
                </Box>
                <Box
                  bgcolor="red"
                  height={ 70 }
                  alignContent="center"
                  justifyContent="center"
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="col-start-5 cursor-pointer socialButton"
                >
                  <Grid container spacing={ 1 } alignItems="center">
                    <Image
                      src="/socialMedia/instagram.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography>Instagram</Typography>
                  </Grid>
                </Box>
                <Box
                  bgcolor="yellow"
                  height={ 70 }
                  alignContent="center"
                  justifyContent="center"
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="col-span-2 row-start-2 cursor-pointer socialButton"
                >
                  <Grid container spacing={ 1 } alignItems="center">
                    <Image
                      src="/socialMedia/youtube.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography>YouTube</Typography>
                    <span className="text-xs">{ `(Access all the free lecture)` }</span>
                  </Grid>
                </Box>
                <Box
                  bgcolor="red"
                  height={ 70 }
                  alignContent="center"
                  justifyContent="center"
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="col-start-3 row-start-2 cursor-pointer socialButton"
                >
                  <Grid container spacing={ 1 } alignItems="center">
                    <Image
                      src="/socialMedia/telegram.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography>Telegram</Typography>
                  </Grid>
                </Box>
                <Box
                  bgcolor="red"
                  height={ 70 }
                  alignContent="center"
                  justifyContent="center"
                  borderRadius={ 5 }
                  padding={ 1 }
                  className="col-span-2 col-start-4 row-start-2 cursor-pointer socialButton"
                >
                  <Grid container spacing={ 1 } alignItems="center">
                    <Image
                      src="/socialMedia/meet.png"
                      alt="telegram"
                      width={ 30 }
                      height={ 30 }
                    />
                    <Typography>Google Meet</Typography>
                    <span className="text-xs">{ `(One-to-One Counselling)` }</span>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={ 3 } display="flex" alignItems="center">
            <Box
              bgcolor="#4F75FE"
              height={ 300 }
              color="white"
              width={ 300 }
              borderRadius={ 5 }
              padding={ 3 }
            >
              <Stack spacing={ 2 }>
                <Typography fontSize={ 18 }>PYQ + Mock Test Vault</Typography>
                <Stack spacing={ 4 }>
                  <Grid container spacing={ 1 }>
                    <Grid>
                      <StarIcon color="secondary" />
                    </Grid>
                    <Grid>
                      <Typography>Topic-wise PYQs</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={ 1 }>
                    <Grid>
                      <StarIcon color="secondary" />
                    </Grid>
                    <Grid>
                      <Typography>Full-Length Mocks</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={ 1 }>
                    <Grid>
                      <StarIcon color="secondary" />
                    </Grid>
                    <Grid>
                      <Typography>Instant Solutions</Typography>
                    </Grid>
                  </Grid>
                </Stack>
                <Box padding={ 2 } bgcolor="black" color="white" className='cursor-pointer hover:scale-105' justifyItems="center">
                  <Typography>
                    Start Test
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={ 2 }>
          <Grid size={ 3 }>
            <Box
              height={ 200 }
              bgcolor="#687FE5"
              padding={ 2 }
              borderRadius={ 5 }
            >
              <Stack spacing={ 3 }>
                <Typography fontSize={ 20 }>Clear Your Goals</Typography>
                <Typography color="white">
                  Tailored preparation strategies to help you crack Prelims, Mains & Interview with confidence.
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={ 3 }>
            <Box
              height={ 200 }
              bgcolor="#98A1BC"
              padding={ 2 }
              borderRadius={ 5 }
            >
              <Stack spacing={ 3 }>
                <Typography fontSize={ 20 }>All-in-One Resources</Typography>
                <Typography color="white">From daily current affairs to subject-wise notes – everything you need in one place.</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={ 3 }>
            <Box
              height={ 200 }
              bgcolor="#91C8E4"
              padding={ 2 }
              borderRadius={ 5 }
            >
              <Stack spacing={ 3 }>
                <Typography fontSize={ 20 }>Smart Study Plans</Typography>
                <Typography color="white">Stay on track with structured timetables, revision modules, and performance tracking.</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid size={ 3 }>
            <Box
              height={ 200 }
              bgcolor="#A2D5C6"
              padding={ 2 }
              borderRadius={ 5 }
            >
              <Stack spacing={ 3 }>
                <Typography fontSize={ 20 }>Personal Mentorship</Typography>
                <Typography color="white">1-on-1 guidance to keep you motivated, focused, and always moving forward in your journey.</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
