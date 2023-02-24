import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea as TextAreaComponent } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Form/TextArea",
  component: TextAreaComponent,
} as ComponentMeta<typeof TextAreaComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextAreaComponent> = (args) => (
  <TextAreaComponent {...args} />
);

export const TextArea = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextArea.args = {
  id: "textarea",
  label: "Text Area",
};

export const TextAreaWithInformation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextAreaWithInformation.args = {
  id: "textarea",
  label: "Text Area",
  informations: "This is an information",
};
