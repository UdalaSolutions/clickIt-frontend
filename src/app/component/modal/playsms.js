import { Icon } from '@iconify/react';

const PlaysmsModal = ({ closeModal }) => {
	return (
		<>
			<div className='bg-white rounded-xl p-6  flex flex-col gap-10 '>
				<div className='flex justify-between items-center gap-12'>
					<h1 className='text-[#1a1a1a] font-bold text-2xl leading-6'>
						Play via SMS
					</h1>

					<div
						className='bg-[#f7f7f7] h-10 w-10 rounded-xl gap-2 flex items-center justify-center cursor-pointer text-[#1a1a1a]'
						onClick={closeModal}>
						<Icon
							icon='material-symbols:close-rounded'
							width='24'
							height='24'
						/>
					</div>
				</div>

				<div className='text-left text-[#1a1a1a]'>
					<h1 className='font-bold'>
						CTD-<span className='font-normal'>₦100/daily</span>
					</h1>
					<h1 className='font-bold'>
						CTW-<span className='font-normal'>₦200/weekly</span>
					</h1>
					<h1 className='font-bold'>
						CTM-<span className='font-normal'>₦500/monthly</span>
					</h1>
				</div>

				<h1 className='text-left font-bold text-[#1a1a1a]'>
					To <span className='text-xl leading-7.5'> 7033</span>
				</h1>
			</div>
		</>
	);
};
export default PlaysmsModal;
