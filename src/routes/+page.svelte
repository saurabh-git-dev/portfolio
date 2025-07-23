<script>
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
	<Footer />
</div>
