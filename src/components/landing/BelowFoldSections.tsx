import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const PainSection = lazy(() => import("./PainSection"));
const ShowcaseSection = lazy(() => import("./ShowcaseSection"));
const GamificationSection = lazy(() => import("./GamificationSection"));
const FeaturesSection = lazy(() => import("./FeaturesSection"));
const FeedbackSection = lazy(() => import("./FeedbackSection"));
const CTASection = lazy(() => import("./CTASection"));
const PricingSection = lazy(() => import("./PricingSection"));
const FAQSection = lazy(() => import("./FAQSection"));
const Footer = lazy(() => import("./Footer"));
const GuaranteeBanner = lazy(() => import("./GuaranteeBanner"));
const SectionDivider = lazy(() => import("./SectionDivider"));

const BelowFoldSections = () => (
  <LazyMotion features={domAnimation} strict>
    <Suspense fallback={null}>
      <PainSection />
      <SectionDivider />
      <ShowcaseSection />
      <SectionDivider />
      <GamificationSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <FeedbackSection />
      <SectionDivider />
      <CTASection />
      <PricingSection />
      <SectionDivider />
      <FAQSection />
      <Footer />
      <GuaranteeBanner />
    </Suspense>
  </LazyMotion>
);

export default BelowFoldSections;
