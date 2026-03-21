import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const StatsBar = lazy(() => import("./StatsBar"));
const PainSection = lazy(() => import("./PainSection"));
const ShowcaseSection = lazy(() => import("./ShowcaseSection"));
const GamificationSection = lazy(() => import("./GamificationSection"));
const FeedbackSection = lazy(() => import("./FeedbackSection"));
const FeaturesSection = lazy(() => import("./FeaturesSection"));
const OriginStorySection = lazy(() => import("./OriginStorySection"));
const CTASection = lazy(() => import("./CTASection"));
const PricingSection = lazy(() => import("./PricingSection"));
const FAQSection = lazy(() => import("./FAQSection"));
const FinalCTASection = lazy(() => import("./FinalCTASection"));
const Footer = lazy(() => import("./Footer"));
const GuaranteeBanner = lazy(() => import("./GuaranteeBanner"));
const SectionDivider = lazy(() => import("./SectionDivider"));

const BelowFoldSections = () => (
  <LazyMotion features={domAnimation} strict>
    <Suspense fallback={null}>
      <StatsBar />
      <PainSection />
      <SectionDivider />
      <ShowcaseSection />
      <SectionDivider />
      <GamificationSection />
      <SectionDivider />
      <FeedbackSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <OriginStorySection />
      <SectionDivider />
      <CTASection />
      <PricingSection />
      <SectionDivider />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <GuaranteeBanner />
    </Suspense>
  </LazyMotion>
);

export default BelowFoldSections;
