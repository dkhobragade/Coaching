import { ScrollItems1 } from "@/lib/constant";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

const Scroller = dynamic( () => import( "@/components/Pages/Scroller" ) );
const LandingHighlight = dynamic( () => import( "@/components/Pages/LandingHighlight" ) );
const ChooseUsSection = dynamic( () => import( "@/components/Pages/ChooseUs" ) )
const CallToActionSection = dynamic( () => import( "@/components/Pages/CallToAction" ) )
const StayConnectedSection = dynamic( () => import( "@/components/Pages/StayConnectedSection" ) );
const LandingPage = dynamic( () => import( "@/components/Pages/LandingPage" ) );


export default function Home ()
{

  return (
    <Box sx={ { width: "100%", overflowX: "hidden" } } >
      <LandingPage />
      <Scroller list={ ScrollItems1 } />
      <LandingHighlight />
      {/* <Strategy /> */ }
      <ChooseUsSection />
      <CallToActionSection />
      <StayConnectedSection />
    </Box>
  );
}
