<script lang="ts">
	import '../app.css';
	import {
		PUBLIC_SITE_URL,
		PUBLIC_GITHUB_USERNAME,
		PUBLIC_LINKED_IN_USERNAME,
		PUBLIC_FIVERR_USERNAME,
		PUBLIC_GOOGLE_ANALYTICS_ID
	} from '$env/static/public';
</script>

<svelte:head>
	<title>Saurabh 🚀 | A Tech Developer</title>
	<meta name="description" content="Welcome to Saurabh's portfolio!" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Open Graph -->
	<meta property="og:title" content="Saurabh 🚀 | A Tech Developer" />
	<meta property="og:description" content="Welcome to Saurabh's portfolio!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://{PUBLIC_SITE_URL}/" />
	<meta property="og:image" content="https://{PUBLIC_SITE_URL}/profile.png" />

	<!-- Author/Profiles -->
	<meta name="author" content="Saurabh 🚀" />
	<meta name="profile:username" content={PUBLIC_GITHUB_USERNAME} />
	<meta name="profile:github" content={PUBLIC_GITHUB_USERNAME} />
	<meta name="profile:linkedin" content={PUBLIC_LINKED_IN_USERNAME} />
	<meta name="profile:fiverr" content={PUBLIC_FIVERR_USERNAME} />

	<!-- Google Analytics -->
	{#if PUBLIC_GOOGLE_ANALYTICS_ID}
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GOOGLE_ANALYTICS_ID}"
			data-nscript="afterInteractive"
		></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			const id = `${PUBLIC_GOOGLE_ANALYTICS_ID}`;
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', id);
		</script>
	{/if}

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
