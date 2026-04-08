import "./globals.css";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Wananchi One Sacco</title>
        <meta name="description" content="Institutional infrastructure for precision wealth management and professional governance." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
        <link rel="apple-touch-icon" href="/wananchiLogoGold.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wananchi One" />
      </head>
      <body>
        <Toaster position="top-center" />
        <Analytics />
        <NextAuthProvider>
          <TanstackQueryProvider>
            <Theme>{children}</Theme>
          </TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
