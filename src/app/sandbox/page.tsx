import { Metadata } from 'next';
import ContentContainer from '@/components/ContentContainer';
import ImageContainer from '@/components/ImageContainer';

export const metadata: Metadata = {
  title: 'Sandbox',
  description: 'Prototype your UI here',
};

export default function SandboxPage() {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <ImageContainer
        src="/images/content/Background-hooves-back-and-white.jpg"
        alt="Sandbox Hero Image"
      />
      <ContentContainer>
        <h1 className="mb-4 text-4xl font-bold">Sandbox Prototype</h1>
        <p className="text-lg text-gray-600">
          This page uses ContentContainer for padded, centered content and ImageContainer for a full-width, 16:9 image with clipped overflow. Use the Dev Bar (press .) to toggle tools like grid overlay (g).
        </p>
      </ContentContainer>
    </main>
  );
}