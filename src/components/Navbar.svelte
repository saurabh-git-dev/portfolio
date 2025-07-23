<script>
	import {
		PUBLIC_GITHUB_USERNAME,
		PUBLIC_FIVERR_USERNAME,
		PUBLIC_LINKED_IN_USERNAME
	} from '$env/static/public';

	import ThemeMode from './ThemeMode.svelte';
</script>

<div class="mx-auto max-w-4xl">
	<nav
		class="flex flex-row items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-3 shadow-sm sm:px-4 sm:py-2 dark:border-neutral-800 dark:bg-neutral-800 dark:shadow-lg"
	>
		<div class="flex flex-row items-center justify-start gap-2 sm:gap-6">
			<img
				src="/profile.png"
				aria-hidden="true"
				alt="Saurabh's Profile Picture"
				class="h-9 w-9 rounded-full shadow-lg sm:h-12 sm:w-12"
			/>
			<h1 class="text-center text-lg font-semibold sm:text-2xl">Saurabh 🚀</h1>
		</div>
		<div class="flex flex-row items-center justify-end gap-3 sm:gap-6">
			<a
				href="https://github.com/{PUBLIC_GITHUB_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
				class="invert dark:invert-0"
			>
				<img
					src="/images/github-white.png"
					alt="GitHub Logo"
					class="inline h-5 w-5 sm:h-6 sm:w-6"
				/>
			</a>
			<a
				href="https://linkedin.com/in/{PUBLIC_LINKED_IN_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/images/linkedIn.png" alt="LinkedIn Logo" class="inline h-5 w-5 sm:h-6 sm:w-6" />
			</a>
			<a
				href="https://fiverr.com/{PUBLIC_FIVERR_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/images/fiverr.png" alt="Fiverr Logo" class="inline h-6 w-6 sm:h-7 sm:w-7" />
			</a>
			<ThemeMode />
		</div>
	</nav>
</div>
