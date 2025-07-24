import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import { ListItems } from "@/lib/constant";
import { ScaleButton } from "../lowLevelComponent/Animation";
import colors from "@/lib/color";

export default function LandingHighlight ()
{

  const renderListItem = () =>
  {
    return <List>
      { ListItems.map( ( item ) => <ListItem key={ item.key }>
        <ListItemIcon>
          <CheckCircleIcon color="success" />
        </ListItemIcon>
        <ListItemText primary={ item.text } />
      </ListItem> ) }
    </List>
  }



  return (
    <Box
      bgcolor="white"
      className="w-full h-100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={ 10 }
    >
      <Grid container spacing={ 10 } margin="auto" >
        <Grid
          className="rounded-2xl"
          order={ { xs: 2, md: 1 } }
          size={ { xs: 12, md: 6 } }
        >
          <Box position="relative" width="fit-content">
            <Box
              display={ { xs: 'none', sm: 'none', md: 'block' } }
              bgcolor={ colors.Zinnia }
              width={ 300 }
              maxHeight={ 250 }
              maxWidth={ 300 }
              height={ 250 }
              position="absolute"
              top="50%"
              left="50%"
              className="max-w-[190] max-h-[160] z-0"
              sx={ {
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
                  md: "translate(-80%, -70%)",
                  xs: "translate(-100%, -70%)"
                },
                borderRadius: 2,
              } }
            />
            <Box position="relative" zIndex={ 1 }>
              <Image
                className="cursor-pointer"
                src="/iPad.png"
                alt="iPad"
                width={ 500 }
                height={ 580 }
                style={ { maxWidth: "100%", height: "auto" } }
                loading="lazy"
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } } order={ { xs: 1, md: 2 } }>
          <Grid>
            <Grid>
              <Typography fontSize={ 20 }>
                Your MPSC Preparation, Simplified
              </Typography>
            </Grid>
            <Grid>
              { renderListItem() }
            </Grid>
            <Grid>
              <ScaleButton justify="start" text="Explore Courses" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
