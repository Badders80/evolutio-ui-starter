import type { Meta, StoryObj } from "@storybook/react";
import AboutEvolution from "@/components/sections/AboutEvolution";

const meta: Meta<typeof AboutEvolution> = {
  title: "Sections/AboutEvolution",
  component: AboutEvolution,
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
    features: {
      control: "object",
      description: "Array of feature objects with title and body",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomFeatures: Story = {
  args: {
    kicker: "Why Choose Us",
    title: "Built for Modern Investors",
    features: [
      {
        title: "Secure Platform",
        body: "Bank-level security with 256-bit encryption and multi-factor authentication to protect your investments.",
      },
      {
        title: "Real-time Updates",
        body: "Get instant notifications about your portfolio performance and market changes as they happen.",
      },
      {
        title: "Expert Support",
        body: "Access to our team of investment professionals who can help guide your decision-making process.",
      },
      {
        title: "Mobile Ready",
        body: "Manage your investments anywhere with our fully responsive platform that works on any device.",
      },
    ],
  },
};

export const TechCompany: Story = {
  args: {
    kicker: "Technology",
    title: "Engineering Excellence",
    features: [
      {
        title: "Scalable Architecture",
        body: "Built with modern microservices architecture to handle millions of users and transactions.",
      },
      {
        title: "AI-Powered Insights",
        body: "Machine learning algorithms provide personalized recommendations and market analysis.",
      },
    ],
  },
};