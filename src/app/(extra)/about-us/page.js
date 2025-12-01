import Image from 'next/image';
import { Icon } from '@iconify/react';
import { partners, cards } from '../../utils/utils';

export default function AboutPage() {
	return (
		<section className='flex flex-col items-center'>
			<div className='mb-4 py-2 px-4 inline-flex items-center gap-2 border border-[#FAAA32] text-[#ef9206] rounded-full text-sm max-w-max'>
				Our story
			</div>

			{/* heading + text */}
			<div className='relative text-center pt-6 pb-10'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] max-w-3xl mx-auto'>
					Making lottery fun, fair and rewarding
				</h1>

				<p className='mt-4 text-sm md:text-base text-[#3D3D3D] max-w-3xl mx-auto px-4'>
					Click it was created to bring excitement and opportunity to millions
					of mobile users across Nigeria. In partnership with leading
					telecommunication providers, we make it easy for anyone to join, play,
					and experience the thrill of winning, all through their mobile number.
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
								className='inline-flex items-center justify-center p-2 hover:scale-[1.03] transition-transform'>
								<Image
									src={p.src}
									alt={p.alt}
									width={100}
									height={100}
									className='object-contain'
								/>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* cards */}
			<div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
				{cards.map((c) => (
					<article
						key={c.title}
						className='rounded-xl border-[0.5px] border-[#B3B3B3] p-6 bg-white group hover:bg-[#faaa32] hover:border-[#faaa32]'>
						<div className='flex items-start gap-4 flex-col'>
							<div className='flex-shrink-0'>
								<div className='h-12.5 w-12.5 rounded-lg bg-[#FCFCF7] flex items-center justify-center group-hover:bg-white'>
									<Icon
										icon={c.icon}
										className='w-8 h-8 text-[#FAAA32]'
									/>
								</div>
							</div>

							<div>
								<h3 className='text-2xl font-bold text-[#0B132A]'>{c.title}</h3>
								<p className='mt-2 text-[#0B132A]'>{c.body}</p>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
