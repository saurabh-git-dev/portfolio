<script>
	import {
		PUBLIC_GITHUB_USERNAME,
		PUBLIC_FIVERR_USERNAME,
		PUBLIC_LINKED_IN_USERNAME
	} from '$env/static/public';

	import { onMount } from 'svelte';

	let isDark = false;

	// Load preference
	onMount(() => {
		const stored = localStorage.getItem('theme');
		const system = window.matchMedia('(prefers-color-scheme: dark)').matches;

		isDark = stored === 'dark' || (!stored && system);
		setHtmlClass();
	});

	function toggleTheme() {
		isDark = !isDark;
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		setHtmlClass();
	}

	function setHtmlClass() {
		const root = document.documentElement;
		root.classList.toggle('dark', isDark);
	}
</script>

<div class="mx-auto max-w-4xl">
	<nav
		class="flex flex-row items-center justify-between gap-6 rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:shadow-lg"
	>
		<div class="flex flex-row items-center justify-start gap-2 sm:gap-6">
			<img
				src="/profile.png"
				aria-hidden="true"
				alt="Saurabh's Profile Picture"
				class="h-10 w-10 rounded-full shadow-lg sm:h-12 sm:w-12"
			/>
			<h1 class="text-center text-xl font-semibold sm:text-2xl">Saurabh 🚀</h1>
		</div>
		<div class="flex flex-row items-center justify-end gap-2 sm:gap-6">
			<a
				href="https://github.com/{PUBLIC_GITHUB_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
				class="invert dark:invert-0"
			>
				<img src="/images/github-white.png" alt="GitHub Logo" class="inline h-6 w-6" />
			</a>
			<a
				href="https://linkedin.com/in/{PUBLIC_LINKED_IN_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/images/linkedIn.png" alt="LinkedIn Logo" class="inline h-6 w-6" />
			</a>
			<a
				href="https://fiverr.com/{PUBLIC_FIVERR_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/images/fiverr.png" alt="Fiverr Logo" class="inline h-7 w-7" />
			</a>
			<button
				on:click={toggleTheme}
				id="theme-toggle"
				class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-300 transition-colors dark:bg-neutral-900"
			>
				{#if isDark}
					🌞
				{:else}
					<span class="rotate-[30deg]"> 🌛 </span>
				{/if}
			</button>
		</div>
	</nav>
</div>
