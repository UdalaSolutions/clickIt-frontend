'use client';

import { useRouter } from 'next/navigation';

const SuccessPage = () => {
	const router = useRouter();

	const handleDismiss = () => {
		router.push('/');
	};

	return (
		<div className='min-h-screen bg-white flex items-center justify-center p-4 mt-10'>
			<div className='bg-[#FCFCFC] rounded-xl p-8 w-full max-w-[460px] shadow-[0px_0px_2px_2px_#9CC6D31A] flex items-center flex-col'>
				<div className='mb-6 text-6xl'>🎉</div>

				<h1 className='text-3xl font-bold mb-4'>Success!</h1>

				<p className='text-gray-600 mb-8 leading-relaxed text-center'>
					Your entry has been received. We&apos;ve sent a confirmation SMS to
					your phone number with your subscription details and draw date.
				</p>

				<button
					onClick={handleDismiss}
					className='w-full bg-primary text-black font-semibold py-4 rounded-full transition cursor-pointer shadow-[0px_4px_0px_0px_#0B132A]'>
					Dismiss
				</button>
			</div>
		</div>
	);
};

export default SuccessPage;
