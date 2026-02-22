'use client';

import { useRouter } from 'next/navigation';

const SuccessPage = () => {
	const router = useRouter();

	return (
		<div className='min-h-screen bg-white flex items-center justify-center p-4 mt-10'>
			<div className='md:bg-[#FCFCFC] md:rounded-xl p-4 md:p-8 w-full md:max-w-[460px] md:shadow-[0px_0px_2px_2px_#9CC6D31A] flex items-center flex-col gap-2'>
				<div className='mb-6 text-6xl'>🎉</div>

				<h1 className='text-3xl font-bold mb-4 text-center'>
					Congratulations!
				</h1>

				<p className='text-gray-600 mb-8 leading-relaxed text-center'>
					You got all 5 questions correct and unlocked the spin wheel!
				</p>

				<button
					onClick={() => router.push('/play-now/spin-wheel')}
					className='w-full bg-primary text-black font-semibold py-4 rounded-full transition cursor-pointer shadow-[0px_4px_0px_0px_#0B132A]'>
					Spin Now
				</button>
			</div>
		</div>
	);
};

export default SuccessPage;
