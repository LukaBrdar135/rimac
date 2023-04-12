import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Page from "../components/Page/Page";

export default {
  title: "Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Jeste Page",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tenetur possimus eligendi laborum facere assumenda et nihil mollitia, consequatur ipsum?",
  buttonText: "Bice",
};
