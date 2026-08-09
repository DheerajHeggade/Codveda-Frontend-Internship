import Badge from "./Badge";

const meta = {
  title: "DEXTRO UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "success",
        "warning",
        "danger",
        "info",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: "Default",
  },
};

export const Primary = {
  args: {
    children: "AI Tool",
    variant: "primary",
  },
};

export const Success = {
  args: {
    children: "Active",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Pending",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    children: "Failed",
    variant: "danger",
  },
};

export const Info = {
  args: {
    children: "New",
    variant: "info",
  },
};

export const Large = {
  args: {
    children: "Featured",
    variant: "primary",
    size: "large",
  },
};