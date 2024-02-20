import Heading from "../../utils/Heading/Heading";

export default {
    component: Heading,
    argTypes: {
        size: {
            control: 'select',
            options: ['xd', 'sm', 'md']
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'black']
        }
    }
}

export const HeadingOne ={
    args: {
        label: 'Heading 1',
        size: 'md',
        color: 'primary',
    }
};

export const HeadingTwo ={
    args: {
        label: 'Heading 2',
        size: 'sm',
        color: 'secondary',
    }
};

export const Text ={
    args: {
        label: 'Random text',
        size: 'xd',
        color: 'black',
    }
};


