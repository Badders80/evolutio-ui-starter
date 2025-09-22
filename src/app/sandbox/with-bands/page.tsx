// ======================================================================
// /src/app/sandbox/with-bands/page.tsx  (dev preview; safe to add)
// Demonstrates SectionShell + ImageBand + MissionCombo.
// ======================================================================
import SectionShell from '@/components/layout/SectionShell';
import ImageBand from '@/components/media/ImageBand';
import MissionCombo from '@/components/marketing/MissionCombo';
import content from '@/content/marketing.json';

export default function DevWithBandsPage() {
  const c = (content as { missionCombo: any }).missionCombo;

  return (
    <main className="space-y-12">
      <SectionShell id="mission" spaceY={1.5}>
        <MissionCombo mission={c.mission} support={c.support} />
      </SectionShell>

      <ImageBand src="/images/content/hero-band-01.jpg" alt="Thoroughbreds in motion" height={380} />

      {/* Wrap your next section */}
      <SectionShell id="two-paths">
        <div className="rounded-2xl bg-surface-2 p-8 shadow-xl">
          <h2 className="font-heading text-3xl text-accent">Two Paths to Ownership</h2>
          <p className="mt-2 text-muted">â€” placeholder demo block â€”</p>
        </div>
      </SectionShell>

      <ImageBand src="/images/content/hero-band-02.jpg" alt="Track rail detail" height={320} />

      <SectionShell id="about">
        <div className="rounded-2xl bg-surface-2 p-8 shadow-xl">
          <h2 className="font-heading text-3xl text-accent">Ownership, the Evolution Way</h2>
          <p className="mt-2 text-muted">â€” placeholder demo block â€”</p>
        </div>
      </SectionShell>

      <ImageBand src="/images/content/hero-band-03.jpg" alt="Saddle and silk" height={320} />

      {/* Continue with your real sections... */}
    </main>
  );
}

