import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

export default function LandingHighlight() {
  return (
    <Box
      bgcolor="white"
      className="w-full h-screen"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={10}
    >
      <Grid container spacing={10} margin="auto" >
        <Grid
          className="rounded-2xl"
          order={{ xs: 2, md: 1 }}
          size={{ xs: 12, md: 6 }}
        >
          <Box position="relative" width="fit-content">
            <Box
              bgcolor="#FCA311"
              width={300}
              maxHeight={250}
              maxWidth={300}
              height={250}
              position="absolute"
              top="50%"
              left="50%"
              className="max-w-[190] max-h-[160] z-0"
              sx={{
                width: {
                  xs: 190,
                  sm: 220,
                  md: 300,
                },
                height: {
                  xs: 160,
                  sm: 200,
                  md: 250,
                },
                transform: {
                    md:"translate(-80%, -70%)",
                    xs:"translate(-100%, -70%)"
                },
                borderRadius: 2,
              }}
            />
            <Box position="relative" zIndex={1}>
              <Image
                className="cursor-pointer"
                src="/iPad.png"
                alt="iPad"
                width={500}
                height={580}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          <Grid>
            <Grid>
              <Typography fontSize={20}>
                Your MPSC Preparation, Simplified
              </Typography>
            </Grid>
            <Grid>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Structured courses for Pre + Mains" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Daily practice tests & analysis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Personalized doubt-clearing sessions" />
                </ListItem>
              </List>
            </Grid>
            <Grid>
              <Box className="relative hover:scale-105 inline-block mt-2">
                <Box className="absolute top-2 left-2 w-full h-full bg-[#FCA311] rounded z-0"></Box>
                <Box className="relative  z-10 bg-black text-white px-6 py-3 rounded font-semibold shadow-md cursor-pointer">
                  Explore Courses
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
