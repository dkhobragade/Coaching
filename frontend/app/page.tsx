import LandingPage from "@/components/Pages/LandingPage";
import Scroller from "@/components/Pages/Scroller";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const LandingHighlight = dynamic( () => import( "@/components/Pages/LandingHighlight" ) );

const StayConnectedSection = dynamic( () => import( "@/components/Pages/StayConnectedSection" ) );


export default function Home ()
{

  return (
    <Box sx={ { width: "100%", overflowX: "hidden" } } >
      <LandingPage />
      <Scroller />
      <LandingHighlight />
      <StayConnectedSection />
    </Box>
  );
}
