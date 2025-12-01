'use client';

export default function AboutLayout({ children }) {
	return (
		<div className='relative bg-white py-14 px-2 sm:px-4 flex items-center justify-center flex-col mt-20'>
			{/* Background overlay */}
			<div
				className='absolute inset-0 z-10 pointer-events-none about-us'
				style={{
					backgroundImage: 'url(/about-us-bg.svg)',
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%',
				}}
			/>

			{/* Page content wrapper */}
			<div className='relative z-20 w-full max-w-6xl sm:max-w-5xl mx-auto'>
				{children}
			</div>
		</div>
	);
}
