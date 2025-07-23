<script lang="ts">
	import '../app.css';
	import {
		PUBLIC_SITE_URL,
		PUBLIC_GITHUB_USERNAME,
		PUBLIC_LINKED_IN_USERNAME,
		PUBLIC_FIVERR_USERNAME,
		PUBLIC_GOOGLE_ANALYTICS_ID
	} from '$env/static/public';
	import { onMount } from 'svelte';

	const gaId = PUBLIC_GOOGLE_ANALYTICS_ID;

	// Google Analytics
	onMount(() => {
		if (!gaId) return;

		// Load GA script
		const script1 = document.createElement('script');
		script1.setAttribute('async', '');
		script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		document.head.appendChild(script1);

		// Init GA
		const script2 = document.createElement('script');
		script2.innerHTML = `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${gaId}');
		`;
		document.head.appendChild(script2);
	});
</script>

<svelte:head>
	<title>Saurabh 🚀 | A Tech Engineer</title>
	<meta
		name="description"
		content="Explore Saurabh's portfolio! Passionate about Systems⚙️, Microcontrollers🕹️, IoT🌐, Web Apps🌍, Microservices🛠️, Cloud ☁️, and more. Discover projects and skills across modern technologies. 🔃"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Open Graph -->
	<meta property="og:title" content="Saurabh 🚀 | A Tech Engineer" />
	<meta
		property="og:description"
		content="Explore Saurabh's portfolio! Passionate about Systems⚙️, Microcontrollers🕹️, IoT🌐, Web Apps🌍, Microservices🛠️, Cloud ☁️, and more. Discover projects and skills across modern technologies. 🔃"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://{PUBLIC_SITE_URL}/" />
	<meta property="og:image" content="https://{PUBLIC_SITE_URL}/profile.png" />

	<!-- Author/Profiles -->
	<meta name="author" content="Saurabh 🚀" />
	<meta name="profile:username" content={PUBLIC_GITHUB_USERNAME} />
	<meta name="profile:github" content={PUBLIC_GITHUB_USERNAME} />
	<meta name="profile:linkedin" content={PUBLIC_LINKED_IN_USERNAME} />
	<meta name="profile:fiverr" content={PUBLIC_FIVERR_USERNAME} />

	<script>
		(function () {
			const stored = localStorage.getItem('theme');
			const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const isDark = stored === 'dark' || (!stored && system);
			if (isDark) {
				document.documentElement.classList.add('dark');
			}
		})();
	</script>
</svelte:head>

<slot />
