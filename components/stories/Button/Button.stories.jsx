import Button from '../../Button/Button';

export default {
  component: Button,
  parameters: {
    //layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
  backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    label: 'Button',
    primary: true,
    size: 'medium'
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    primary: false,
    size: 'medium'
  },
};

