import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './component/navbar';
import Footer from './component/Footer';

const interSans = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Click It | Win Big with Our Trusted Online Raffle Platform',
	description:
		'Join Click It to enter fun, secure raffles and stand a chance to win exciting prizes every week. Simple, transparent, and rewarding!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${interSans.className} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
