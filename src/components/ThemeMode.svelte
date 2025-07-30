<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'dark' | 'light' | 'system';
	let theme: Theme = 'system';
	let isDark = false;

	const options: Theme[] = ['light', 'dark', 'system'];

	onMount(() => {
		// Safe to access document now
		const domTheme = document.documentElement.getAttribute('data-theme') as Theme;
		theme = domTheme || 'system';

		const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');
		isDark = theme === 'dark' || (theme === 'system' && systemMedia.matches);

		applyTheme(theme);

		const listener = (e: MediaQueryListEvent) => {
			const stored = localStorage.getItem('theme');
			if (!stored) {
				if (e.matches) document.documentElement.classList.add('dark');
				else document.documentElement.classList.remove('dark');
			}
		};

		systemMedia.addEventListener('change', listener);
		return () => systemMedia.removeEventListener('change', listener);
	});

	function applyTheme(t: Theme) {
		document.documentElement.classList.remove('dark');
		if (t !== 'system') localStorage.setItem('theme', t);
		else localStorage.removeItem('theme');

		theme = t;
		isDark =
			t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
		if (isDark) document.documentElement.classList.add('dark');
		document.documentElement.setAttribute('data-theme', theme);
	}

	function changeTheme() {
		const currentIndex = options.indexOf(theme);
		const nextIndex = (currentIndex + 1) % options.length;
		applyTheme(options[nextIndex]);
	}
</script>

<div class="relative">
	<button
		on:click={changeTheme}
		class="text relative inline-flex h-6 w-6 cursor-pointer justify-between rounded-full pt-1 font-medium text-neutral-700 sm:h-7 sm:w-7 dark:text-white"
		aria-label="Theme Mode Switch"
		aria-haspopup="true"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="group:hover:text-neutral-100 theme-icon theme-icon-dark absolute h-6 w-6 sm:h-7 sm:w-7"
		>
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="group:hover:text-neutral-100 theme-icon theme-icon-light absolute h-6 w-6 sm:h-7 sm:w-7"
		>
			<path
				fill-rule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				clip-rule="evenodd"
			/>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="theme-icon theme-icon-system absolute h-6 w-6 group-hover:text-neutral-100 sm:h-7 sm:w-7"
		>
			<rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect>
			<line x1="7" y1="17" x2="13" y2="17"></line>
			<line x1="10" y1="13" x2="10" y2="17"></line>
		</svg>
	</button>
</div>
