import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectField } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Form/Select",
  component: SelectField,
} as ComponentMeta<typeof SelectField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
);

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  id: "select",
  label: "Select",
  opts: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
};

export const SelectWithInformation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectWithInformation.args = {
  id: "select",
  label: "Select",
  opts: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
  informations: "This is an information",
};
