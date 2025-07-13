import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from "@mui/material";
import SpeedDialWrapper from "@/components/Pages/SpeedDialWrapper";
import CartWrapper from "@/components/Pages/CartWrapper";
import theme from "@/lib/theme";
import "./globals.css";
import FooterWrapper, { HeaderWrapper } from "@/components/Pages/Wrapper";
import { ToastContainer } from 'react-toastify';

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
            <HeaderWrapper />
            <SpeedDialWrapper />
            <CartWrapper />
            { children }
            <FooterWrapper />
            <ToastContainer autoClose={ 5000 } position="bottom-right" />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
