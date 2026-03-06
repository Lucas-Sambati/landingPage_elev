import { lazy, Suspense } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

// Todas as seções below-fold + framer-motion carregados sob demanda
const BelowFoldSections = lazy(() => import("@/components/landing/BelowFoldSections"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <BelowFoldSections />
      </Suspense>
    </div>
  );
};

export default Index;
