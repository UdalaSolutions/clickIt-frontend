'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { navLinks } from '../utils/utils';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	// Detect scroll for navbar background
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-white shadow-md' : 'bg-transparent'
			}`}>
			<nav className='flex items-center justify-between px-6 md:px-10 py-4'>
				{/* Logo */}
				<Link href='/'>
					<div className='w-[120px] md:w-[163px]'>
						<Image
							src='/clickit-logo.svg'
							alt='Logo'
							width={163}
							height={50}
							className='w-full h-auto'
							priority
						/>
					</div>
				</Link>

				{/* Mobile Toggle */}
				<button
					className='md:hidden bg-[#FAAA321A] h-12 w-12 rounded-full flex items-center justify-center'
					onClick={() => setMenuOpen(!menuOpen)}>
					<Icon
						icon={menuOpen ? 'mdi:close' : 'mdi:menu'}
						className='text-[#faaa32] h-6 w-6'
					/>
				</button>

				{/* Desktop Nav */}
				<ul className='hidden md:flex items-center gap-6'>
					{navLinks.map((link) => {
						const isActive = pathname === link.href;

						return (
							<li
								key={link.href}
								className='relative flex flex-col items-center'>
								{/* Smooth Overline */}
								<div
									className={`absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-full bg-[#1A1A1A] transition-transform duration-300 origin-center
			${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>

								<Link
									href={link.href}
									className={`px-4 pt-2 transition-all ${
										isActive ? 'font-bold text-[#1A1A1A]' : 'text-[#1A1A1A]'
									}`}>
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className='md:hidden bg-white shadow-md border-t animate-slideDown'>
					<ul className='flex flex-col gap-4 px-6 py-4'>
						{navLinks.map((link) => {
							const isActive = pathname === link.href;

							return (
								<li
									key={link.href}
									className='animate-fadeIn'>
									<Link
										href={link.href}
										className={`block py-2 ${
											isActive ? 'text-black font-medium' : 'text-black/80'
										}`}
										onClick={() => setMenuOpen(false)}>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Navbar;
