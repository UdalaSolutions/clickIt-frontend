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

	// Detect scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
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
					<Image
						src='/clickit-logo.svg'
						alt='Logo'
						width={163}
						height={50}
						className='cursor-pointer w-[120px] h-10 md:w-[163px] md:h-12.5'
					/>
				</Link>

				{/* Hamburger Icon */}
				<button
					className='md:hidden bg-[#FAAA321A] h-12.5 w-12.5 rounded-full flex items-center justify-center cursor-pointer'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'>
					<Icon
						icon={menuOpen ? 'mdi:close' : 'mdi:menu'}
						className='text-[#faaa32] h-6 w-6'
					/>
				</button>

				{/* Nav Links (Desktop) */}
				<ul className='hidden md:flex items-center gap-6'>
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`hover:text-black transition-colors ${
									pathname === link.href
										? 'border-b-2 border-black text-black font-medium pb-1'
										: 'text-gray-700'
								}`}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className='md:hidden bg-white shadow-md border-t'>
					<ul className='flex flex-col gap-4 px-6 py-4'>
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className={`block py-2 ${
										pathname === link.href
											? 'text-black font-medium'
											: 'text-black/90'
									}`}
									onClick={() => setMenuOpen(false)}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Navbar;
