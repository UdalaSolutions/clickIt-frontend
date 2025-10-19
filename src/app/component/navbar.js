import Image from 'next/image';

const Navbar = () => {
	return (
		<>
			<header>
				<nav className='flex items-center justify-between bg-white p-4 shadow-sm fixed top-0 left-0 right-0 z-50 w-full px-8'>
					<div className=''>
						<Image
							src='/clickit-logo.svg'
							alt='Logo'
							width={163}
							height={50}
						/>
					</div>
					<ul className='flex items-center gap-3'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
export default Navbar;
