import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BackButton as BackButtonComponent } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/BackButton",
  component: BackButtonComponent,
} as ComponentMeta<typeof BackButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackButtonComponent> = (args) => (
  <BackButtonComponent {...args} />
);

export const BackButton = Template.bind({});
