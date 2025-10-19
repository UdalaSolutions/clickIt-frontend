import Image from 'next/image';
import { Icon } from '@iconify/react';

const partners = [
	{ href: '#airtel', src: '/airtel.svg', alt: 'airtel' },
	{ href: '#glo', src: '/glo.svg', alt: 'glo' },
	{ href: '#mtn', src: '/mtn.svg', alt: 'mtn' },
];

const cards = [
	{
		title: 'Mission',
		body: 'To create a simple, inclusive, and transparent lottery system that rewards everyday telecom users for their participation and loyalty.',
		icon: 'mdi:target',
	},
	{
		title: 'Vision',
		body: "To become Nigeria's most trusted and exciting airtime-based lottery platform, transforming small entries into big wins that change lives.",
		icon: 'tabler:trophy',
	},
];

const AboutUsPage = () => {
	return (
		<div className='bg-white py-14 px-4 flex items-center justify-center flex-col mt-20'>
			{/* Background overlay */}
			<div
				className='absolute inset-0 z-10 pointer-events-none'
				style={{
					backgroundImage: 'url(/about-us-bg.svg)',
					backgroundSize: '40%',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<section className='w-full max-w-5xl relative mx-auto flex flex-col items-center z-20!'>
				{/* small pill label */}
				<div className='mb-4  py-2 px-4 inline-flex items-center gap-2 border border-[#FAAA32] text-[#ef9206] rounded-full text-sm max-w-max'>
					Our story
				</div>

				{/* heading + decorative background */}
				<div className='relative text-center pt-6 pb-10'>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] max-w-3xl mx-auto'>
						Making lottery fun, fair and rewarding
					</h1>

					<p className='mt-4 text-sm md:text-base text-[#3D3D3D] max-w-3xl mx-auto px-4'>
						Click it was created to bring excitement and opportunity to millions
						of mobile users across Nigeria. In partnership with leading
						telecommunication providers, we make it easy for anyone to join,
						play, and experience the thrill of winning, all through their mobile
						number.
					</p>
				</div>

				{/* partners */}
				<div className='mt-24 flex items-center justify-center'>
					<div className='text-center'>
						<p className='text-[#6B7280] mb-4'>Our trusted partners</p>

						<div className='flex items-center justify-center gap-6'>
							{partners.map((p) => (
								<a
									key={p.alt}
									href={p.href}
									className='inline-flex items-center justify-center p-2 w-hover:scale-[1.03] transition-transform'>
									<Image
										src={p.src}
										alt={p.alt}
										width={100}
										height={100}
										objectFit='contain'
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* cards (mission / vision) */}
				<div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
					{cards.map((c) => (
						<article
							key={c.title}
							className='rounded-xl border border-[#B3B3B3]  p-6 bg-white '>
							<div className='flex items-start gap-4 flex-col'>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 rounded-full bg-[#FFFAF0] flex items-center justify-center border border-[#FDE3B6]'>
										<Icon
											icon={c.icon}
											className='text-[#FAAA32] w-6 h-6'
										/>
									</div>
								</div>

								<div>
									<h3 className='text-2xl font-bold text-[#0B132A]'>
										{c.title}
									</h3>
									<p className='mt-2  text-[#0B132A]'>{c.body}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
};

export default AboutUsPage;
