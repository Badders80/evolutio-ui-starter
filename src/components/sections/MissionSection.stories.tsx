import type { Meta, StoryObj } from "@storybook/react";
import MissionSection, { MissionSectionProps } from "./MissionSection";

const meta: Meta<typeof MissionSection> = {
  title: "Sections/Mission",
  component: MissionSection,
  args: {
    kicker: "OUR MISSION",
    titleTop: "OWNERSHIP",
    titleBottom: "RE-IMAGINED",
    body1:
      "Traditional racehorse ownership — expensive, restrictive, and opaque — has historically excluded those who dream of experiencing the thrill firsthand.",
    body2:
      "Evolution Stables removes these barriers, delivering ownership that’s genuinely accessible, fully transparent, and uniquely liquid.",
    ctaLabel: "Join the revolution",
    ctaHref: "/own",
    asContent: true
  },
  argTypes: {
    kicker: { control: "text" },
    titleTop: { control: "text" },
    titleBottom: { control: "text" },
    body1: { control: "text" },
    body2: { control: "text" },
    ctaLabel: { control: "text" },
    ctaHref: { control: "text" },
    asContent: { control: "boolean" }
  },
  parameters: { backgrounds: { default: "dark" } }
};
export default meta;
type Story = StoryObj<typeof MissionSection>;
export const Default: Story = {};
export const Compact: Story = {
  args: {
    titleBottom: "REDEFINED",
    body1: "Traditional ownership kept fans on the sidelines.",
    body2: "We make it accessible, transparent, and liquid—built for real people.",
    ctaLabel: "Get Started"
  }
};
