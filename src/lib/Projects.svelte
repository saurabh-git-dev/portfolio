<script>
	import Link from './Link.svelte';
</script>

<div class="mx-auto max-w-4xl pt-4">
	<div
		class="flex flex-col justify-center gap-4 rounded-lg border border-neutral-800 bg-neutral-800 p-4 text-neutral-200 shadow-lg"
	>
		<h2 class="text-lg font-semibold" id="milestones">
			<a class="group flex items-center gap-2" href="#milestones">
				Milestones<Link />
			</a>
		</h2>
		<ul class="flex list-disc flex-wrap gap-4">
			<li
				class="flex flex-col-reverse gap-4 rounded-lg bg-neutral-900 p-4 md:flex-row"
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
							class="text-xs text-indigo-300 underline"
							>socialrivals.co.uk
						</a>
					</div>
					<h6 class="text-xs font-semibold text-indigo-300">
						Working on multiple Tech Stacks (2024 - Still Ongoing)
					</h6>
					<p class="text-justify text-xs text-neutral-300">
						This is my recent project where I am working with Social Rivals to build a gaming
						platform where we are rebuilding classic games with modern technologies that provides a
						completely new experience to the users.
					</p>
				</div>
			</li>
			<li
				class="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4 md:flex-row"
				id="milestones-8-bit-computer"
			>
				<div class="flex flex-col gap-2">
					<h3 class="text-sm font-semibold">
						<a href="#milestones-8-bit-computer" class="group flex items-center gap-2"
							>My 8 Bit Micro Computer Project
							<Link />
						</a>
					</h3>
					<h6 class="text-xs font-semibold text-indigo-300">
						Fully Based on Logical Gate ICs, EEPROMs, RAM and a few other ICs (2021-2022)
					</h6>
					<p class="text-justify text-xs text-neutral-300">
						I started this project to learn about computer architecture and how computers started
						working back in the day. This project is a simple 8-bit microcomputer that can run basic
						programs at this stage only (Addition, Subtraction). I planned to add more features like
						Logical operations, Multiplication, Division, and Interrupts handling in the future.
						Also planning to write a a <span class="font-semibold text-indigo-300">
							Assembler
						</span>
						for this computer to make it easier to write programs(Similar to
						<a
							href="https://en.wikipedia.org/wiki/Intel_8085"
							target="_blank"
							rel="noopener noreferrer"
							class="font-semibold text-indigo-300 underline">Intel 8085</a
						>
						and
						<a
							href="https://en.wikipedia.org/wiki/MOS_Technology_6502"
							target="_blank"
							rel="noopener noreferrer"
							class="font-semibold text-indigo-300 underline">6502 Microprocessor</a
						>).
					</p>

					<div
						class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 text-neutral-200 shadow-lg"
					>
						<p class="text-justify text-xs">
							Inspired by <a
								href="https://www.youtube.com/@BenEater"
								target="_blank"
								rel="noopener noreferrer"
								class="font-semibold text-indigo-300 underline">@Ben Eater</a
							> ❤️ and his amazing work on building a computer from scratch using logic gates and ICs.
							He has a great series on building an 8-bit computer, which was my primary source of inspiration
							for this project.
						</p>
					</div>

					<div
						class="flex flex-col justify-center gap-4 rounded-lg border border-l-6 border-indigo-500 bg-indigo-500/5 p-2 text-neutral-200 shadow-lg"
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
				class="flex flex-col-reverse gap-4 rounded-lg bg-neutral-900 p-4 md:flex-row"
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
						<a
							href="//tictaclap.com"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-indigo-300 underline"
							>tictaclap.com
						</a>
					</div>
					<h6 class="text-xs font-semibold text-indigo-300">
						TicTacLap - Physical Education Project (2022)
					</h6>
					<p class="text-justify text-xs text-neutral-300">
						This project was a digital platform designed to support physical education (PE) teachers
						with tools for organizing and managing classes. It offers features like class creation,
						students import sheets, and a toolbox for everyday PE activities—such as team creation
						and live student views for various sports activities.
					</p>
				</div>
			</li>
			<li
				class="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4 md:flex-row"
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
							class="text-xs text-indigo-300 underline"
							>puttabove.co.uk
						</a>
					</div>
					<h6 class="text-xs font-semibold text-indigo-300">
						My First(also Big) Paid Project in 2021 (Still work with them)
					</h6>
					<p class="text-justify text-xs text-neutral-300">
						This project was a great opportunity for me to learn and grow as a developer. I was able
						to work on various aspects of the project, including front-end development, back-end
						integration, and multiple networking protocols. This was not polished to perfection (as
						I was still new to programming), but it was a valuable learning experience while working
						with a real client. They showed trust in my skills. So, I was able to learn and
						implement real-world solutions.
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
				class="flex flex-col-reverse gap-4 rounded-lg bg-neutral-900 p-4 md:flex-row"
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
					<h3 class="text-sm font-semibold">
						<a href="#milestones-library-management" class="group flex items-center gap-2"
							>Library Management System
							<Link />
						</a>
					</h3>
					<h6 class="text-xs font-semibold text-indigo-300">C Based CLI Application (2020)</h6>
					<p class="text-justify text-xs text-neutral-300">
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
