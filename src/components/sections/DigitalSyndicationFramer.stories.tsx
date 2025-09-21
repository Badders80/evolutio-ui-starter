import type { Meta, StoryObj } from "@storybook/react";
import { DigitalSyndicationFramer } from "./DigitalSyndicationFramer";

const meta: Meta<typeof DigitalSyndicationFramer> = {
  title: "Sections/Digital Syndication",
  component: DigitalSyndicationFramer,
  args: {
    title: "Digital-Syndication",
    layout: "columns",
    ownerTitle: "FOR OWNERS",
    ownerPoints:
      "Reliable income while keeping full control over your horse’s future.\nLease terms set by you, ensuring stability and long-term value.",
    investorTitle: "FOR INVESTORS",
    investorPoints:
      "Experience racehorse ownership with flexibility that fits your lifestyle.\nBuy in, enjoy the thrill, and share in potential returns—without the usual barriers.",
    industryTitle: "FOR THE INDUSTRY",
    industryPoints:
      "More engagement. More investment. A stronger, more sustainable future for racing.\nBringing new owners, new energy, and new opportunities into the sport."
  },
  argTypes: {
    layout: { control: { type: "radio" }, options: ["columns", "cards"] },
    ownerPoints: { control: "text" },
    investorPoints: { control: "text" },
    industryPoints: { control: "text" }
  },
  parameters: { backgrounds: { default: "dark" } }
};
export default meta;
type Story = StoryObj<typeof DigitalSyndicationFramer>;
export const Columns: Story = { args: { layout: "columns" } };
export const Cards: Story = { args: { layout: "cards" } };
