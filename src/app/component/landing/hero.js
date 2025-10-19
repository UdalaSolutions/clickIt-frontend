import Image from 'next/image';

const Hero = () => {
	return (
		<section className='mt-32 sm:mt-38 flex flex-col items-center justify-center text-center px-3.5 md:px-0'>
			<div className='flex items-center flex-col gap-4 max-w-full md:max-w-2xl mx-auto'>
				<div className='py-2 px-4 flex items-center gap-2 border border-primaryYellow text-[#ef9206] rounded-full text-xs/4.5 sm:text-sm/5 max-w-max'>
					<Image
						src='/icon/star.svg'
						alt='rocket icon'
						width={20}
						height={20}
						className='w-4.5 h-4.5 sm:w-5 sm:h-5'
					/>
					100% transparent draws
				</div>
				<div className='flex flex-col gap-3'>
					<h1 className='font-bold text-[30px] sm:text-4xl md:text-[40px] leading-11.5 md:leading-15 text-center'>
						Turn your airtime into a chance to win amazing cash prizes{' '}
					</h1>
					<p className='text-sm sm:text-lg leading-5 sm:leading-7 text-center text-secondarytext max-w-xl mx-auto'>
						Participate in weekly, or monthly draws and unlock exciting prizes.
						The more you play, the higher your chances!
					</p>
				</div>
				<div className='text-foreground bg-primary py-3 px-6 rounded-full flex items-center gap-2.5 font-bold text-lg sm:text-xl leading-7 sm:leading-11.5'>
					SMS ‘CW’ to ‘52011’{' '}
				</div>
			</div>
			<div className='relative w-[366px] h-[248px]  mt-10 overflow-hidden'>
				<Image
					src='/background-star.svg'
					alt='Hero background'
					width={400}
					height={400}
					className=''
				/>
				{/* Optional overlay/content */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<Image
						src='/hero-image.svg'
						alt='Hero Image'
						width={0}
						height={0}
						className='object-contain h-full w-full'
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
