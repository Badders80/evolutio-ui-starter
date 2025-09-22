import type { Meta, StoryObj } from "@storybook/react";
import { SectionBand } from "@/components/sections/SectionBand";

const meta: Meta<typeof SectionBand> = {
  title: "Sections/SectionBand",
  component: SectionBand,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    imageName: {
      control: "select",
      options: ["band-1", "band-2", "band-3", "hero"],
      description: "Marketing image to display",
    },
    aspectRatio: {
      control: "select",
      options: ["wide", "standard"],
      description: "Aspect ratio of the image container",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageName: "band-1",
  },
};

export const WideFormat: Story = {
  args: {
    imageName: "band-2",
    aspectRatio: "wide",
  },
};

export const StandardFormat: Story = {
  args: {
    imageName: "band-3",
    aspectRatio: "standard",
  },
};

export const HeroImage: Story = {
  args: {
    imageName: "hero",
    aspectRatio: "standard",
  },
};