import { Icon } from '@iconify/react';
import Image from 'next/image';

const PlaysmsModal = ({ closeModal }) => {
	return (
		<div className='relative'>
			{/* Close button - positioned outside modal */}
			<button
				className='absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#2d2d2d]/30 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-[#3d3d3d] transition-colors z-50 border-[#F5F5F5]/80 border'
				onClick={closeModal}
				aria-label='Close modal'>
				<Icon
					icon='material-symbols:close-rounded'
					width='28'
					height='28'
					className='h-5 w-5 md:h-7 md:w-7'
				/>
			</button>

			<div className='bg-white rounded-3xl p-4 md:p-8 pb-10 flex flex-col gap-6 relative overflow-hidden w-[90vw] max-w-[440px] mx-auto'>
				{/* Yellow decorative patches */}
				<div
					className='absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl pointer-events-none'
					style={{ background: '#FAAA3280' }}
				/>
				<div
					className='absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none'
					style={{ background: '#FAAA3280' }}
				/>

				{/* Decorative corner elements */}
				<Image
					src='/modal-design-top.svg'
					alt=''
					width={80}
					height={80}
					className='w-auto h-auto absolute top-0 left-0 pointer-events-none'
				/>
				<Image
					src='/modal-design-left.svg'
					alt=''
					width={80}
					height={80}
					className='w-auto h-auto absolute top-0 left-0 pointer-events-none'
				/>
				<Image
					src='/modal-design-bottom.svg'
					alt=''
					width={80}
					height={80}
					className='w-auto h-auto absolute bottom-0 left-0 pointer-events-none'
				/>
				<Image
					src='/modal-design-right.svg'
					alt=''
					width={80}
					height={80}
					className='w-auto h-auto absolute bottom-0 right-0 pointer-events-none'
				/>

				{/* Content */}
				<div className='relative z-10 flex flex-col gap-5 items-center text-center p-6 md:p-8 lg:px-10'>
					{/* Title */}
					<h1 className='text-[#1a1a1a] font-bold xs:text-xl text-2xl md:text-[32px] md:leading-12'>
						Play via SMS
					</h1>

					{/* USSD */}
					<div className='flex flex-col items-center gap-2 text-center'>
						<p className='text-[#666666] text-sm leading-none'>Dial</p>
						<p className='text-[#1a1a1a] font-bold xs:text-xl text-2xl md:text-4xl leading-none'>
							*20067#
						</p>
					</div>

					{/* Divider */}
					<div className='w-full flex items-center gap-3'>
						<span className='flex-1 h-px bg-[#e5e5e5]' />
						<span className='text-[#666666] text-sm'>or</span>
						<span className='flex-1 h-px bg-[#e5e5e5]' />
					</div>

					{/* Description */}
					<p className='text-[#666666] text-sm'>
						Send the required keyword
						<br />
						to the short code below
					</p>

					{/* Pricing Options */}
					<div className='w-full bg-white rounded-2xl p-4 sm:p-6 text-left space-y-2 shadow-md'>
						<div className='text-[#1a1a1a]'>
							<span className='font-bold'>CIOD - </span>
							<span className='font-normal'>₦50 one-time</span>
						</div>
						<div className='text-[#1a1a1a]'>
							<span className='font-bold'>CID - </span>
							<span className='font-normal'>₦150/day</span>
						</div>
						<div className='text-[#1a1a1a]'>
							<span className='font-bold'>CIW - </span>
							<span className='font-normal'>₦250/6 days</span>
						</div>
						<div className='text-[#1a1a1a]'>
							<span className='font-bold'>CIM - </span>
							<span className='font-normal'>₦500/month</span>
						</div>
					</div>

					{/* Short Code */}
					<div className='flex flex-col items-center gap-2 text-center'>
						<p className='text-[#666666] text-sm leading-none'>To</p>
						<p className='text-[#1a1a1a] font-bold xs:text-xl text-2xl md:text-4xl leading-none'>
							20067
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaysmsModal;
