import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from "@mui/material";
import SpeedDialWrapper from "@/components/Pages/SpeedDialWrapper";
import CartWrapper from "@/components/Pages/CartWrapper";
import theme from "@/lib/theme";
import "./globals.css";
import FooterWrapper from "@/components/Pages/FooterWrapper";
import Header from "@/components/lowLevelComponent/Header";

export const metadata: Metadata = {
  title: "DKMPSC",
  description: "MPSC prep made simple and effective.",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en"  >
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={ theme }>
            <Header />
            <SpeedDialWrapper />
            <CartWrapper />
            { children }
            <FooterWrapper />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
