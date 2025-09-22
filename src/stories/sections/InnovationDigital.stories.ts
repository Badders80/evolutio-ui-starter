import type { Meta, StoryObj } from "@storybook/react";
import InnovationDigital from "@/components/sections/InnovationDigital";

const meta: Meta<typeof InnovationDigital> = {
  title: "Sections/InnovationDigital",
  component: InnovationDigital,
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
      description: "First part of the title",
    },
    titleHighlight: {
      control: "text",
      description: "Highlighted part of the title",
    },
    body: {
      control: "text",
      description: "Main body text",
    },
    ctaLabel: {
      control: "text",
      description: "Call-to-action button text",
    },
    ctaHref: {
      control: "text",
      description: "Call-to-action button link",
    },
    bullets: {
      control: "object",
      description: "Array of bullet point objects",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProductLaunch: Story = {
  args: {
    kicker: "New Release",
    title: "Introducing ",
    titleHighlight: "Next-Gen",
    body: "Our latest platform brings cutting-edge technology to simplify complex processes and deliver exceptional user experiences.",
    ctaLabel: "Try It Now",
    ctaHref: "/signup",
    bullets: [
      {
        title: "Lightning Fast",
        body: "Built with modern web technologies for instant loading and smooth interactions.",
      },
      {
        title: "Secure by Design",
        body: "End-to-end encryption and zero-trust architecture protect your data.",
      },
      {
        title: "AI Enhanced",
        body: "Smart algorithms learn from your behavior to provide personalized experiences.",
      },
    ],
  },
};

export const FeatureHighlight: Story = {
  args: {
    kicker: "Key Features",
    title: "Smart ",
    titleHighlight: "Analytics",
    body: "Transform your data into actionable insights with our advanced analytics platform.",
    ctaLabel: "View Demo",
    ctaHref: "/demo",
    bullets: [
      {
        title: "Real-time Processing",
        body: "Process millions of data points in real-time with sub-second latency.",
      },
      {
        title: "Custom Dashboards",
        body: "Create personalized dashboards tailored to your specific needs and workflows.",
      },
    ],
  },
};