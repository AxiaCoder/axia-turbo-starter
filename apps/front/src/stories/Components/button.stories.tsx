import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button as ButtonComponent } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  label: "Submit",
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  label: "Submit",
  classType: "success",
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  label: "Submit",
  classType: "danger",
};

export const ButtonWarning = Template.bind({});
ButtonWarning.args = {
  label: "Submit",
  classType: "warning",
};

export const ButtonInfo = Template.bind({});
ButtonInfo.args = {
  label: "Submit",
  classType: "info",
};

export const ButtonCustomClass = Template.bind({});
ButtonCustomClass.args = {
  label: "Submit",
  customClass: "custom-class",
};
