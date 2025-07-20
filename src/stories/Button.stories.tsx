import { Button } from "../components/Button";
import type { Meta, StoryObj } from "@storybook/react";  
import { action } from 'storybook/actions';
import type { ComponentProps } from "react";


type StoryProps=ComponentProps<typeof Button>&{
    buttonText: string;
}

const meta:Meta<StoryProps>={
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        onClick: action('on-click'),
    },
};

export default meta;

type Story=StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        buttonText:"Hello!",
        variant: "primary",
        size: "medium",
    },
    render: ({buttonText,...args}) =>{
        return <Button {...args}>{buttonText}</Button>
    } 
}
export const secondary: Story = {
    args: {
        buttonText:" Hello World!",
        variant: "secondary",
        size: "medium",
    },
    render: ({buttonText,...args}) =>{
        return <Button {...args}>{buttonText}</Button>
    } 
}