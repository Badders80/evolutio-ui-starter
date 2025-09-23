import { Metadata } from 'next';
import ContentContainer from '@/components/sandbox/ContentContainer';
import ImageContainer from '@/components/sandbox/ImageContainer';
import { DevProvider } from '@/components/sandbox/DevContext';

export const metadata: Metadata = {
  title: 'Sandbox',
  description: 'Prototype your UI here with dynamic dev toggles',
};

export default function SandboxPage() {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <DevProvider>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative">
          <ImageContainer
            src="/images/content/Background-hooves-back-and-white.jpg"
            alt="Evolution Stables Hero"
          >
            <div className="text-center text-yellow-400">
              <h1 className="text-6xl font-bold">EVOLUTION</h1>
              <h1 className="text-6xl font-bold">STABLES</h1>
            </div>
          </ImageContainer>
        </section>

        {/* Mission Section */}
        <ContentContainer className="mt-8">
          <h2 className="mb-4 text-4xl font-bold">Our Mission</h2>
          <h3 className="mb-6 text-2xl">Ownership Re-Imagined</h3>
          <p className="mb-6 text-lg">
            Traditional racehorse ownership—expensive, restrictive, opaque—has historically excluded those who dream of the thrill.
          </p>
          <p className="font-semibold text-yellow-400">
            We deliver ownership that&apos;s genuinely accessible, fully transparent, and uniquely liquid.
          </p>
          <button className="mt-4 rounded bg-yellow-500 px-6 py-3 text-black hover:bg-yellow-400">
            Join the Revolution
          </button>
        </ContentContainer>
      </main>
    </DevProvider>
  );
}