import type { Meta, StoryObj } from "@storybook/react";
import Mission from "@/components/sections/Mission";

const meta: Meta<typeof Mission> = {
  title: "Sections/Mission",
  component: Mission,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    kicker: {
      control: "text",
      description: "Small text above the title",
    },
    title: {
      control: "text",
      description: "Main heading text",
    },
    body: {
      control: "text",
      description: "Body paragraph text",
    },
    ctaLabel: {
      control: "text",
      description: "Call-to-action button text",
    },
    ctaHref: {
      control: "text",
      description: "Call-to-action button link",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    kicker: "Our Vision",
    title: "A New Era of Investment",
    body: "We're revolutionizing how people think about alternative investments, making premium opportunities accessible to everyone through innovative technology and transparent processes.",
    ctaLabel: "Get Started Today",
    ctaHref: "/get-started",
  },
};

export const MinimalContent: Story = {
  args: {
    kicker: "Welcome",
    title: "Simple Title",
    body: "A shorter description that gets right to the point.",
    ctaLabel: "Learn More",
    ctaHref: "/learn",
  },
};