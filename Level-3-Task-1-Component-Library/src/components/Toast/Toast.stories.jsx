import { useState } from "react";
import Toast from "./Toast";
import Button from "../Button/Button";

const meta = {
  title: "DEXTRO UI/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
    duration: {
      control: "number",
    },
  },
};

export default meta;

function ToastDemo({
  title,
  message,
  variant,
  duration,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ minHeight: "120px" }}>
      <Button onClick={() => setOpen(true)}>
        Show Toast
      </Button>

      <div
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 9999,
        }}
      >
        <Toast
          open={open}
          title={title}
          message={message}
          variant={variant}
          duration={duration}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

export const Info = {
  render: () => (
    <ToastDemo
      title="Information"
      message="Your workspace is ready."
      variant="info"
      duration={0}
    />
  ),
};

export const Success = {
  render: () => (
    <ToastDemo
      title="Success"
      message="Your project was saved successfully."
      variant="success"
      duration={0}
    />
  ),
};

export const Warning = {
  render: () => (
    <ToastDemo
      title="Warning"
      message="You're approaching your API usage limit."
      variant="warning"
      duration={0}
    />
  ),
};

export const Danger = {
  render: () => (
    <ToastDemo
      title="Error"
      message="Something went wrong. Please try again."
      variant="danger"
      duration={0}
    />
  ),
};

export const AutoDismiss = {
  render: () => (
    <ToastDemo
      title="Saved"
      message="This notification disappears automatically."
      variant="success"
      duration={3000}
    />
  ),
};