'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ALL_QUESTIONS } from '../../../utils/utils';

function pickRandomQuestions(count = 5) {
	const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
}

const SESSION_KEY = 'ng_quiz_questions';

const LotteryForm = () => {
	const router = useRouter();
	const [questions, setQuestions] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selected, setSelected] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		// Always generate fresh questions on mount (new visit = new set)
		const fresh = pickRandomQuestions(5);
		setQuestions(fresh);
	}, []);

	const current = questions[currentIndex];
	const isLast = currentIndex === questions.length - 1;

	const handleNext = async () => {
		if (!selected) return;
		const updatedAnswers = [...answers, selected];
		setAnswers(updatedAnswers);

		if (isLast) {
			setIsLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Check if all answers are correct
			const allCorrect = questions.every(
				(q, i) => q.answer === updatedAnswers[i],
			);

			router.push(
				allCorrect ? '/play-now/trivia/success' : '/play-now/trivia/try-again',
			);
		} else {
			setCurrentIndex((prev) => prev + 1);
			setSelected('');
		}
	};

	if (!current) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<div className='w-8 h-8 border-4 border-[#F5A623] border-t-transparent rounded-full animate-spin' />
			</div>
		);
	}

	return (
		<div className='bg-white py-14 px-3 flex items-center justify-center flex-col mt-18 sm:mt-20'>
			<div className='md:bg-[#FCFCFC] md:rounded-xl p-4 md:p-8 w-full md:max-w-[460px] md:shadow-[0px_0px_2px_2px_#9CC6D31A] flex items-center flex-col gap-2'>
				{/* Title */}
				<h1 className='text-2xl md:text-[32px] leading-12 font-bold text-center mb-2'>
					Question {currentIndex + 1}
				</h1>
				<p className='text-[#4D4D4D] text-center mb-6'>{current.category}</p>

				{/* Question Box */}
				<div className='mb-8 text-center'>
					<p className='text-[20px] md:text-2xl leading-9 font-semibold'>
						{current.question}
					</p>
				</div>

				{/* Answer Options */}
				<div className='space-y-3 mb-8'>
					{current.options.map((option) => (
						<label
							key={option}
							className={`w-[342px] flex items-center justify-between px-4 py-3 border rounded-lg cursor-pointer transition shadow-sm ${
								selected === option ?
									'border-[#faaa32] bg-white'
								:	'border-white bg-white hover:bg-gray-50'
							}`}>
							<span className='text-gray-800 text-sm'>{option}</span>
							<input
								type='radio'
								name='answer'
								value={option}
								checked={selected === option}
								onChange={(e) => setSelected(e.target.value)}
								className='w-4 h-4 accent-black'
							/>
						</label>
					))}
				</div>

				{/* Next / Submit Button */}
				<button
					onClick={handleNext}
					disabled={!selected || isLoading}
					className='w-full bg-primary text-black font-semibold py-4 rounded-full transition cursor-pointer shadow-[0px_4px_0px_0px_#0B132A] disabled:opacity-50 disabled:cursor-not-allowed'>
					{isLoading ?
						'Loading...'
					: isLast ?
						'Submit'
					:	'Next'}
				</button>
			</div>
		</div>
	);
};

export default LotteryForm;
