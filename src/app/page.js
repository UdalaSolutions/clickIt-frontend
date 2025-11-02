import Hero from './component/landing/hero';
import HowToPlay from './component/landing/howToPlay';
import LuckyWinners from './component/landing/luckyWinners';
import FAQs from './component/landing/FAQs';

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
