import { Icon } from '@iconify/react';
import { winners } from '../../utils/utils';
import Image from 'next/image';
import Link from 'next/link';

const LuckyWinners = () => {
	return (
		<section className='bg-white py-14 flex items-center justify-center flex-col px-3.5 md:px-2'>
			<div className='text-center'>
				<h2 className='font-bold text-2xl sm:text-3xl md:text-4xl'>
					Our lucky winners
				</h2>
				<p className='text-sm sm:text-base max-w-3xl mx-auto mt-4 text-gray-600'>
					Don&apos;t just take our words - hear from our winners
				</p>
			</div>

			<div className='mt-10 w-full max-w-7xl px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{winners.slice(0, 3).map((winner) => (
						<div
							key={winner.id}
							className='bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100'>
							{/* Placeholder Image */}
							<div className='relative aspect-video bg-gray-200'>
								<Image
									src={winner.image || '/luckyWinners/winner2.svg'}
									alt='Winner video thumbnail'
									fill
									className='object-cover'
								/>

								{/* Play button */}
								<button className='absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform'>
									<Icon
										icon='carbon:play'
										className='w-7 h-7 text-gray-700 ml-1'
									/>
								</button>
							</div>

							{/* Winner Info */}
							<div className='p-5 bg-[#F2F2F2]'>
								<div className='flex justify-between items-start mb-3'>
									<span className='text-sm sm:text-base font-bold text-foreground'>
										{winner.phone}
									</span>
									<span className='text-[#3D3D3D] text-sm sm:text-base'>
										{winner.date}
									</span>
								</div>
								<div className='text-base sm:text-[20px] font-bold text-foreground'>
									{winner.amount}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* See All Button */}
				<div className='flex justify-center mt-8 smd:mt-10'>
					<Link
						href='/lucky-winner'
						className='bg-[#FAAA32] text-black font-semibold px-12 py-4 rounded-full transition-colors shadow-[0px_4px_0px_0px_#0B132A] flex items-center justify-center w-xs sm:w-sm mx-auto cursor-pointer'>
						See all
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LuckyWinners;
