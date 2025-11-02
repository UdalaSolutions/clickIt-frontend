import { steps } from '../../utils/utils';

const HowToPlay = () => {
	return (
		<section
			className='	
				pt-40 pb-20 px-3 
				items-center justify-center flex-col howto-bg -mt-36 md:-mt-20 lg:-mt-28 xl:-mt-32
			'>
			<div className='text-center'>
				<h2 className='font-bold text-[24px] leading-8 sm:text-[32px] sm:leading-12'>
					How to Play
				</h2>
				<p className='max-w-3xl mx-auto mt-2 sm:mt-4'>
					The 4 easy steps to secure your spot in the click-it draw
				</p>
			</div>

			<div className='mt-6 w-full max-w-7xl mx-auto px-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5'>
					{steps.map((step) => (
						<article
							key={step.id}
							className={`flex flex-col bg-white rounded-xl p-4 text-left border-2 ${step.borderColor}`}
							aria-labelledby={`howto-step-${step.id}`}>
							<h1
								className={`${step.textColor} font-semibold text-6 leading-8 sm:text-[32px] sm:leading-12`}>
								{step.id}
							</h1>

							<h3
								id={`howto-step-${step.id}`}
								className='font-semibold text-lg leading-6.5 sm:text-2xl sm:leading-9 my-2'>
								{step.title}
							</h3>

							<p className='text-sm text-gray-700'>{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowToPlay;
