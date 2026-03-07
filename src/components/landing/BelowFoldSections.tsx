import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const FeaturesSection = lazy(() => import("./FeaturesSection"));
const ShowcaseSection = lazy(() => import("./ShowcaseSection"));
const PricingSection = lazy(() => import("./PricingSection"));
const FeedbackSection = lazy(() => import("./FeedbackSection"));
const FAQSection = lazy(() => import("./FAQSection"));
const Footer = lazy(() => import("./Footer"));
const FakeNotifications = lazy(() => import("./FakeNotifications"));
const GuaranteeBanner = lazy(() => import("./GuaranteeBanner"));

const BelowFoldSections = () => (
  <LazyMotion features={domAnimation} strict>
    <Suspense fallback={null}>
      <ShowcaseSection />
      <FeaturesSection />
      <PricingSection />
      <FeedbackSection />
      <FAQSection />
      <Footer />
      <FakeNotifications />
      <GuaranteeBanner />
    </Suspense>
  </LazyMotion>
);

export default BelowFoldSections;
