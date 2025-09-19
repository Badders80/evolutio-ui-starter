import { Hero } from "@/components/site/Hero";
import { CTA } from "@/components/site/CTA";
import { Section } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import { MARKETING } from "@/lib/assets";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CTA />
      <Section
        title="Feature Flags"
        imageSrc={MARKETING.band1}
        imageRatio="16:9"
        body={
          <>
            <p>Toggle heavy UI and switch between mock/real APIs from the Dev Bar—no rebuilds needed.</p>
            <ul>
              <li>URL overrides (e.g., <code>?apiMode=real</code>)</li>
              <li>Environment defaults (<code>NEXT_PUBLIC_*</code>)</li>
            </ul>
          </>
        }
      />
      <Section
        title="Code-Splitting by Default"
        imageSrc={MARKETING.band2}
        imageRatio="1:1"
        reverse
        body={<p>Heavy components are dynamically imported so the core UI stays fast while prototyping.</p>}
      />
      <Section
        title="Mock → Real Seam"
        imageSrc={MARKETING.alt.horseAndFoal}
        imageRatio="4:3"
        body={<p>Shared types and adapters let you wire real endpoints later without touching UI components.</p>}
      />
      <Footer />
    </>
  );
}