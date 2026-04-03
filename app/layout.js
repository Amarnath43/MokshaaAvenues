import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MND Avenue | HMDA Approved Plots in Medchal",
  icons: {
    icon: '/favicon.png',
  },
  description: "Premium villa plots at Athvelly, Medchal. HMDA approved layout with 30m Master Plan Road access.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col"
        suppressHydrationWarning={true} 
      >
        <Navbar />
        {children}
          <Toaster position="top-right" />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-DPWZ8Y9BC5"/>
    </html>
  );
}