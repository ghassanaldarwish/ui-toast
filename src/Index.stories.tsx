import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@wds-ui/button";
import { ToastAction } from "./components/toast";
import { useToast } from "./components/use-toast";
import { Toaster } from "./components/toaster";

const meta: Meta<typeof ToastAction> = {
  component: ToastAction,
  title: "Marbella/ToastAction",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => {
  const { toast } = useToast();

  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </>
  );
};
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
