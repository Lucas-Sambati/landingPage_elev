import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

// Seções abaixo da dobra — carregadas sob demanda
const FeaturesSection = lazy(() => import("@/components/landing/FeaturesSection"));
const ShowcaseSection = lazy(() => import("@/components/landing/ShowcaseSection"));
const PricingSection = lazy(() => import("@/components/landing/PricingSection"));
const FeedbackSection = lazy(() => import("@/components/landing/FeedbackSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const FakeNotifications = lazy(() => import("@/components/landing/FakeNotifications"));
const GuaranteeBanner = lazy(() => import("@/components/landing/GuaranteeBanner"));

const Index = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <Suspense fallback={null}>
          <FeaturesSection />
          <ShowcaseSection />
          <PricingSection />
          <FeedbackSection />
          <FAQSection />
          <Footer />
          <FakeNotifications />
          <GuaranteeBanner />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default Index;
