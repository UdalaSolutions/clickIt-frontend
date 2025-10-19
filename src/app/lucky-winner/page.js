import { winners } from '@/app/utils/utils';
import { Icon } from '@iconify/react';

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
							className='bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100'>
							{/* Video Placeholder */}
							<div className='relative bg-[#D9D9D9] aspect-video flex items-center justify-center'>
								<button className='w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform'>
									<Icon
										icon='carbon:play'
										className='w-7 h-7 text-gray-700 ml-1'
									/>
								</button>
							</div>

							{/* Winner Info */}
							<div className='p-5 bg-[#F2F2F2]'>
								<div className='flex justify-between items-start mb-3'>
									<span className='text-sm/5 sm:text-base font-bold text-foreground'>
										{winner.phone}
									</span>
									<span className='text-[#3D3D3D] text-sm/5 sm:text-base'>
										{winner.date}
									</span>
								</div>
								<div className='text-sm/5 sm:text-[20px] font-bold text-foreground'>
									{winner.amount}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* See All Button */}
				<div className='flex justify-center mt-10'>
					<button className='bg-[#FAAA32] text-black font-semibold px-12 py-4 rounded-full transition-colors shadow-[0px_4px_0px_0px_#0B132A] flex items-center justify-center w-xs not-first-of-type:sm:w-sm mx-auto cursor-pointer'>
						See all
					</button>
				</div>
			</div>
		</section>
	);
};
export default LuckyWinnersPage;
