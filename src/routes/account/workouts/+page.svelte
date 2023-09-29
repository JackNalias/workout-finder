<script>
	const articles = [
		{
			title: 'The Ultimate Full-Body Workout',
			author: 'John Fitness',
			date: '2023-01-15',
			excerpt: 'Achieve total body fitness with this comprehensive workout plan.'
		},
		{
			title: 'Mastering the Deadlift: Tips and Techniques',
			author: 'Sarah Strong',
			date: '2022-11-05',
			excerpt: 'Learn the secrets to perfecting your deadlift form.'
		},
		{
			title: '3. Cardio vs. Strength Training: Which is Better?',
			author: 'James Fitwell',
			date: '2023-03-20',
			excerpt: 'Discover the pros and cons of cardio and strength workouts.'
		},
		{
			title: '4. Building Bigger Arms: The Arm Blaster Workout',
			author: 'Emily Muscles',
			date: '2022-09-10',
			excerpt: 'Get ready to sculpt those biceps and triceps with this intense routine.'
		},
		{
			title: '5. The Science of Rest: Recovery for Optimal Gains',
			author: 'Dr. Fitness PhD',
			date: '2023-04-02',
			excerpt: 'Understand the importance of rest in your fitness journey.'
		},
		{
			title: '6. HIIT Workouts: Burn Fat in 15 Minutes',
			author: 'Alex Sprinter',
			date: '2022-12-18',
			excerpt: 'High-Intensity Interval Training for quick and efficient fat loss.'
		},
		{
			title: '7. Yoga for Strength: Balancing Mind and Muscle',
			author: 'Mia Zen',
			date: '2023-02-14',
			excerpt: 'Explore how yoga can complement your strength training routine.'
		},
		{
			title: '8. Nutrition Essentials: Fueling Your Gym Success',
			author: 'Nutrition Guru',
			date: '2022-10-25',
			excerpt: 'Learn the dietary foundations for peak performance.'
		},
		{
			title: '9. The Power of Bodyweight Exercises',
			author: 'Calisthenics King',
			date: '2023-05-08',
			excerpt: 'Discover the versatility and effectiveness of bodyweight workouts.'
		},
		{
			title: "10. The Beginner's Guide to Weightlifting",
			author: 'Lifting Newbie',
			date: '2022-11-30',
			excerpt: 'Start your weightlifting journey with confidence.'
		},
		{
			title: '31. The Science of Muscle Hypertrophy',
			author: 'Muscle Scientist',
			date: '2023-08-10',
			excerpt:
				'Discover the intricate mechanisms behind muscle growth and how to apply them to your training. This in-depth article explores the science of muscle hypertrophy, from cellular processes to training principles, helping you optimize your workouts for maximum gains.'
		},
		{
			title: '32. The Art of Injury Prevention in CrossFit',
			author: 'CrossFit Pro',
			date: '2022-12-22',
			excerpt:
				"CrossFit is intense, but it shouldn't be dangerous. Learn the key strategies and techniques for preventing common injuries in CrossFit. With proper preparation and form, you can enjoy this challenging workout regimen safely and effectively."
		},
		{
			title: '33. Beyond Six-Pack Abs: Core Strength for Life',
			author: 'Core Fitness Expert',
			date: '2023-02-28',
			excerpt:
				"Core strength isn't just about aesthetics. It's about stability, balance, and injury prevention. This comprehensive guide goes beyond six-pack abs to delve into the importance of a strong core and provides a range of exercises to develop it."
		},
		{
			title: '34. The Mental Game of Endurance Running',
			author: 'Endurance Runner',
			date: '2022-10-01',
			excerpt:
				"Running long distances requires mental toughness. Explore the psychological challenges of endurance running and learn strategies to overcome them. Whether you're training for a marathon or an ultra, your mental game matters."
		},
		{
			title: "35. Flexibility Training: Unlock Your Body's Potential",
			author: 'Flexibility Guru',
			date: '2023-05-15',
			excerpt:
				"Flexibility is a crucial component of overall fitness. Discover the benefits of flexibility training, from improved mobility to injury prevention. This article offers a variety of stretches and routines to help you unlock your body's potential."
		},
		{
			title: '36. The Role of Supplements in Bodybuilding',
			author: 'Supplement Expert',
			date: '2022-11-12',
			excerpt:
				"Supplements can enhance your bodybuilding journey, but they're not magic pills. Gain insight into the role of supplements in bodybuilding, including protein, creatine, and more. Learn how to use them wisely to support your muscle-building goals."
		},
		{
			title: '37. Yoga and Mindfulness: A Holistic Approach to Fitness',
			author: 'Yogi Wellness',
			date: '2023-03-15',
			excerpt:
				"Yoga isn't just about physical postures; it's a path to mindfulness and holistic well-being. Explore how yoga and mindfulness practices can complement your fitness routine. Discover the mental and emotional benefits of this ancient practice."
		},
		{
			title: '38. Nutrition Periodization: Fueling for Peak Performance',
			author: 'Nutrition Strategist',
			date: '2022-09-20',
			excerpt:
				"Nutrition isn't one-size-fits-all. Learn about nutrition periodization, a strategy that tailors your diet to your training cycles. Whether you're bulking, cutting, or maintaining, you'll discover how to optimize your nutrition for peak performance."
		},
		{
			title: '39. Building Explosive Power with Plyometric Training',
			author: 'Plyometrics Coach',
			date: '2023-01-05',
			excerpt:
				'Plyometric training can take your athleticism to the next level. Explore the science and techniques behind plyometrics, and learn how to incorporate explosive exercises into your workouts for increased power and agility.'
		},
		{
			title: '40. The Importance of Cross-Training for All Athletes',
			author: 'Cross-Trainer',
			date: '2022-11-10',
			excerpt:
				"Don't limit yourself to a single sport or exercise. Discover the benefits of cross-training for athletes of all levels and disciplines. Cross-training improves performance, prevents burnout, and reduces the risk of overuse injuries."
		}
		// Add more articles as needed
	];
