import type { Meta, StoryObj } from "@storybook/react";
import DualAudience from "@/components/sections/DualAudience";

const meta: Meta<typeof DualAudience> = {
  title: "Sections/DualAudience",
  component: DualAudience,
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
      description: "Main section title",
    },
    body: {
      control: "text",
      description: "Introduction paragraph",
    },
    leftAudience: {
      control: "object",
      description: "Left audience card content",
    },
    rightAudience: {
      control: "object",
      description: "Right audience card content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BusinessAudiences: Story = {
  args: {
    kicker: "Our Customers",
    title: "Built for Two Audiences",
    body: "Whether you're expanding your business or starting your investment journey, we have the right solution for you.",
    leftAudience: {
      title: "For Business Owners",
      body: "Scale your operations with our comprehensive business tools and dedicated support team.",
      ctaLabel: "Business Solutions",
      ctaHref: "/business",
    },
    rightAudience: {
      title: "For Individual Investors",
      body: "Start your investment journey with user-friendly tools and educational resources.",
      ctaLabel: "Start Investing",
      ctaHref: "/invest",
    },
  },
};

export const ProductComparison: Story = {
  args: {
    kicker: "Choose Your Path",
    title: "Two Product Tiers",
    body: "Select the plan that best fits your needs and budget.",
    leftAudience: {
      title: "Starter Plan",
      body: "Perfect for individuals and small teams just getting started.",
      ctaLabel: "Start Free Trial",
      ctaHref: "/trial",
    },
    rightAudience: {
      title: "Professional Plan",
      body: "Advanced features and priority support for growing businesses.",
      ctaLabel: "Go Professional",
      ctaHref: "/pro",
    },
  },
};