import { Hero } from "@/components/home/Hero";
import { FractureSection } from "@/components/home/FractureSection";
import { EssSection } from "@/components/home/EssSection";
import { StatsSection } from "@/components/home/StatsSection";
import { LabelsSection } from "@/components/home/LabelsSection";
import { PartnersSection } from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FractureSection />
      <EssSection />
      <StatsSection />
	  <LabelsSection />
	  <PartnersSection />
    </>
  );
}