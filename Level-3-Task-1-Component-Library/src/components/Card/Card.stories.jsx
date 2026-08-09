import Card from "./Card";
import Button from "../Button/Button";

const meta = {
  title: "DEXTRO UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "flat", "gradient"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: "DEXTRO AI",
    description: "Explore the future of artificial intelligence.",
    children: (
      <p>
        Discover powerful AI tools designed to help you
        create, learn, automate, and build faster.
      </p>
    ),
  },
};

export const WithFooter = {
  args: {
    title: "Pro Plan",
    description: "Everything you need to build faster.",
    children: (
      <div>
        <strong>$19/month</strong>
        <p>Unlimited access to premium features.</p>
      </div>
    ),
    footer: (
      <Button size="small">
        Get Started
      </Button>
    ),
  },
};

export const Bordered = {
  args: {
    title: "Bordered Card",
    description: "A minimal card with no shadow.",
    variant: "bordered",
    children: <p>Clean and simple.</p>,
  },
};

export const Flat = {
  args: {
    title: "Flat Card",
    description: "Designed for subtle UI sections.",
    variant: "flat",
    children: <p>Lightweight visual hierarchy.</p>,
  },
};

export const Gradient = {
  args: {
    title: "AI Workspace",
    description: "A premium gradient card.",
    variant: "gradient",
    children: (
      <p>
        Build your next AI-powered experience with
        DEXTRO UI.
      </p>
    ),
  },
};