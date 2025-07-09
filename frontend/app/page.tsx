import CallToAction from "@/components/Pages/CallToAction";
import LandingPage from "@/components/Pages/LandingPage";
import Scroller from "@/components/Pages/Scroller";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const LandingHighlight = dynamic( () => import( "@/components/Pages/LandingHighlight" ) );

const StayConnectedSection = dynamic( () => import( "@/components/Pages/StayConnectedSection" ) );

const ChooseUsSection = dynamic( () => import( "@/components/Pages/ChooseUs" ) )

const CallToActionSection = dynamic( () => import( "@/components/Pages/CallToAction" ) )


export default function Home ()
{

  return (
    <Box sx={ { width: "100%", overflowX: "hidden" } } >
      <LandingPage />
      <Scroller />
      <LandingHighlight />
      <ChooseUsSection />
      <CallToActionSection />
      {/* <StayConnectedSection /> */ }
    </Box>
  );
}
