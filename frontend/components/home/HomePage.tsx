import MainNavigation from "./navigation/MainNavigation";
import {
  AboutSection,
  BlogHighlightsSection,
  CallToActionSection,
  FaqSection,
  FooterSection,
  HireExpertSection,
  HowItWorksSection,
  NewsletterSection,
  PricingSection,
  TestimonialsSection,
} from "./sections";
import { SessionData } from "./types";

type HomePageProps = {
  session: SessionData | null;
};

export default function HomePage({ session }: HomePageProps) {
  return (
    <>
      <MainNavigation session={session} />
      <AboutSection />
      <HireExpertSection />
      <HowItWorksSection />
      <FaqSection />
      <PricingSection />
      <BlogHighlightsSection />
      <CallToActionSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
