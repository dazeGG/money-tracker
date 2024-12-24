import X3Button from '@/X3UI/X3Button.vue';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof X3Button> = {
	title: 'X3UI/X3Button',
	component: X3Button,
	tags: ['autodocs'],
};

//👇 This default export determines where your story goes in the story list
export default meta;

type Story = StoryObj<typeof X3Button>;

export const Default: Story = {
	render: (args) => ({
		components: { X3Button },
		setup () {
			return { args };
		},
		template: '<X3Button v-bind="args">Button</X3Button>',
	}),
	args: {
		//👇 The args you need here will depend on your component
		type: 'default',
	},
};
