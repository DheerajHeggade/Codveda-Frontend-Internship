import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

const meta = {
  title: "DEXTRO UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

function ModalDemo({
  title,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        footer={
          <>
            <Button
              variant="ghost"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        {children}
      </Modal>
    </>
  );
}

export const Default = {
  render: () => (
    <ModalDemo title="Welcome to DEXTRO AI">
      <p>
        Explore powerful AI tools designed to help
        you create, learn, and build faster.
      </p>
    </ModalDemo>
  ),
};

export const Confirmation = {
  render: () => (
    <ModalDemo title="Delete project?">
      <p>
        This action cannot be undone. Are you sure
        you want to continue?
      </p>
    </ModalDemo>
  ),
};

export const LongContent = {
  render: () => (
    <ModalDemo title="Terms and Conditions">
      <p>
        By continuing, you agree to the terms and
        conditions of the DEXTRO platform.
      </p>

      <p style={{ marginTop: "16px" }}>
        Please review all information carefully before
        confirming your action.
      </p>
    </ModalDemo>
  ),
};