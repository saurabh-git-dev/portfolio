<script>
	import { PUBLIC_GITHUB_USERNAME } from '$env/static/public';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Projects from '$lib/Projects.svelte';
	import TechStacks from '$lib/TechStacks.svelte';
</script>

<div class="min-h-screen bg-neutral-900 p-4 text-white">
	<Navbar />
	<div class="mx-auto max-w-4xl pt-4">
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-800 bg-neutral-800 p-4 text-neutral-200 shadow-lg"
		>
			<p class="text-justify text-sm">
				Hi there! I'm <span class="font-semibold text-indigo-300">Saurabh</span>, a full stack
				developer but also have skills in different fields and technologies. I graduated with a
				Bachelor's degree in
				<span class="font-semibold text-indigo-300">
					Electronics and Communication Engineering (2023)
				</span>.
			</p>
			<p class="text-justify text-sm">
				Currently working 💼 on integrating Tools, APIs, Embedded devices, and Networking. Learning
				🌱 Unity and gradually diving deeper into Machine Learning<span
					class="after:animate-blink relative after:absolute after:left-full after:content-['|']"
				></span>
			</p>
		</div>
	</div>
	<Projects />
	<TechStacks />

	<div class="mx-auto max-w-4xl pt-4">
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-amber-500/75 bg-amber-500/5 p-2 text-neutral-400 shadow-lg"
		>
			<p class="text-justify text-xs">
				The website is made in Svelte and publicly available here <a
					class="text-indigo-300/75 underline"
					href="https://github.com/{PUBLIC_GITHUB_USERNAME}/portfolio/issues"
					target="_blank"
				>
					{PUBLIC_GITHUB_USERNAME}/portfolio
				</a>. Tried Svelte and Bun for the first time, so there might be some issues. If you find
				any, please open an issue on my
				<a
					class="text-indigo-300/75 underline"
					href="https://github.com/{PUBLIC_GITHUB_USERNAME}/portfolio/issues"
					target="_blank"
				>
					{PUBLIC_GITHUB_USERNAME}/portfolio/issues
				</a>.
			</p>
		</div>
	</div>
	<Footer />
</div>