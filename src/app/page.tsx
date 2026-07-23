import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollTracker } from "@/components/layout/ScrollTracker";

import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OpportunitySection } from "@/components/sections/OpportunitySection";
import { MethodCycleSection } from "@/components/sections/MethodCycleSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";

export default function Home() {
  return (
    <div id="topo" className="flex min-h-screen flex-col">
      <ScrollTracker />
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AnnouncementBar />
        <ProblemSection />
        <OpportunitySection />
        <MethodCycleSection />
        <LearnSection />
        <AudienceSection />
        <VideoTestimonials />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
        <LegalDisclaimer />
      </main>

      <Footer />
    </div>
  );
}
