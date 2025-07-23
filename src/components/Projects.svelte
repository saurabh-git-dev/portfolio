<script>
	import Link from './Link.svelte';
</script>

<div class="mx-auto max-w-4xl pt-4">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border-none bg-transparent p-0 text-neutral-900 shadow-none sm:border sm:bg-neutral-100 sm:p-4 sm:shadow-sm dark:text-neutral-200 dark:sm:bg-neutral-800 dark:sm:shadow-lg"
	>
		<h2 class="px-2 text-lg font-semibold sm:px-0" id="milestones">
			<a class="group flex items-center gap-2" href="#milestones">
				Milestones<Link />
			</a>
		</h2>
		<ul class="flex list-disc flex-wrap gap-4">
			<li
				class="flex flex-col-reverse gap-4 rounded-lg bg-neutral-100 p-4 shadow-sm sm:bg-neutral-200/40 sm:shadow-none md:flex-row dark:bg-neutral-800 dark:sm:bg-neutral-900"
				id="milestones-socialrivals"
			>
				<iframe
					width="420"
					height="210"
					src="https://www.youtube.com/embed/Iu4meQVTBg8"
					title="Projection Mapped Mini Golf Lanes | The Perfect Leisure &amp; Hospitality Activity | Social Rivals"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					class="h-72 w-full rounded-lg md:h-full"
					loading="lazy"
				></iframe>
				<div class="flex flex-col justify-start gap-2">
					<div class="flex justify-between">
						<h3 class="text-sm font-semibold">
							<a href="#milestones-socialrivals" class="group flex items-center gap-2"
								>Social Rivals Games
								<Link />
							</a>
						</h3>
						<a
							href="//socialrivals.co.uk"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-indigo-500 underline dark:text-indigo-300"
							>socialrivals.co.uk
						</a>
					</div>
					<h6 class="text-xs font-semibold text-indigo-500 dark:text-indigo-300">
						Working on multiple Tech Stacks (2024 - Still)
					</h6>
					<p class="text-justify text-xs">
						This is my recent project where I am working with Social Rivals to build a gaming
						platform where we are rebuilding classic games with modern technologies that provides a
						completely new experience to the users.
					</p>
				</div>
			</li>
			<li
				class="flex flex-col gap-4 rounded-lg bg-neutral-100 p-4 shadow-sm sm:bg-neutral-200/40 sm:shadow-none md:flex-row dark:bg-neutral-800 dark:sm:bg-neutral-900"
				id="milestones-8-bit-computer"
			>
				<div class="flex flex-col gap-2">
					<h3 class="text-sm font-semibold">
						<a href="#milestones-8-bit-computer" class="group flex items-center gap-2"
							>My 8 Bit Micro Computer Project
							<Link />
						</a>
					</h3>
					<h6 class="text-xs font-semibold text-indigo-500 dark:text-indigo-300">
						Fully Based on Logical Gate ICs, EEPROMs, RAM and a few other ICs (2021-2022)
					</h6>
					<p class="text-justify text-xs">
						I started this project to learn about computer architecture and how computers started
						working back in the day. This project is a simple 8-bit microcomputer that can run basic
						programs at this stage only (Addition, Subtraction). I planned to add more features like
						Logical operations, Multiplication, Division, and Interrupts handling in the future.
						Also planning to write a a <span
							class="font-semibold text-indigo-500 dark:text-indigo-300"
						>
							Assembler
						</span>
						for this computer to make it easier to write programs(Similar to
						<a
							href="https://en.wikipedia.org/wiki/Intel_8085"
							target="_blank"
							rel="noopener noreferrer"
							class="font-semibold text-indigo-500 underline dark:text-indigo-300">Intel 8085</a
						>
						and
						<a
							href="https://en.wikipedia.org/wiki/MOS_Technology_6502"
							target="_blank"
							rel="noopener noreferrer"
							class="font-semibold text-indigo-500 underline dark:text-indigo-300"
							>6502 Microprocessor</a
						>). Along with that, I also worked with 6502 Microprocessor and IO Modules to learn
						about how it works and how to write programs for it.
					</p>

					<div
						class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 shadow-sm dark:shadow-lg"
					>
						<p class="text-justify text-xs">
							Inspired by <a
								href="https://www.youtube.com/@BenEater"
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-indigo-500 underline dark:text-indigo-300">@Ben Eater</a
							> ❤️ and his amazing work on building a computer from scratch using logic gates and ICs.
							He has a great series on building an 8-bit computer, which was my primary source of inspiration
							for this project.
						</p>
					</div>

					<div
						class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 shadow-sm dark:shadow-lg"
					>
						<p class="text-justify text-xs">
							The project is incomplete. A lot of things that I had planned to do were not possible
							due to the lack of resources and time. But I am planning again to continue it in near
							future.
						</p>
					</div>
				</div>
				<img
					src="/images/micro_computer.webp"
					class="h-full w-full rounded-lg bg-gray-900 shadow-lg md:h-40 md:w-56"
					alt="8 Bit Micro Computer"
				/>
			</li>
			<li
				class="flex flex-col-reverse gap-4 rounded-lg bg-neutral-100 p-4 shadow-sm sm:bg-neutral-200/40 sm:shadow-none md:flex-row dark:bg-neutral-800 dark:sm:bg-neutral-900"
				id="milestones-tictaclap"
			>
				<video
					muted
					width="280"
					height="210"
					src="/videos/tictaclap.mp4"
					controls
					class="h-full w-full rounded-lg bg-gray-900 shadow-lg md:h-40 md:w-56"
				>
				</video>
				<div class="flex flex-col justify-start gap-2">
					<div class="flex justify-between">
						<h3 class="text-sm font-semibold">
							<a href="#milestones-tictaclap" class="group flex items-center gap-2"
								>TicTacLap
								<Link />
							</a>
						</h3>
					</div>
					<h6 class="text-xs font-semibold text-indigo-500 dark:text-indigo-300">
						TicTacLap - Physical Education Project (2022)
					</h6>
					<p class="text-justify text-xs">
						This project was a digital platform designed to support physical education (PE) teachers
						with tools for organizing and managing classes. It offers features like class creation,
						students import sheets, and a toolbox for everyday PE activities—such as team creation
						and live student views for various sports activities. This project is used only
						internally.
					</p>
				</div>
			</li>
			<li
				class="flex flex-col gap-4 rounded-lg bg-neutral-100 p-4 shadow-sm sm:bg-neutral-200/40 sm:shadow-none md:flex-row dark:bg-neutral-800 dark:sm:bg-neutral-900"
				id="milestones-puttabove"
			>
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<h3 class="text-sm font-semibold">
							<a href="#milestones-puttabove" class="group flex items-center gap-2"
								>Putt Above Mini Golf
								<Link />
							</a>
						</h3>
						<a
							href="//puttabove.co.uk"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-indigo-500 underline dark:text-indigo-300"
							>puttabove.co.uk
						</a>
					</div>
					<h6 class="text-xs font-semibold text-indigo-500 dark:text-indigo-300">
						My First(also Big) Paid Project in 2021 (Still working with them)
					</h6>
					<p class="text-justify text-xs">
						This project was a great opportunity for me to learn and grow as a developer. I was able
						to work on various aspects of the project, including game development, web development,
						networking, embedded devices. The code was initially not up to any standard (as I was
						still new to programming), but it was a valuable learning experience while working with
						a real client. They trusted my skills. So, I was able to learn and improve the codebase
						over time.
					</p>
				</div>
				<iframe
					width="420"
					height="210"
					src="https://www.youtube.com/embed/4EQJo7EHBqc?si=hlyI_61PKGSDsU7l"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					referrerpolicy="strict-origin-when-cross-origin"
					class="h-72 w-full rounded-lg md:h-full"
					loading="lazy"
				></iframe>
			</li>
			<li
				class="flex flex-col-reverse gap-4 rounded-lg bg-neutral-100 p-4 shadow-sm sm:bg-neutral-200/40 sm:shadow-none md:flex-row dark:bg-neutral-800 dark:sm:bg-neutral-900"
				id="milestones-library-management"
			>
				<video
					muted
					src="/videos/library_management.mp4"
					controls
					width="280"
					height="210"
					class="h-full w-full rounded-lg bg-gray-900 shadow-lg md:h-40 md:w-56"
				>
				</video>
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<h3 class="text-sm font-semibold">
							<a href="#milestones-library-management" class="group flex items-center gap-2"
								>Library Management System
								<Link />
							</a>
						</h3>
						<a
							href="https://github.com/saurabh-git-dev/C-library-management"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-indigo-500 underline dark:text-indigo-300"
							>Repository
						</a>
					</div>
					<h6 class="text-xs font-semibold text-indigo-500 dark:text-indigo-300">
						C Based CLI Application (2020)
					</h6>
					<p class="text-justify text-xs">
						This project was my first project when I started learning C programming. It is a CLI
						based application that allows users to manage a library system, including adding,
						removing, and searching for books, issuing, returning books. It uses custom data
						structures and file handling to store and retrieve data.
					</p>
				</div>
			</li>
		</ul>
	</div>
</div>
