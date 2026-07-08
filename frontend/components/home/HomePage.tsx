import MainNavigation from "./navigation/MainNavigation";
import {
  DestinationsSection,
  StatementSection,
  JourneySection,
  BlogHighlightsSection,
  FaqSection,
  FooterSection,
  HireExpertSection,
  HowItWorksSection,
  PricingSection,
} from "./sections";
import { SessionData } from "./types";

type HomePageProps = {
  session: SessionData | null;
};

export default function HomePage({ session }: HomePageProps) {
  return (
    <>
      <MainNavigation session={session} />
      <DestinationsSection />
      <StatementSection />
      <HireExpertSection />
      <HowItWorksSection />
      <FaqSection />
      <BlogHighlightsSection />
      <PricingSection />
      <JourneySection />
      <FooterSection />
    </>
  );
}
