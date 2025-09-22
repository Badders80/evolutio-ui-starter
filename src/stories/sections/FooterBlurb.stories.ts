import type { Meta, StoryObj } from "@storybook/react";
import FooterBlurb from "@/components/sections/FooterBlurb";

const meta: Meta<typeof FooterBlurb> = {
  title: "Sections/FooterBlurb",
  component: FooterBlurb,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The footer message or tagline",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProductLaunch: Story = {
  args: {
    title: "Join thousands of satisfied customers. Start your journey today.",
  },
};

export const TechCompany: Story = {
  args: {
    title: "Build the future with our cutting-edge platform. Innovation starts here.",
  },
};

export const Minimal: Story = {
  args: {
    title: "Ready to get started?",
  },
};