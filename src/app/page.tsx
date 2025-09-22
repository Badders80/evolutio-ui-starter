// ======================================================================
// /src/app/page.tsx  (example wiring: hero → image band → your sections)
// Swap the image paths to your assets under /public/images/... 
// Wrap tight sections in <SectionShell> so margins match the hero.
// ======================================================================
import HeroIntro from '@/components/marketing/HeroIntro';
import SectionShell from '@/components/layout/SectionShell';
import ImageBand from '@/components/media/ImageBand';
import MissionCombo from '@/components/marketing/MissionCombo';
import { Section } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import { MARKETING } from "@/lib/assets";
import content from '@/content/marketing.json';

export default function Page() {
  const c = (content as { missionCombo: any }).missionCombo;

  return (
    <main className="space-y-12">
      <HeroIntro
        bgSrc="/images/content/Horse-and-foal.jpg"
        title="EVOLUTION STABLES"
        tagline="Ownership, re-imagined"
        cta={{ label: 'Get Started', href: '/join' }}
        height={700}
        overlay={0.45}
      />

      <ImageBand src="/images/content/Hooves-on-grass.png" alt="Thoroughbreds in motion" height={380} />

      <SectionShell id="mission" spaceY={1.5}>
        <MissionCombo mission={c.mission} support={c.support} />
      </SectionShell>

      <ImageBand src="/images/content/Background-hooves-back-and-white.jpg" alt="Track rail detail" height={320} />

      {/* Restored original sections */}
      <SectionShell id="feature-flags">
        <Section
          title="Feature Flags"
          imageSrc={MARKETING.band1}
          imageRatio="16:9"
          body={
            <>
              <p>Toggle heavy UI and switch between mock and real APIs from the Dev Bar -- no rebuilds needed.</p>
              <ul>
                <li>
                  URL overrides (e.g., <code>?apiMode=real</code>)
                </li>
                <li>Environment defaults (<code>NEXT_PUBLIC_*</code>)</li>
              </ul>
            </>
          }
        />
      </SectionShell>

      <ImageBand src="/images/content/Horse-Double-Black.png" alt="Saddle and silk" height={320} />

      <SectionShell id="code-splitting">
        <Section
          title="Code-Splitting by Default"
          imageSrc={MARKETING.band2}
          imageRatio="1:1"
          reverse
          body={<p>Heavy components are dynamically imported so the core UI stays fast while prototyping.</p>}
        />
      </SectionShell>

      <SectionShell id="mock-real-seam">
        <Section
          title="Mock → Real Seam"
          imageSrc={MARKETING.alt.horseAndFoal}
          imageRatio="4:3"
          body={<p>Shared types and adapters let you wire real endpoints later without touching UI components.</p>}
        />
      </SectionShell>

      <Footer />
    </main>
  );
}
