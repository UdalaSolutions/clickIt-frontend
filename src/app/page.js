import Image from 'next/image';
import Hero from '@/app/component/landing/hero';
import HowToPlay from '@/app/component/landing/howToPlay';
import LuckyWinners from '@/app/component/landing/luckyWinners';
import FAQs from '@/app/component/landing/FAQs';

export default function Home() {
	return (
		<div>
			<Hero />
			<HowToPlay />
			<LuckyWinners />
			<FAQs />
		</div>
	);
}
