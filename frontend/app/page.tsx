import LandingHighlight from "@/components/Pages/LandingHighlight";
import LandingPage from "@/components/Pages/LandingPage";
import Scroller from "@/components/Pages/Scroller";
import StatsAndIntegrations from "@/components/Pages/StatsAndIntegrations";
import { Box } from "@mui/material";

export default function Home ()
{
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }} >
      <LandingPage/>
      <Scroller/>
      <LandingHighlight/>
      <StatsAndIntegrations/>
    </Box>
  );
}
