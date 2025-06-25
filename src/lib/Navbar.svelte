<script>
	import {
		PUBLIC_GITHUB_USERNAME,
		PUBLIC_FIVERR_USERNAME,
		PUBLIC_LINKED_IN_USERNAME
	} from '$env/static/public';
</script>

<div class="mx-auto max-w-4xl">
	<nav
		class="flex flex-row items-center justify-between gap-6 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 shadow-lg"
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
			<a href="https://github.com/{PUBLIC_GITHUB_USERNAME}" target="_blank" rel="noopener noreferrer">
				<img src="/images/github-white.png" alt="GitHub Logo" class="inline h-6 w-6" />
			</a>
			<a href="https://linkedin.com/in/{PUBLIC_LINKED_IN_USERNAME}" target="_blank" rel="noopener noreferrer">
				<img src="/images/linkedIn.png" alt="LinkedIn Logo" class="inline h-6 w-6" />
			</a>
			<a href="https://fiverr.com/{PUBLIC_FIVERR_USERNAME}" target="_blank" rel="noopener noreferrer">
				<img src="/images/fiverr.png" alt="Fiverr Logo" class="inline h-7 w-7" />
			</a>
		</div>
	</nav>
</div>
