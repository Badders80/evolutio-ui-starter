import Image from 'next/image';

interface ImageContainerProps {
  src: string;
  alt: string;
}

export default function ImageContainer({ src, alt }: ImageContainerProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}