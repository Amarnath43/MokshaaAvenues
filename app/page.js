import Hero from "./components/Hero";
import ApprovalStrip from "./components/ApprovalStrip";
import MarqueeStrip from "./components/MarqueeStrip";
import HighlightsSection from "./components/HighlightsSection";
import FeaturesSection from "./components/FeaturesSection";
import LocationSection from "./components/LocationSection";
import CompletedProjects from "./components/CompletedProjects";
import YoutubeSection from "./components/YoutubeSection";
import ContactForm from "./components/contact/Form";
import FloatBar from "./components/FloatBar";


export default function Home() {
  return (
    <main>
      <Hero />
      <ApprovalStrip />
      <MarqueeStrip />
      <HighlightsSection />
      <FeaturesSection />
      <LocationSection />
      <CompletedProjects />
      <YoutubeSection />
      <div className="max-w-lg mx-auto py-4">
        <ContactForm/>
       
      </div>
       <FloatBar/>
   
    </main>
  );
}