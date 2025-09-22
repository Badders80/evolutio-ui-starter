import type { Meta, StoryObj } from "@storybook/react";
import PlatformMyStable from "@/components/sections/PlatformMyStable";

const meta: Meta<typeof PlatformMyStable> = {
  title: "Sections/PlatformMyStable",
  component: PlatformMyStable,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "First part of the title",
    },
    titleHighlight: {
      control: "text",
      description: "Highlighted middle part",
    },
    tagline: {
      control: "text",
      description: "End part of the title",
    },
    body: {
      control: "text",
      description: "Main body text",
    },
    taglineLink: {
      control: "object",
      description: "Link object with text and href",
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

export const ProductHub: Story = {
  args: {
    title: "ProductHub: Everything you need, in one ",
    titleHighlight: "central",
    tagline: " location.",
    body: "Streamline your workflow and boost productivity with our all-in-one platform designed for modern teams.",
    taglineLink: {
      text: "TechCorp Solutions",
      href: "https://techcorp.com/",
    },
    ctaLabel: "Get Started",
    ctaHref: "/signup",
  },
};

export const AppPlatform: Story = {
  args: {
    title: "AppCenter: Your apps, in one ",
    titleHighlight: "unified",
    tagline: " dashboard.",
    body: "Manage all your applications from a single, intuitive interface that scales with your business.",
    taglineLink: {
      text: "CloudBase Systems",
      href: "https://cloudbase.io/",
    },
    ctaLabel: "Sign In",
    ctaHref: "/signin",
  },
};