<script>
	import Link from './Link.svelte';

	const languages = [
		{
			name: 'C',
			icon: '/images/clang.png',
			class: 'w-8'
		},
		{
			name: 'JavaScript',
			icon: '/images/javascript.png',
			class: 'w-8'
		},
		{
			name: 'TypeScript',
			icon: '/images/typescript.png',
			class: 'w-8'
		},
		{
			name: 'Python',
			icon: '/images/python.png',
			class: 'w-8'
		},
		{
			name: 'Go',
			icon: '/images/go.svg',
			class: 'w-20'
		}
	];

	const frameworks = [
		{
			name: 'Flask',
			icon: '/images/Flask.png',
			class: 'w-8 dark:invert'
		},
		{
			name: 'FastAPI',
			icon: '/images/FastAPI.png',
			class: 'w-8'
		},
		{
			name: 'Nest JS',
			icon: '/images/nestjs.png',
			class: 'w-8'
		},
		{
			name: 'Electron',
			icon: '/images/electron.png',
			class: 'w-8'
		},
		{
			name: 'React',
			icon: '/images/react.png',
			class: 'w-8'
		},
		{
			name: 'MySQL',
			icon: '/images/mysql.png',
			class: 'w-8'
		},
		{
			name: 'PostgreSQL',
			icon: '/images/postgres.png',
			class: 'w-8'
		},
		{
			name: 'Redis',
			icon: '/images/redis.png',
			class: 'w-8'
		},
		{
			name: 'MongoDB',
			icon: '/images/mongodb.png',
			class: 'w-8'
		}
	];

	const tools = [
		{
			name: 'Gstreamer',
			icon: '/images/gstreamer.svg',
			class: 'w-28'
		},
		{
			name: 'Docker',
			icon: '/images/docker.png',
			class: 'w-9'
		},
		{
			name: 'Git',
			icon: '/images/git.png',
			class: 'w-8'
		},
		{
			name: 'Nginx',
			icon: '/images/nginx.png',
			class: 'w-8'
		},
		{
			name: 'RabbitMQ',
			icon: '/images/rabbitmq.png',
			class: 'w-8'
		},
		{
			name: 'SocketIO',
			icon: '/images/socketio.png',
			class: 'w-8 invert dark:invert-0'
		},
		{
			name: 'AWS',
			icon: '/images/aws.png',
			class: 'w-8'
		},
		{
			name: 'Unity',
			icon: '/images/unity-white.png',
			class: 'w-7 invert dark:invert-0'
		},
		{
			name: 'Arduino',
			icon: '/images/arduino.png',
			class: 'w-11'
		}
	];

	const clouds = [
		{
			name: 'AWS',
			icon: '/images/aws.png',
			class: 'w-8'
		},
		{
			name: 'Azure',
			icon: '/images/azure.png',
			class: 'w-8'
		},
		{
			name: 'Digital Ocean',
			icon: '/images/digitalocean.png',
			class: 'w-8'
		},
		{
			name: 'Vercel',
			icon: '/images/vercel.png',
			class: 'w-8'
		},
		{
			name: 'Netlify',
			icon: '/images/netlify.png',
			class: 'w-8'
		}
	];
</script>

