import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ShowcaseSection from "@/components/landing/ShowcaseSection";
import PricingSection from "@/components/landing/PricingSection";
import FeedbackSection from "@/components/landing/FeedbackSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import FakeNotifications from "@/components/landing/FakeNotifications";
import GuaranteeBanner from "@/components/landing/GuaranteeBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <FeedbackSection />
      <FAQSection />
      <Footer />
      <FakeNotifications />
      <GuaranteeBanner />
    </div>
  );
};

export default Index;
