import Hero from "./components/Hero";
import LocationSection from "./components/LocationSection";
import HighlightsSection from "./components/HighlightsSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingCTA from "./components/PricingCTA";
import MarqueeStrip from "./components/MarqueeStrip";
import ApprovalStrip from "./components/ApprovalStrip";
import YoutubeSection from './components/YoutubeSection'
import FloatBar from "./components/FloatBar";

export default function Home() {
  return (
    <main>
      
      
      <Hero/>
      <ApprovalStrip/>
      <MarqueeStrip/>
      <HighlightsSection/>
      <LocationSection/>
      <FeaturesSection/>
      <YoutubeSection/>
      <PricingCTA/>
     <FloatBar/>
      
    </main>
  );
}