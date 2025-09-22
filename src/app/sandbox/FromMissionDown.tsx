import SectionShell from "@/components/layout/SectionShell";
import AudienceValue from "@/components/marketing/AudienceValue";
import EvolutionWay from "@/components/marketing/EvolutionWay";
import InnovationDigitalSyndication from "@/components/marketing/InnovationDigitalSyndication";
import FAQSimple from "@/components/marketing/FAQSimple";
import MyStableCta from "@/components/marketing/MyStableCta";
import FooterBlurb from "@/components/marketing/FooterBlurb";
import ImageBand from "@/components/media/ImageBand";

export default function FromMissionDown() {
  return (
    <div className="bg-black">
      <ImageBand src="/images/content/hero-band-01.jpg" alt="Thoroughbreds in motion" height={380} />

      <SectionShell id="audience">
        <AudienceValue />
      </SectionShell>

      <ImageBand src="/images/content/hero-band-02.jpg" alt="Track rail detail" height={320} />

      <SectionShell id="evolution">
        <EvolutionWay />
      </SectionShell>

      <ImageBand src="/images/content/hero-band-03.jpg" alt="Saddle and silk" height={320} />

      <SectionShell id="innovation">
        <InnovationDigitalSyndication />
      </SectionShell>

      <ImageBand src="/images/content/hero-band-04.jpg" alt="Race day crowd" height={340} />

      <SectionShell id="faq">
        <FAQSimple />
      </SectionShell>

      <SectionShell id="mystable">
        <MyStableCta />
      </SectionShell>

      <SectionShell id="footer-blurb" spaceY={1}>
        <FooterBlurb />
      </SectionShell>
    </div>
  );
}

