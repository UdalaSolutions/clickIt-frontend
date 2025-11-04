'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlaysmsModal from '../modal/playsms';

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className='relative mt-32 sm:mt-38 flex flex-col items-center justify-center text-center px-3.5 md:px-0 overflow-hidden'>
			{/* Text Content */}
			<div className='flex flex-col items-center gap-4 max-w-full md:max-w-3xl mx-auto'>
				<div className='py-2 px-4 flex items-center gap-2 border border-primaryYellow text-[#ef9206] rounded-full text-xs sm:text-sm max-w-max bg-white/70 backdrop-blur-sm'>
					<Image
						src='/icon/star.svg'
						alt='rocket icon'
						width={20}
						height={20}
						className='w-5 h-5'
					/>
					100% transparent draws
				</div>

				<div className='flex flex-col gap-3'>
					<h1 className='font-bold text-[30px] sm:text-4xl md:text-[44px] leading-[1.2] text-center'>
						Turn your airtime into a chance to win amazing cash prizes
					</h1>
					<p className='text-sm sm:text-lg leading-6 sm:leading-7 text-center text-secondarytext max-w-xl mx-auto'>
						Participate in weekly or monthly draws and unlock exciting prizes.
						The more you play, the higher your chances!
					</p>
				</div>

				<div className='flex max-w-[624px] gap-6 items-center mt-5 flex-col sm:flex-row'>
					<Link
						href='/play-now'
						className='bg-primary text-[#1A1A1A] font-bold rounded-[50px] shadow-[0px_4px_0px_0px_#0B132A] flex items-center justify-center py-3 min-w-[294px] md:min-w-[300px]'>
						Play via website
					</Link>

					<div
						className='text-primary border border-primary bg-white py-3 px-6 rounded-full flex items-center gap-2.5 font-bold justify-center min-w-[294px] md:min-w-[300px] cursor-pointer'
						onClick={() => setIsOpen(true)}>
						Play via SMS
					</div>
				</div>
			</div>

			{/* Hero Illustration - Removed bottom margin */}
			<div className='relative w-[340px] h-[240px] sm:w-[460px] sm:h-[340px] md:w-[600px] md:h-[415px] mt-10 md:mt-14'>
				<Image
					src='/hero-image.svg'
					alt='Hero Image'
					fill
					priority
					sizes='(max-width: 640px) 340px, (max-width: 768px) 460px, 600px'
					className='object-contain'
				/>
			</div>

			{/* Background Star - Full Width & Height */}
			<div className='absolute bottom-0 left-0 w-full -z-10 pointer-events-none'>
				<Image
					src='/background-star.svg'
					alt='Hero background'
					width={2000}
					height={800}
					className='w-full sm:h-auto opacity-90 h-[350px]'
					priority
				/>
			</div>
			{/* Modal Overlay */}
			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50'>
					<div
						onClick={(e) => e.stopPropagation()}
						className='animate-modalFadeScale'>
						<PlaysmsModal closeModal={() => setIsOpen(false)} />
					</div>
				</div>
			)}
		</section>
	);
};

export default Hero;
