import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader as LoaderComponent } from "@axia/ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Loader",
  component: LoaderComponent,
} as ComponentMeta<typeof LoaderComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoaderComponent> = (args) => (
  <LoaderComponent {...args} />
);

export const Loader = Template.bind({});
