import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travio GPS | Premium Vehicle Tracking & Theft Protection",
  description: "Protect your pride and joy with Travio GPS. Professional-grade hardwired, OBD, and magnetic trackers with real-time 4G tracking and instant theft alerts.",
  keywords: ["GPS tracker", "vehicle tracking", "theft protection", "car tracker", "van tracker", "Thatcham approved"],
  metadataBase: new URL("https://traviogps.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <body style={{ 
        fontFamily: "var(--font-dm-sans)", 
        backgroundColor: "var(--colour-white)",
        color: "var(--colour-black)"
      }}>
        {children}
      </body>
    </html>
  );
}
