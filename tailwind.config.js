module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				blink: {
					'0%, 50%': { opacity: '1' },
					'50.01%, 100%': { opacity: '0' }
				}
			},
			animation: {
				blink: 'blink 1s steps(1, start) infinite'
			}
		}
	}
};