</script>

<div class="flex items-center justify-between mb-10 pt-12">
	<div class="min-w-0 flex-1">
		<h2
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
		>
			My Workouts
		</h2>
	</div>
	<div class="flex ml-4 mt-0">
		<a
			href="/account/workouts/post-a-workout"
			class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Post a Workout</a
		>
	</div>
</div>

<div class="">
	<div class="">
		<div class="mt-2 flex rounded-md shadow-sm">
			<div class="relative flex flex-grow items-stretch focus-within:z-10">
				<input
					type="email"
					name="email"
					id="email"
					class="block w-full rounded-none rounded-l-md border-0 py-3 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl"
					placeholder="Search"
				/>
			</div>
			<button
				type="button"
				class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			>
				Search
			</button>
		</div>
	</div>
	<ul role="list" class="mx-auto divide-y divide-gray-100 mt-1">
		{#each articles as article}
			<li class="relative py-5 hover:bg-gray-50">
				<div class="">
					<div class=" flex justify-between gap-x-6">
						<div class="flex min-w-0 gap-x-4">
							<div class="min-w-0 flex-auto">
								<p class="text-lg font-semibold leading-6 text-gray-900">
									<span class="absolute inset-x-0 -top-px bottom-0" />
									{article.title}
								</p>
								<p class="mt-1 flex text-md leading-5 text-gray-500">
									<span class="relative">{article.excerpt}</span>
								</p>
								<div class="flex gap-4 mt-2">
									<div class="flex gap-1 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											fill="#000000"
											version="1.1"
											id="Layer_1"
											width="800px"
											height="800px"
											viewBox="0 0 8 8"
											enable-background="new 0 0 8 8"
											xml:space="preserve"
											class="w-3.5 h-3.5 fill-green-700"
										>
											<rect
												x="0.016"
												y="1.68"
												transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
												width="5.283"
												height="1.466"
											/>
											<rect x="3.161" y="1.604" width="1.683" height="6.375" />
											<rect
												x="2.709"
												y="1.674"
												transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
												width="5.284"
												height="1.465"
											/>
										</svg>
										<div class="text-sm font-semibold">10k</div>
									</div>
									<div class="flex gap-1 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											fill="#000000"
											version="1.1"
											id="Layer_1"
											width="800px"
											height="800px"
											viewBox="0 0 8 8"
											enable-background="new 0 0 8 8"
											xml:space="preserve"
											class="w-3.5 h-3.5 fill-red-700 rotate-180"
										>
											<rect
												x="0.016"
												y="1.68"
												transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 6.2428 2.2389)"
												width="5.283"
												height="1.466"
											/>
											<rect x="3.161" y="1.604" width="1.683" height="6.375" />
											<rect
												x="2.709"
												y="1.674"
												transform="matrix(0.7073 0.7069 -0.7069 0.7073 3.2674 -3.0786)"
												width="5.284"
												height="1.465"
											/>
										</svg>
										<div class="text-sm font-semibold">10k</div>
									</div>
									<div class="flex gap-1 items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											width="800px"
											height="800px"
											viewBox="0 0 32 32"
											version="1.1"
											class="w-3.5 h-3.5"
										>
											<g
												id="Page-1"
												stroke="black"
												stroke-width="2"
												fill="none"
												fill-rule="evenodd"
											>
												<g
													id="Icon-Set"
													transform="translate(-360.000000, -255.000000)"
													fill="#000000"
												>
													<path
														d="M390,277 C390,278.463 388.473,280 387,280 L379,280 L376,284 L373,280 L365,280 C363.527,280 362,278.463 362,277 L362,260 C362,258.537 363.527,257 365,257 L387,257 C388.473,257 390,258.537 390,260 L390,277 L390,277 Z M386.667,255 L365.333,255 C362.388,255 360,257.371 360,260.297 L360,277.187 C360,280.111 362.055,282 365,282 L371.639,282 L376,287.001 L380.361,282 L387,282 C389.945,282 392,280.111 392,277.187 L392,260.297 C392,257.371 389.612,255 386.667,255 L386.667,255 Z"
														id="comment-5"
													/>
												</g>
											</g>
										</svg>
										<div class="text-sm font-semibold">10k</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex shrink-0 items-center gap-x-4 z-10">
							<div class="flex md:flex-row flex-col gap-4">
								<button
									type="button"
									class="rounded w-full bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>Edit</button
								>
								<button
									type="button"
									class="rounded bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>View</button
								>
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
