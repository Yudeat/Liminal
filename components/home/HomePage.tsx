import MainNavigation from "./navigation/MainNavigation";
import {
  AboutSection,
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
      <CallToActionSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
