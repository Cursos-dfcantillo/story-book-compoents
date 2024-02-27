import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'MyLabel',
    component: MyLabel,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
     },
     tags: ['autodocs'],
     argTypes:{
        size:{control: 'inline-radio'},
        fontColor:{control: 'color'},
     }
     
}satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
      label: 'Hola Como estas',
      size: "h1",
    },
  };

  export const AllCaps: Story = {
    args: {
      label: 'All Caps',
      size: "h1",
      allCaps:true
    },
  };

  export const Secondary: Story = {
    args: {
      label: 'Secondary Label',
      size: "h1",
      color: "text-secondary"
    },
  };

  
  export const CustomColor: Story = {
    args: {
      label: 'CustomColor Label',
      size: "h1",
      fontColor: "#5517ac"
    },
  };

    
  export const CustomBackgroundColor: Story = {
    args: {
      label: 'Custom background color',
      size: "h1",
      backgroundColor: "black"
    },
  };