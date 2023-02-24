import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardComponent } from '@axia/ui';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />;

export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  title: 'Card Title',
  children: 'Card Content',
};
