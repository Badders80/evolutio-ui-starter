import Mission from "@/components/sections/Mission";
import { DualAudience } from "@/components/sections/DualAudience";
import { AboutEvolution } from "@/components/sections/AboutEvolution";
import { InnovationDigital } from "@/components/sections/InnovationDigital";
import { PlatformMyStable } from "@/components/sections/PlatformMyStable";
import { FooterBlurb } from "@/components/sections/FooterBlurb";

export default function LandingSections() {
  return (
    <>
      <Mission />
      <DualAudience />
      <AboutEvolution />
      <InnovationDigital />
      <PlatformMyStable />
      <FooterBlurb />
    </>
  );
}