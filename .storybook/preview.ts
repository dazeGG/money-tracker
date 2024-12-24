import type { Preview } from '@storybook/vue3';

import '../src/assets/style/index.scss';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			values: [
				// 👇 Default values
				{ name: 'Light', value: '#fff' },
				{ name: 'Dark', value: '#242424' },
			],
			// 👇 Specify which background is shown by default
			default: 'Dark',
		},
	},
};

export default preview;
