'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

const faqsData = [
	{
		question: "How will I know if I've won?",
		answer:
			"Winners will be notified via SMS and email. You can also check the winner's list on our website after each draw.",
	},
	{
		question: 'How is the winner selected?',
		answer:
			'Winners are selected through a random and transparent draw process that is verified by independent auditors.',
	},
	{
		question: 'Which network can play the draw?',
		answer:
			'All major networks are supported including MTN, Airtel, Glo, and 9mobile.',
	},
	{
		question: 'Is the draw random and fair?',
		answer:
			'Yes, our draw process is completely random and fair, audited by third-party organizations to ensure transparency.',
	},
	{
		question: 'How will I know if I’ve won?',
		answer:
			'Yes, our draw process is completely random and fair, audited by third-party organizations to ensure transparency.',
	},
];

const FAQs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section className='relative pt-4 sm:pt-8 md:pt-12 pb-16 bg-white px-5.5 md:px-0'>
			<div
				className='
          relative
          px-6 sm:px-8
          flex items-center justify-center
          overflow-hidden
          max-w-3xl mx-auto bg-gradient-to-br from-[#0095FF4D] via-[#20377966] to-[#FAAA32]
          py-8 rounded-3xl border-2 border-[#0B132A]
        '>
				{/* Background overlay */}
				<div
					className='absolute inset-0 z-10 pointer-events-none'
					style={{
						backgroundImage: 'url(/background-star.svg)',
						backgroundSize: '100%',
						backgroundPosition: 'center',
						// backgroundRepeat: 'repeat',
					}}
				/>

				{/* FAQ content */}
				<div className='relative z-20 w-full'>
					<h2 className='text-2xl sm:text-[32px] font-bold text-center mb-6'>
						FAQs
					</h2>

					<div className='space-y-4'>
						{faqsData.map((faq, index) => {
							const isOpen = openIndex === index;
							return (
								<div
									key={index}
									className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer'>
									<button
										onClick={() => toggleFAQ(index)}
										aria-expanded={isOpen}
										className='w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left transition-colors'>
										<span className='text-sm sm:text-base font-medium text-[#1A1A1A] pr-4'>
											{faq.question}
										</span>
										<Icon
											icon='iconamoon:arrow-down-2'
											className={`h-5 w-5 sm:w-6 sm:h-6 text-[#999999] flex-shrink-0 transition-transform duration-200 ${
												isOpen ? 'rotate-180' : ''
											}`}
										/>
									</button>

									<div
										className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
											isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
										}`}>
										<div className='px-6 pb-4 pt-2 text-gray-600 '>
											{faq.answer}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
