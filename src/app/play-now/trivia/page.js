import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Trivia = () => {
	return (
		<div className='min-h-screen bg-white flex items-center justify-center p-4 mt-10'>
			<div className='md:bg-[#FCFCFC] md:rounded-xl p-4 md:p-8 w-full md:max-w-[460px] md:shadow-[0px_0px_2px_2px_#9CC6D31A] flex items-center flex-col gap-2'>
				<div className='mb-6 text-6xl'>
					<Image
						src='/question-mark.svg'
						alt='quiz icon'
						width={100}
						height={100}
						className=''
					/>
				</div>

				<h1 className='text-[32px] leading-12 font-bold mb-4'>Quiz time!</h1>

				<p className='text-[#4D4D4D] mb-8 leading-relaxed text-center'>
					Answer all 5 questions correctly to unlock your chance to spin and win
					amazing prizes.
				</p>

				<p className='text-[#4D4D4D] mb-8 leading-relaxed text-center flex items-center gap-2 text-sm'>
					<Icon
						icon='lucide:info'
						width='20'
						height='20'
					/>
					Answers can’t be changed once submitted.
				</p>

				<Link
					href='/play-now/trivia/quiz'
					className='flex justify-center w-full bg-primary text-black font-semibold py-4 rounded-full transition cursor-pointer shadow-[0px_4px_0px_0px_#0B132A]'>
					Start quiz
				</Link>
			</div>
		</div>
	);
};
export default Trivia;
