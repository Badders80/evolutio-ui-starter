import { ReactNode } from "react";
import { ImageContainer } from "@/components/layout/ImageContainer";
import { ContentContainer } from "@/components/layout/ContentContainer";

type Props = {
  title: string;
  body: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imageRatio?: string | number;
  reverse?: boolean;
};

export function Section({ 
  title, 
  body, 
  imageSrc, 
  imageAlt = "", 
  imageRatio = "4:3",
  reverse = false 
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className={`grid items-center gap-8 py-12 md:grid-cols-2 md:py-16 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <ContentContainer max="none" pad="none">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
          <div className="prose prose-zinc mt-3 max-w-none dark:prose-invert">
            {body}
          </div>
        </ContentContainer>
        <ImageContainer
          src={imageSrc}
          alt={imageAlt}
          ratio={imageRatio}
          mode="cover"
        />
      </div>
    </section>
  );
}