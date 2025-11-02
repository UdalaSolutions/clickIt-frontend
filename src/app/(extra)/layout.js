import React from 'react';

export default function AboutLayout({ children }) {
	return (
		<div className='bg-white py-14 px-4 flex items-center justify-center flex-col mt-20'>
			{' '}
			{/* Background overlay */}{' '}
			<div
				className='absolute inset-0 z-10 pointer-events-none'
				style={{
					backgroundImage: 'url(/about-us-bg.svg)',
					backgroundSize: '40%',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			{/* Page content wrapper */}
			<div className='relative z-20 w-full max-w-5xl mx-auto'>{children}</div>
		</div>
	);
}
