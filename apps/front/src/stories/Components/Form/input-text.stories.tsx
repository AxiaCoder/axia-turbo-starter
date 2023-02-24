import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput as TextInputComponent } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Form/TextInput",
  component: TextInputComponent,
} as ComponentMeta<typeof TextInputComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInputComponent> = (args) => (
  <TextInputComponent {...args} />
);

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
  id: "text-input",
  label: "Text Input",
};

export const TextInputWithInformation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInputWithInformation.args = {
  id: "text-input",
  label: "Text Input",
  informations: "This is an information",
};
