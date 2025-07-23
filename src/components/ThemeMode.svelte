<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'dark' | 'light' | 'system';

	let isDark = false;
	let open = false;
	const options: Theme[] = ['light', 'dark', 'system'];

	let theme: Theme = 'system';

	onMount(() => {
		const stored = localStorage.getItem('theme');
		applyTheme(stored ? (stored as Theme) : theme);

		// Fix: Add matchMedia listener inside onMount
		const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');
		const listener = (e: MediaQueryListEvent) => {
			const stored = localStorage.getItem('theme');
			if (!stored) {
				if (e.matches) document.documentElement.classList.add('dark');
				else document.documentElement.classList.remove('dark');
			}
		};
		systemMedia.addEventListener('change', listener);

		return () => {
			systemMedia.removeEventListener('change', listener); // clean up
		};
	});

	const applyTheme = (t: Theme) => {
		document.documentElement.classList.remove('dark');
		if (t !== 'system') localStorage.setItem('theme', t);
		else localStorage.removeItem('theme');

		theme = t;
		isDark =
			t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
		if (isDark) document.documentElement.classList.add('dark');
	};
</script>

<div class="relative">
	<button
		on:click={() => (open = !open)}
		class="text relative inline-flex h-6 w-6 cursor-pointer justify-between rounded-full pt-1 font-medium text-neutral-700 sm:h-7 sm:w-7 dark:text-white"
		aria-label="Theme Mode"
		aria-haspopup="true"
		aria-expanded={open ? 'true' : 'false'}
	>
		{#if theme === 'dark'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="group:hover:text-neutral-100 h-6 w-6 sm:h-7 sm:w-7"
			>
				<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
			</svg>
		{:else if theme === 'light'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="group:hover:text-neutral-100 h-6 w-6 sm:h-7 sm:w-7"
			>
				<path
					fill-rule="evenodd"
					d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
					clip-rule="evenodd"
				/>
			</svg>
		{:else if theme === 'system'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6 group-hover:text-neutral-100 sm:h-7 sm:w-7"
			>
				<rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect>
				<line x1="7" y1="17" x2="13" y2="17"></line>
				<line x1="10" y1="13" x2="10" y2="17"></line>
			</svg>
		{/if}
	</button>

	{#if open}
		<ul
			class="absolute z-10 mt-2 w-32 origin-top-right -translate-x-24 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
		>
			{#each options as option (option)}
				<li>
					<button
						class={'flex w-full cursor-pointer gap-2 px-4 py-2 text-left text-sm capitalize hover:bg-gray-100 dark:hover:bg-neutral-700' +
							(option === theme
								? ' text-indigo-500 dark:text-indigo-400'
								: ' text-neutral-700 dark:text-neutral-100')}
						on:click={() => {
							applyTheme(option);
							open = false;
						}}
						aria-label="Select {option} theme"
						role="menuitem"
					>
						{#if option === 'system'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="group:hover:text-gray-100 h-5 w-5"
								><rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect><line
									x1="7"
									y1="17"
									x2="13"
									y2="17"
								></line><line x1="10" y1="13" x2="10" y2="17"></line></svg
							>
						{:else if option === 'light'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="group:hover:text-neutral-100 h-5 w-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
									clip-rule="evenodd"
								/>
							</svg>
						{:else if option === 'dark'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="group:hover:text-neutral-100 h-5 w-5"
							>
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							</svg>
						{/if}
						{option}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
