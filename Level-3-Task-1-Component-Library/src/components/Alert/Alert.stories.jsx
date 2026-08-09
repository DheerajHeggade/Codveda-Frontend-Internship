import Alert from "./Alert";

const meta = {
  title: "DEXTRO UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
    dismissible: {
      control: "boolean",
    },
  },
};

export default meta;

export const Info = {
  args: {
    title: "Information",
    children: "Your workspace is ready to use.",
    variant: "info",
  },
};

export const Success = {
  args: {
    title: "Success",
    children: "Your changes have been saved successfully.",
    variant: "success",
  },
};

export const Warning = {
  args: {
    title: "Warning",
    children: "Your API usage is approaching its monthly limit.",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    title: "Something went wrong",
    children: "We couldn't complete your request.",
    variant: "danger",
  },
};

export const Dismissible = {
  args: {
    title: "New feature available",
    children: "Try the latest DEXTRO AI tools.",
    variant: "info",
    dismissible: true,
  },
};