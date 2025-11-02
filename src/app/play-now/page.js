'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LotteryForm = () => {
	const router = useRouter();
	const [phone, setPhone] = useState('');
	const [plan, setPlan] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async () => {
		if (phone && plan) {
			setIsLoading(true);

			await new Promise((resolve) => setTimeout(resolve, 500));

			// Navigate to success page
			router.push('/play-now/success');
		}
	};

	return (
		<div className='bg-white py-14 px-3 flex items-center justify-center flex-col mt-18 sm:mt-20'>
			<div className='bg-[#FCFCFC] rounded-xl p-8 w-full max-w-[460px] shadow-[0px_0px_2px_2px_#9CC6D31A]'>
				<h1 className='text-3xl font-bold text-center mb-2'>
					Join the next draw
				</h1>
				<p className='text-gray-600 text-center mb-8'>
					Complete the form below to join the draw.
				</p>

				<div className='space-y-6 mt-5'>
					<div>
						<label className='block text-gray-700 text-sm mb-2'>
							Phone number
						</label>
						<input
							type='tel'
							placeholder='Enter your phone number here'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
						/>
					</div>

					<div>
						<label className='block text-gray-700 text-sm mb-3'>
							Select plan
						</label>
						<div className='space-y-3'>
							<label className='flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition bg-white'>
								<span className='font-medium'>₦100/day</span>
								<input
									type='radio'
									name='plan'
									value='100'
									checked={plan === '100'}
									onChange={(e) => setPlan(e.target.value)}
									className='w-5 h-5 accent-black'
								/>
							</label>

							<label className='flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition bg-white'>
								<span className='font-medium'>₦200/week</span>
								<input
									type='radio'
									name='plan'
									value='200'
									checked={plan === '200'}
									onChange={(e) => setPlan(e.target.value)}
									className='w-5 h-5 accent-black'
								/>
							</label>

							<label className='flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition bg-white'>
								<span className='font-medium'>₦500/month</span>
								<input
									type='radio'
									name='plan'
									value='500'
									checked={plan === '500'}
									onChange={(e) => setPlan(e.target.value)}
									className='w-5 h-5 accent-black'
								/>
							</label>
						</div>
					</div>

					<button
						onClick={handleSubmit}
						disabled={!phone || !plan || isLoading}
						className='w-full bg-primary text-black font-semibold py-4 rounded-full transition cursor-pointer shadow-[0px_4px_0px_0px_#0B132A] disabled:opacity-50 disabled:cursor-not-allowed'>
						{isLoading ? 'Processing...' : 'Play now'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default LotteryForm;
