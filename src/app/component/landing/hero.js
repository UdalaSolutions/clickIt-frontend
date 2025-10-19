import Image from 'next/image';

const Hero = () => {
	return (
		<section className='mt-38 flex flex-col items-center justify-center text-center'>
			<div className='flex items-center flex-col gap-4 max-w-2xl mx-auto'>
				<div className='py-2 px-4 flex items-center gap-2 border border-primaryYellow text-[#ef9206] rounded-full text-sm/5 max-w-max'>
					<Image
						src='/icon/star.svg'
						alt='rocket icon'
						width={20}
						height={20}
					/>
					100% transparent draws
				</div>
				<div className='flex flex-col gap-3'>
					<h1 className='font-bold text-[40px] leading-15 text-center'>
						Turn your airtime into a chance to win amazing cash prizes{' '}
					</h1>
					<p className='font-lg leading-7 text-center text-secondarytext max-w-xl mx-auto'>
						Participate in weekly, or monthly draws and unlock exciting prizes.
						The more you play, the higher your chances!
					</p>
				</div>
				<div className='text-foreground bg-primary py-3 px-6 rounded-full flex items-center gap-2.5 font-bold text-xl leading-11.5'>
					SMS ‘CW’ to ‘52011’{' '}
				</div>
			</div>
			<div className='relative w-[600px] h-[400px] mt-10 mx-auto rounded-2xl overflow-hidden'>
				<Image
					src='/background-star.svg'
					alt='Hero background'
					fill
					className='object-cover'
					priority={false}
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
