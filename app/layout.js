import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

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
        suppressHydrationWarning={true} // This fixes the browser extension error
      >
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}