'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const contactMethods = [
	{
		id: 'phone',
		title: 'Call us via',
		detail: '+234 802 929 2629',
		icon: 'bi:phone',
	},
	{
		id: 'email',
		title: 'Send us a mail',
		detail: 'Support@lottery.ng',
		icon: 'eva:email-outline',
	},
];

const countryOptions = [
	{ code: 'NG', dial: '+234', label: 'Nigeria', flag: '🇳🇬' },
	{ code: 'US', dial: '+1', label: 'United States', flag: '🇺🇸' },
	{ code: 'GB', dial: '+44', label: 'United Kingdom', flag: '🇬🇧' },
];

const ContactUsPage = () => {
	const [country, setCountry] = useState(countryOptions[0].code);
	const [dial, setDial] = useState(countryOptions[0].dial);
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		message: '',
	});

	const handleCountryChange = (value) => {
		const opt = countryOptions.find((c) => c.code === value);
		if (opt) {
			setCountry(opt.code);
			setDial(opt.dial);
		}
	};

	const handleChange = (e) => {
		setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// placeholder: wire up API/email handling here
		console.log('submit', { ...form, dial });
		alert('Message sent (demo). Implement API to actually send messages.');
		setForm({ firstName: '', lastName: '', phone: '', message: '' });
	};

	return (
		<main className='bg-white py-14 px-6 flex justify-center mt-24'>
			<section className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
				{/* Left column - copy & contact methods */}
				<div className='px-2 lg:px-0'>
					<h2 className='text-[24px] sm:text-[32px] font-bold text-[#0B132A] mb-4 max-w-sm'>
						Get in touch with our support team
					</h2>

					<p className='text-sm text-[#3D3D3D] max-w-md mb-8'>
						Have questions about your entry, winnings, or how the draw works?
						Reach us via email, phone, or the message form on the right. Our
						support team will respond as quickly as possible.
					</p>

					<div className='space-y-6'>
						{contactMethods.map((m) => (
							<div
								key={m.id}
								className='flex items-start gap-4'>
								<div className='w-12 h-12 rounded-full bg-[#FCFCF7] border border-[#FDE3B6] flex items-center justify-center'>
									<Icon
										icon={m.icon}
										className='text-[#FAAA32] w-6 h-6'
									/>
								</div>
								<div>
									<div className='text-sm font-semibold text-[#0B132A]'>
										{m.title}
									</div>
									<div className='text-sm text-[#6B7280] mt-1'>{m.detail}</div>
								</div>
							</div>
						))}
					</div>

					<div className='mt-8 text-sm text-[#6B7280]'>
						<span className='font-semibold text-[#0B132A]'>Support hours:</span>{' '}
						Mon - Fri, 9 AM - 6 PM
					</div>
				</div>

				{/* Right column - contact form */}
				<div className='bg-[#F7F7F7] rounded-3xl pt-6 p-3 sm:p-6 md:p-8 shadow-sm'>
					<form
						onSubmit={handleSubmit}
						className='space-y-4'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<label className='flex flex-col text-sm text-[#6B7280]'>
								<span className='mb-2'>First name</span>
								<input
									name='firstName'
									value={form.firstName}
									onChange={handleChange}
									placeholder='e.g John'
									className='py-3 px-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E5E7EB]'
								/>
							</label>

							<label className='flex flex-col text-sm text-[#6B7280]'>
								<span className='mb-2'>Last name</span>
								<input
									name='lastName'
									value={form.lastName}
									onChange={handleChange}
									placeholder='e.g Brown'
									className='py-3 px-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E5E7EB]'
								/>
							</label>
						</div>

						<label className='flex flex-col text-sm text-[#6B7280]'>
							<span className='mb-2'>Phone number</span>
							<div className='flex items-center gap-1 sm:gap-3'>
								<div className='flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-3 py-2'>
									<select
										aria-label='Select country'
										value={country}
										onChange={(e) => handleCountryChange(e.target.value)}
										className='appearance-none bg-transparent text-sm outline-none'>
										{countryOptions.map((c) => (
											<option
												key={c.code}
												value={c.code}>
												{c.flag} {c.dial}
											</option>
										))}
									</select>
								</div>

								<input
									name='phone'
									value={form.phone}
									onChange={handleChange}
									placeholder='Phone number'
									className='flex-1 py-3 px-4 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#E5E7EB]'
								/>
							</div>
						</label>

						<label className='flex flex-col text-sm text-[#6B7280]'>
							<span className='mb-2'>Message</span>
							<textarea
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Write your message here'
								rows={6}
								className='py-3 px-4 rounded-lg border border-gray-200 bg-white resize-none focus:outline-none focus:ring-1 focus:ring-[#E5E7EB]'
							/>
						</label>

						<div className='pt-2'>
							<button
								type='submit'
								className='bg-[#FAAA32] text-[#081726] font-semibold py-3 px-8 rounded-full shadow-[0px_4px_0px_0px_#0B132A] transition-transform'>
								Send message
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};

export default ContactUsPage;
