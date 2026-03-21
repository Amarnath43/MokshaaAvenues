import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import TopBar from "./components/TopBar";
import LocationSection from "./components/LocationSection";
import HighlightsSection from "./components/HighlightsSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingCTA from "./components/PricingCTA";
import MarqueeStrip from "./components/MarqueeStrip";
import ApprovalStrip from "./components/ApprovalStrip";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import YoutubeSection from './components/YoutubeSection'

export default function Home() {
  return (
    <main>
      
      <TopBar/>
      <Navbar/>
      <Hero/>
      <ApprovalStrip/>
      <MarqueeStrip/>
      <HighlightsSection/>
      <LocationSection/>
      <FeaturesSection/>
      <YoutubeSection/>
      <PricingCTA/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}