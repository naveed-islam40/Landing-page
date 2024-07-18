import { AchievmentsSection } from "@/components/AchievementSections";
import { BenefitsSection } from "@/components/BenefitSection";
import { DownloadSection } from "@/components/DownloadSections";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { LogosSection } from "@/components/LogosSection";
import { ReviewCardsSection } from "@/components/ReviewCardsSection";

export default function Home() {
  return (
    <div className="h-full antialiased">
      <Hero />
      <LogosSection />
      <BenefitsSection />
      <ReviewCardsSection />
      <AchievmentsSection />
      <IntegrationsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