<div class="mx-auto max-w-4xl pt-4">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-lg"
	>
		<h2 class="text-lg font-semibold" id="languages">
			<a class="group flex items-center gap-2" href="#languages">
				Languages<Link />
			</a>
		</h2>
		<ul class="flex list-disc flex-wrap gap-4">
			{#each languages as lang (lang.name)}
				<li class="flex flex-col items-center gap-2" title={lang.name}>
					<img src={lang.icon} alt={lang.name} class={`inline ${lang.class}`} />
				</li>
			{/each}
		</ul>
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 shadow-sm dark:shadow-lg"
		>
			<p class="text-justify text-xs">
				Discovered
				<img src="/images/go.svg" alt="GoLang Logo" class="mb-1 inline w-8" /> a bit late, but absolutely
				enjoying ❤️ it — it's solving many of my problems and significantly speeding up processing. It
				allows me to write code for prototyping and for actual product and cross compiles easily to different
				OS native binaries, which is one of the advantages over Python and javascript.
			</p>
		</div>
	</div>
</div>

<div class="mx-auto max-w-4xl pt-4">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-lg"
	>
		<h2 class="text-lg font-semibold" id="frameworks">
			<a class="group flex items-center gap-2" href="#frameworks">
				Frameworks and Databases<Link />
			</a>
		</h2>
		<ul class="flex list-disc flex-wrap gap-4">
			{#each frameworks as framework (framework.name)}
				<li class="flex flex-col items-center gap-2" title={framework.name}>
					<img src={framework.icon} alt={framework.name} class={`inline ${framework.class}`} />
				</li>
			{/each}
		</ul>
	</div>
</div>

<div class="mx-auto max-w-4xl pt-4">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-lg"
	>
		<h2 class="text-lg font-semibold" id="tools">
			<a class="group flex items-center gap-2" href="#tools">
				Tools and Techs<Link />
			</a>
		</h2>
		<ul class="flex list-disc flex-wrap gap-4">
			{#each tools as tool (tool.name)}
				<li class="flex flex-col items-center gap-2" title={tool.name}>
					<img src={tool.icon} alt={tool.name} class={`inline ${tool.class}`} />
				</li>
			{/each}
		</ul>
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 shadow-sm dark:shadow-lg"
		>
			<p class="text-justify text-xs">
				Gstreamer is a powerful tool for handling multimedia processing, and I have been using it
				for processing videos streams, with custom <span
					class="font-semibold text-indigo-500 dark:text-indigo-300"
				>
					plugins and elements
				</span>
				in
				<span class="font-semibold text-indigo-500 dark:text-indigo-300"> C++ OpenCV </span> and
				performing
				<span class="font-semibold text-indigo-500 dark:text-indigo-300">AI inference</span> on the
				video streams using
				<a
					href="https://hailo.ai/products/ai-accelerators/hailo-8-m2-ai-acceleration-module/"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-indigo-500 underline underline-offset-1 dark:text-indigo-300"
				>
					Hailo Accelerators
				</a>.
			</p>
		</div>
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 shadow-sm dark:shadow-lg"
		>
			<p class="text-justify text-xs">
				Recently tried out <span class="font-semibold text-indigo-500 dark:text-indigo-300">
					OpenWRT
				</span>
				Firmware on
				<span class="font-semibold text-indigo-500 dark:text-indigo-300">Raspberrypi </span>, and it
				is absolutely amazing for managing my small networking needs. I am creating my custom
				firmware with some pre configured settings and pre installed softwares on
				<span class="font-semibold text-indigo-500 dark:text-indigo-300">Github Actions</span>. And
				also
				<a
					href="https://github.com/saurabh-git-dev/GX-Titatnium-2122A"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-indigo-500 underline dark:text-indigo-300"
					>enabled bridge mode</a
				>
				by bypassing the locked ISP router. Which gave me almost full control over the network.
			</p>
		</div>
	</div>
</div>

<div class="mx-auto max-w-4xl pt-4">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-lg"
	>
		<h2 class="text-lg font-semibold" id="cloud">
			<a class="group flex items-center gap-2" href="#cloud">
				Cloud<Link />
			</a>
		</h2>
		<ul class="flex list-disc flex-wrap gap-4">
			{#each clouds as cloud (cloud.name)}
				<li class="flex flex-col items-center gap-2" title={cloud.name}>
					<img src={cloud.icon} alt={cloud.name} class={`inline ${cloud.class}`} />
				</li>
			{/each}
		</ul>
		<div
			class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 shadow-sm dark:shadow-lg"
		>
			<p class="text-justify text-xs">
				From Last 2 years, AWS is my prefered cloud provider, if there are multiple things to
				deploy. I have been working with ECS, Lambda, S3, Cloudfront and other services and <span
					class="font-semibold text-indigo-500 dark:text-indigo-300"
				>
					Github Actions
				</span>
				for <span class="font-semibold text-indigo-500 dark:text-indigo-300">CI/CD</span> is my one stop
				solution. Waiting for ARM runners to try out for private projects.
			</p>
		</div>
	</div>
</div>
