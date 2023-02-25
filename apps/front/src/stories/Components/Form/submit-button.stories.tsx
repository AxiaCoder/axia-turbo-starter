import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormSubmit } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Form/SubmitButton",
  component: FormSubmit,
} as ComponentMeta<typeof FormSubmit>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSubmit> = (args) => (
  <FormSubmit {...args} />
);

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  label: "Submit",
};

export const SubmitButtonSuccess = Template.bind({});
SubmitButtonSuccess.args = {
  label: "Submit",
  type: "success",
};

export const SubmitButtonDanger = Template.bind({});
SubmitButtonDanger.args = {
  label: "Submit",
  type: "danger",
};
