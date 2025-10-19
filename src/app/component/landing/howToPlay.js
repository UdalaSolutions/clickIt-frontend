import React from 'react';
import Image from 'next/image';

const steps = [
	{
		id: 1,
		title: 'Text the keyword',
		description:
			'Text the unique keyword to our short code to begin your journey to winning big with Click‑it.',
		image: '/mobile-device1.svg',
		alt: 'Mobile device showing keyword step',
	},
	{
		id: 2,
		title: 'Confirm your entry',
		description:
			'You’ll receive a confirmation message asking if you’d like to join the Click-It Draw.',
		image: '/mobile-device2.svg',
		alt: 'Mobile device showing confirmation',
	},
	{
		id: 3,
		title: 'Choose a plan',
		description:
			'Select and confirm your preferred subscription plan - It’s quick and secure.',
		image: '/mobile-device3.svg',
		alt: 'Mobile device showing receipt',
	},
	{
		id: 4,
		title: 'Wait for draw day',
		description:
			'Once confirmed, you’re instantly entered into our draws for a chance to win exciting cash prizes!',
		image: '/mobile-device4.svg',
		alt: 'Mobile device showing prize claim',
	},
];

const HowToPlay = () => {
	return (
		<section className='hidden md:flex bg-[#F2F2F2] py-14 px-3 items-center justify-center flex-col'>
			<div className='text-center'>
				<h2 className='font-bold text-[32px] leading-12'>How to Play</h2>
				<p className='max-w-3xl mx-auto mt-4'>
					The 4 easy steps to secure your spot in the click-it draw
				</p>
			</div>

			<div className='mt-6 w-full max-w-7xl px-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5'>
					{steps.map((step) => (
						<article
							key={step.id}
							className='flex flex-col  bg-white rounded-xl p-4 text-left'
							aria-labelledby={`howto-step-${step.id}`}>
							<div className='relative mb-4 flex items-center'>
								<Image
									src={step.image}
									alt={step.alt ?? step.title}
									width={0}
									height={0}
									className='w-full h-[420px]'
								/>
							</div>

							<h3
								id={`howto-step-${step.id}`}
								className='font-semibold text-2xl leading-9 my-2 text-left! '>
								{step.title}
							</h3>

							<p className='text-left text-sm text-gray-700'>
								{step.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowToPlay;
