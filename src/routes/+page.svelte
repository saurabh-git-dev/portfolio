<script>
	import { PUBLIC_GITHUB_USERNAME } from '$env/static/public';
	import Flag from '../components/Flag.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Projects from '../components/Projects.svelte';
	import TechStacks from '../components/TechStacks.svelte';
</script>

<div
	class="background min-h-screen bg-neutral-50 p-4 text-neutral-900 dark:bg-neutral-900 dark:text-white"
>
	<Navbar />
	<div class="mx-auto max-w-4xl pt-4">
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-lg"
		>
			<p class="text-justify text-sm">
				Hi there! I'm <span class="font-semibold text-indigo-500 dark:text-indigo-300">Saurabh</span
				>, a full stack developer based in
				<span class="font-semibold text-indigo-500 dark:text-indigo-300">
					<Flag /> India
				</span>. In addition to full-stack development, I also have a certain level of knowledge and
				skills in other different technologies and fields.
			</p>
			<p class="text-justify text-sm">
				I graduated with a Bachelor's degree in
				<span class="font-semibold text-indigo-500 dark:text-indigo-300">
					Electronics and Communication Engineering (2023)
				</span>.
			</p>
			<p class="text-justify text-sm">
				Currently working 💼 on integrating Tools, APIs, Embedded devices, and Networking. Learning
				🌱 Unity and gradually diving deeper into Machine Learning<span
					class="after:animate-blink relative ml-2 after:absolute after:left-full after:content-['|']"
				></span>
			</p>
		</div>
	</div>
	<Projects />
	<TechStacks />

	<div class="mx-auto max-w-4xl pt-4">
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-amber-500/75 bg-amber-500/5 p-2 text-neutral-500 shadow-sm dark:text-neutral-400 dark:shadow-lg"
		>
			<p class="text-justify text-xs">
				The website is made in Svelte and publicly available here <a
					class="text-indigo-500/75 underline dark:text-indigo-300/75"
					href="https://github.com/{PUBLIC_GITHUB_USERNAME}/portfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					{PUBLIC_GITHUB_USERNAME}/portfolio
				</a>. Tried Svelte and Bun for the first time, so there might be some issues. If you find
				any, please open an issue on my
				<a
					class="text-indigo-500/75 underline dark:text-indigo-300/75"
					href="https://github.com/{PUBLIC_GITHUB_USERNAME}/portfolio/issues"
					target="_blank"
					rel="noopener noreferrer"
				>
					{PUBLIC_GITHUB_USERNAME}/portfolio/issues
				</a>.
			</p>
		</div>
	</div>
	<Footer />
</div>
