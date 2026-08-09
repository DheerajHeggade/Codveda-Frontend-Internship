import Input from "./Input";

const meta = {
  title: "DEXTRO UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Full Name",
    placeholder: "Enter your name",
  },
};

export const Email = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "you@example.com",
  },
};

export const Password = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Required = {
  args: {
    label: "Username",
    placeholder: "Choose a username",
    required: true,
  },
};

export const WithHelperText = {
  args: {
    label: "API Key",
    placeholder: "Enter your API key",
    helperText: "Your API key is stored securely.",
  },
};

export const WithError = {
  args: {
    label: "Email Address",
    type: "email",
    value: "invalid-email",
    error: "Please enter a valid email address.",
  },
};

export const Disabled = {
  args: {
    label: "Account ID",
    value: "DEX-2026-001",
    disabled: true,
  },
};