'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
	const pathname = usePathname();

	// If the current route includes "play-now", do NOT show the footer
	const hideFooter = pathname.includes('play-now');

	if (hideFooter) return null;

	return <Footer />;
}
