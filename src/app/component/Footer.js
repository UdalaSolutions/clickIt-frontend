import Image from 'next/image';
import { Icon } from '@iconify/react';
import { navLinks, socialIcons } from '@/app/utils/utils';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className='h-[50vh] md:h-96'></div>
			<footer className='bg-[#071226] text-white relative sm:pt-12 '>
				{/* Promo card that overlaps the footer */}

				<div className='absolute left-1/2 transform -translate-x-1/2 -top-1/2 w-[min(1100px,92%)]'>
					<div className='relative mx-auto border-7 border-white rounded-2xl overflow-hidden'>
						{/* Outer rounded white border */}
						<div className='rounded-2xl bg-white/0 ring-4 ring-white/90'>
							{/* Dark promo card */}
							<div className='relative bg-[#0B132A] rounded-2xl px-8 py-12 md:py-14 lg:py-16 text-center'>
								{/* Decorative angled shapes (SVG) */}
								<svg
									className='absolute -top-6 right-8 w-28 h-28 opacity-20'
									viewBox='0 0 100 100'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden>
									<path
										d='M0 80 L20 60 L40 80 L60 60 L80 80 L100 60 L100 100 L0 100 Z'
										fill='#0d2742'
									/>
								</svg>

								<svg
									className='absolute -bottom-8 left-8 w-36 h-24 opacity-15'
									viewBox='0 0 200 80'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden>
									<polygon
										points='0,80 40,40 80,80 120,40 160,80 200,40 200,80 0,80'
										fill='#12304e'
									/>
								</svg>

								{/* Content */}
								<h2 className='text-2xl sm:text-[32px] leading-9 sm:leading-12 text-center font-bold  text-white max-w-md mx-auto'>
									Your airtime can do more, play now and win big!
								</h2>
								<p className='text-sm sm:text-base text-[#F2F2F2] mt-4 max-w-lg mx-auto'>
									Don&apos;t just top up — play for a chance to win. Text the
									keyword to our short code and get in on the next draw.
								</p>

								<div className='mt-8 flex items-center justify-center gap-4'>
									<button
										className='inline-flex items-center gap-3 bg-[#FAAA32]  text-[#081726] font-semibold py-3 px-6 rounded-full shadow-2xl hover:scale-[1.02] transition-transform '
										aria-label='SMS CTA'>
										<span className='text-base md:text-2xl/8 font-bold '>
											SMS ‘CW’ to ‘52011’
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer main area (pushed down to make room for overlapping promo) */}
				<div className='pt-28 sm:pt-40 md:pt-44 pb-12'>
					<div className='max-w-6xl mx-auto px-6'>
						<div className='flex flex-col md:flex-row md:items-start md:justify-between gap-10'>
							{/* Brand */}
							<div className='flex flex-col gap-4'>
								<div className='flex items-center gap-3'>
									<Image
										src='/light-logo.svg'
										alt='Click it logo'
										width={140}
										height={40}
									/>
								</div>
								<p className='text-[#F2F2F2] max-w-2xs'>
									Play and win exciting prizes today, book your slot now!
								</p>
							</div>

							{/* Nav links */}
							<nav className=''>
								<ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-300'>
									{navLinks.map((link) => (
										<li key={link.href}>
											<a
												href={link.href}
												className='hover:text-white transition'>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</div>

						{/* Bottom white pill row with legal links (as in the design) */}
						<div className='bg-[#F2F2F2] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4  mt-12'>
							<div className='flex items-center gap-2.5'>
								{/* Use Iconify icons inside large yellow circles */}
								{socialIcons.map((s) => (
									<a
										key={s.href}
										href={s.href}
										aria-label={s.aria}
										className='w-8 h-8 bg-[#FAAA32] rounded-full flex items-center justify-center  hover:scale-105 transition-transform'>
										<Icon
											icon={s.icon}
											className='text-white '
										/>
									</a>
								))}
							</div>
							<div className='flex items-center gap-6'>
								<div className='hidden sm:flex items-center gap-3'>
									<a
										href='#privacy'
										className='text-sm text-[#3D3D3D] '>
										Privacy policy
									</a>
									<a
										href='#terms'
										className='text-sm text-[#3D3D3D] '>
										Terms
									</a>
								</div>
							</div>
							<div className='text-[#3D3D3D] text-sm'>
								© {currentYear} Click it. All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
