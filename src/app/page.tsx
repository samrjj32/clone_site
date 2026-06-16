import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MeetingNotesSection } from "@/components/MeetingNotesSection";
import { UndetectableSection } from "@/components/UndetectableSection";
import { TranscriptionSection } from "@/components/TranscriptionSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MeetingNotesSection />
        <UndetectableSection />
        <TranscriptionSection />
        <FAQSection />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
