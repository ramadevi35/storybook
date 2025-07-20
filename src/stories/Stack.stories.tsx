import type { Meta, StoryObj } from "@storybook/react";  
import type { ComponentProps } from "react";
import  Stack from "../components/Stack";


type StoryProps=ComponentProps<typeof Stack>&{
    numberOfChildren: number;
}

const meta:Meta<StoryProps>={
    component: Stack,
    tags: ['autodocs'],
    argTypes:{
        numberOfChildren:{
            options: [1,5,10,15],
            control: {
                type: 'select',
            },

        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select',
            },
        },
    },
    args:{
        numberOfChildren: 5,
    }
    
};

export default meta;

type Story=StoryObj<StoryProps>;

export const Horizontal: Story = {
    args: {
        orientation: "horizontal",
    },
    render: ({numberOfChildren,...args}) => {
        return (
            <Stack {...args}>
                {createchildren(numberOfChildren)}
            </Stack>
        );
    }
    
}
export const Vartical: Story = {
    args: {
        orientation: "vertical",
    },
    render: ({numberOfChildren,...args}) => {
        return (
            <Stack {...args}>
                {createchildren(numberOfChildren)}
            </Stack>
        );
    }
    
}


function createchildren(numberOfChildren: number) {
    return Array(numberOfChildren).fill(null).map((_, index) => {
        return <div key={index} style={{width:100,height:100,backgroundColor:"green"}}></div>;
    })
}