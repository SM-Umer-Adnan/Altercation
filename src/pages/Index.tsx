import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedBanner from "@/components/FeaturedBanner";
import StreamsAndProfiles from "@/components/StreamsAndProfiles";
import FeaturedTournaments from "@/components/FeaturedTournaments";
import InfoSections from "@/components/InfoSections";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedBanner />
      <StreamsAndProfiles />
      <FeaturedTournaments />
      <InfoSections />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Index;