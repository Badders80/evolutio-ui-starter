/* src/app/sandbox/page.tsx */
import Image from 'next/image';

// Why: Root layout renders the "top set". This page adds experimental content.
export default function SandboxPage() {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 16:9 Image Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src="/images/content/Background-hooves-back-and-white.jpg"
          alt="Background hooves in black and white"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}