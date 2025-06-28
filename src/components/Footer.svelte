<script>
	import { PUBLIC_USER_EMAIL, PUBLIC_BLOG_URL, PUBLIC_GITHUB_USERNAME } from '$env/static/public';
</script>

<div class="mx-auto max-w-4xl pt-4" id="contact">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-lg"
	>
		<div class="flex flex-col items-center justify-center gap-2 text-sm font-semibold">
			<a
				href="#contact"
				class="group flex items-center gap-2 text-neutral-500 underline underline-offset-2 dark:text-neutral-400"
				>Contact
			</a>
			<p>
				<span class="text-indigo-500 dark:text-indigo-300">
					<a href="mailto:{PUBLIC_USER_EMAIL}">{PUBLIC_USER_EMAIL}</a>
				</span>
			</p>
		</div>
		<p class="text-center text-xs text-neutral-500 dark:text-neutral-400">
			Feel free to reach out to me for any queries, suggestions.
		</p>
		<p class="text-center text-xs text-neutral-500 dark:text-neutral-400">
			Visit my blog website
			<a
				href="//{PUBLIC_BLOG_URL}"
				target="_blank"
				rel="noopener noreferrer"
				class="font-semibold text-indigo-500 underline underline-offset-1 dark:text-indigo-300"
			>
				{PUBLIC_BLOG_URL}
			</a>.
		</p>
		<p class="text-xs text-neutral-400 italic">
			I don't prefer to disclose any more information about myself publicly. I believe value of work
			is more important. So will recommend you to check out my <a
				class="text-indigo-500 underline dark:text-indigo-300"
				href="https://github.com/{PUBLIC_GITHUB_USERNAME}"
				target="_blank"
				rel="noopener noreferrer"
			>
				Github
			</a>
			Profile. I am not active on other social media platforms, so for any queries or suggestions, please
			reach out to me via
			<span class="text-indigo-500 dark:text-indigo-300">
				<a href="mailto:{PUBLIC_USER_EMAIL}"> email </a>
			</span>.
		</p>
	</div>
</div>
