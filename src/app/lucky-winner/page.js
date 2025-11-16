import { winners } from '../utils/utils';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const LuckyWinnersPage = () => {
	return (
		<section className='bg-white py-14 px-3 flex items-center justify-center flex-col mt-18 sm:mt-20'>
			<div className='text-center'>
				<h2 className='font-bold text-3xl md:text-4xl'>Our lucky winners</h2>
			</div>

			<div className='mt-10 w-full max-w-7xl px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10'>
					{winners.map((winner) => (
						<div
							key={winner.id}
							className='bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2  cursor-pointer group'>
							{/* Thumbnail / Placeholder */}
							<div className='relative aspect-video bg-gray-200 overflow-hidden'>
								<Image
									src={winner.image || '/luckyWinners/winner1.svg'}
									alt='Winner video thumbnail'
									fill
									className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-100'
								/>

								{/* Play button */}
								<button className='absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 '>
									<Icon
										icon='carbon:play'
										className='w-7 h-7 text-gray-700 ml-1 transition-colors duration-300 '
									/>
								</button>
							</div>

							{/* Winner Info */}
							<div className='p-5 bg-[#F2F2F2] transition-colors duration-300 '>
								<div className='flex justify-between items-start mb-3'>
									<span className='text-sm/5 sm:text-base font-bold text-foreground'>
										{winner.phone}
									</span>
									<span className='text-[#3D3D3D] text-sm/5 sm:text-base'>
										{winner.date}
									</span>
								</div>
								<div className='text-sm/5 sm:text-[20px] font-bold text-foreground transition-colors duration-300 '>
									{winner.amount}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* See All Button */}
				<div className='flex justify-center mt-10'>
					<button
						className='bg-primary text-[#1A1A1A] font-bold rounded-[50px] shadow-[0px_4px_0px_0px_#0B132A] 
    flex items-center justify-center py-3.5 w-xs sm:w-sm mx-auto
    hover:shadow-[0px_6px_0px_0px_white]
    transition-all duration-300 delay-200
    transform hover:scale-[1.0] active:scale-[0.97]'>
						See all
					</button>
				</div>
			</div>
		</section>
	);
};

export default LuckyWinnersPage;
