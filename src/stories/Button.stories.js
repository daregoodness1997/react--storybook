import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = args => <Button {...args} />;
// export const Red = () => <Button label='Press Me' backgroundColor='red' />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
  color: 'white',
};

export const Green = Template.bind({});

Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
  color: 'white',
};

export const Small = Template.bind({});

Small.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'sm',
  color: 'white',
};

export const Large = Template.bind({});

Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg',
  color: 'white',
};

export const LongLabel = Template.bind({});

LongLabel.args = {
  backgroundColor: 'red',
  label: 'Press Me Oppoooooorrrrrrrrrrrrrrrrr!!!',
  size: 'lg',
  color: 'white',
};
