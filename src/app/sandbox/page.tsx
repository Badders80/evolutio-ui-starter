import { notFound } from 'next/navigation';
import HeroIntro from '@/components/marketing/HeroIntro';
import ImageBand from '@/components/media/ImageBand';
import MissionTopCard from '@/components/marketing/MissionTopCard';
import FromMissionDown from './FromMissionDown';

export const metadata = {
  title: 'Sandbox',
  description: 'Work-in-progress playground for UI experiments.',
};

export default function SandboxPage() {
  const enabled =
    process.env.NODE_ENV !== 'production' ||
    process.env.NEXT_PUBLIC_SANDBOX_ENABLED === 'true';

  if (!enabled) {
    // Prevent leaking experiments in production.
    notFound();
  }

  return (
    <main className="min-h-screen space-y-12 bg-black pb-16 text-zinc-100">
      {/* === Keep your existing first two sections here (unchanged) === */}
      <HeroIntro
        bgSrc="/images/content/Horse-and-foal.jpg"
        brandSrc="/public/brand/Evolution-Stables-Logo-White.png"
        brandAlt="EVOLUTION STABLES"
        cta={{ label: 'Get Started', href: '/join' }}
        height={700}
        overlay={0.45}
      />

      <ImageBand src="/images/content/Hooves-on-grass.png" alt="Thoroughbreds in motion" height={380} />

      {/* === Single Mission block (top visual + bottom copy) === */}
      <MissionTopCard />

      {/* === Everything after Mission === */}
      <FromMissionDown />
    </main>
  );
}

