import Button from "./Button";

const meta = {
  title: "DEXTRO UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

export const Primary = {
  args: {
    children: "Get Started",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary = {
  args: {
    children: "Learn More",
    variant: "secondary",
  },
};

export const Outline = {
  args: {
    children: "Explore",
    variant: "outline",
  },
};

export const Ghost = {
  args: {
    children: "Cancel",
    variant: "ghost",
  },
};

export const Large = {
  args: {
    children: "Create Project",
    variant: "primary",
    size: "large",
  },
};

export const Disabled = {
  args: {
    children: "Unavailable",
    disabled: true,
  },
};