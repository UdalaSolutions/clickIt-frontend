'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const prizes = [
	{ label: 'iPhone 17 Pro', backgroundColor: '#FF875C', labelColor: '#4D4D4D' },
	{ label: 'Try Again!', backgroundColor: '#FAA95A', labelColor: '#4D4D4D' },
	{ label: 'Apple Macbook', backgroundColor: '#FF875C', labelColor: '#4D4D4D' },
	{
		label: 'Infinix Note 10',
		backgroundColor: '#FAA95A',
		labelColor: '#4D4D4D',
	},
	{ label: 'Try Again!', backgroundColor: '#FF875C', labelColor: '#4D4D4D' },
	{
		label: 'Oraimo Headset',
		backgroundColor: '#FAA95A',
		labelColor: '#4D4D4D',
	},
	{ label: 'Apple Tab', backgroundColor: '#FF875C', labelColor: '#4D4D4D' },
	{
		label: 'Itel Power Bank',
		backgroundColor: '#FAA95A',
		labelColor: '#4D4D4D',
	},
];

// Star SVG component
function Star({ size = 14, color = 'white' }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill={color}
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M12 2L13.8 8.6H20.6L15 12.8L16.8 19.4L12 15.2L7.2 19.4L9 12.8L3.4 8.6H10.2L12 2Z' />
		</svg>
	);
}

// Renders stars evenly around a circle, sitting in the orange ring
function WheelStars({ wheelSize }) {
	const numStars = 8;

	// The spin-wheel library draws the wheel at radius: 0.92 of the container.
	// So the actual coloured wheel fills a circle of radius = wheelSize/2 * 0.92.
	// The orange div background is visible in the ring between that inner edge and the container edge.
	// We want the stars centred in that orange ring.
	const innerRadius = (wheelSize / 2) * 0.92; // where the wheel segments end
	const outerRadius = wheelSize / 2; // edge of the round div
	const starRadius = (innerRadius + outerRadius) / 2; // middle of the orange ring

	const center = wheelSize / 2;
	// Star size scales with the ring thickness
	const ringThickness = outerRadius - innerRadius;
	const starSize = Math.max(8, Math.round(ringThickness * 0.75));

	return (
		<>
			{Array.from({ length: numStars }).map((_, i) => {
				const angle = (i / numStars) * 2 * Math.PI - Math.PI / 2;
				const x = center + starRadius * Math.cos(angle);
				const y = center + starRadius * Math.sin(angle);
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: x,
							top: y,
							transform: 'translate(-50%, -50%)',
							pointerEvents: 'none',
							zIndex: 20,
						}}>
						<Star
							size={starSize}
							color='white'
						/>
					</div>
				);
			})}
		</>
	);
}

export default function LotteryWheel() {
	const containerRef = useRef(null);
	const wheelRef = useRef(null);

	const [isSpinning, setIsSpinning] = useState(false);
	const [result, setResult] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [wheelSize, setWheelSize] = useState(320);

	// Track actual rendered wheel size for star/circle positioning
	useEffect(() => {
		const updateSize = () => {
			if (containerRef.current) {
				setWheelSize(containerRef.current.offsetWidth);
			}
		};
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	// Mount the spin-wheel onto the DOM container
	useEffect(() => {
		let wheel = null;

		import('spin-wheel').then(({ Wheel }) => {
			if (!containerRef.current) return;

			wheel = new Wheel(containerRef.current, {
				items: prizes,
				itemLabelFont: 'Inter, serif',
				itemLabelFontSizeMax: 16,
				itemLabelRadius: 0.82,
				itemLabelRadiusMax: 0.2,
				itemLabelRotation: 180,
				itemLabelAlign: 'left',
				itemLabelColors: ['#fff'],
				lineColor: 'transparent',
				lineWidth: 0,
				borderColor: 'transparent',
				borderWidth: 0,
				radius: 0.92,
				rotationResistance: -40,
				isInteractive: false,
				pointerAngle: 0,

				onRest: (event) => {
					const won = prizes[event.currentIndex];
					setResult(won.label);
					setShowResult(true);
					setIsSpinning(false);
				},
			});

			wheelRef.current = wheel;
		});

		return () => {
			if (wheelRef.current) {
				wheelRef.current.remove();
				wheelRef.current = null;
			}
		};
	}, []);

	const handleSpin = () => {
		if (isSpinning || !wheelRef.current) return;

		const winningIndex = Math.floor(Math.random() * prizes.length);
		setIsSpinning(true);
		setShowResult(false);
		setResult(null);

		wheelRef.current.spinToItem(winningIndex, 4000, true, 3, 1);
	};

	const isLoss = result?.toLowerCase().includes('try again');

	return (
		<div className='min-h-screen bg-white flex flex-col'>
			<main className='flex-1 flex flex-col items-center justify-center relative overflow-hidden pb-16 mt-24'>
				{/* Result modal */}
				{showResult && (
					<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
						<div className='bg-white rounded-3xl p-12 text-center shadow-2xl max-w-sm w-[90%] animate-[fadeIn_0.3s_ease]'>
							{isLoss ?
								<>
									<div className='text-5xl mb-3'>😔</div>
									<h2 className='text-3xl font-bold text-gray-900 mb-2'>
										Try Again!
									</h2>
									<p className='text-gray-500 text-sm mb-7'>
										Give it another shot and spin to win.
									</p>
									<button
										className='bg-gradient-to-br from-[#F5A623] to-[#e8920a] text-white rounded-full px-12 py-3.5 font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer'
										onClick={() => {
											setShowResult(false);
											setResult(null);
										}}>
										Spin to retry
									</button>
								</>
							:	<>
									<div className='text-5xl mb-3'>🎉</div>
									<h2 className='text-3xl font-bold text-gray-900 mb-2'>
										You Won!
									</h2>
									<p className='text-[#E8603C] text-xl font-bold mb-7'>
										{result}
									</p>
									<button
										className='bg-gradient-to-br from-[#F5A623] to-[#e8920a] text-white rounded-full px-12 py-3.5 font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer'
										onClick={() => {
											setShowResult(false);
											setResult(null);
										}}>
										Spin Again
									</button>
								</>
							}
						</div>
					</div>
				)}

				{/* Wheel area */}
				<div className='relative z-10 flex flex-col items-center'>
					{/* Pointer arrow at top */}
					<div className='z-20 mb-[-25px] md:mb-[-50px]'>
						<Image
							src='/pointer-arrow.svg'
							alt='pointer'
							width={80}
							height={69.28}
							className='h-[39.49px] w-[45.6px] md:w-[80px] md:h-[69.28px]'
						/>
					</div>

					{/* Wheel wrapper */}
					<div className='relative'>
						{/* spin-wheel canvas — orange bg is the visible border ring */}
						<div
							ref={containerRef}
							className='w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] bg-[#f5614e] rounded-full'
						/>

						{/* Stars overlaid in the orange ring */}
						<div
							className='absolute inset-0 pointer-events-none'
							style={{ width: wheelSize, height: wheelSize }}>
							<WheelStars wheelSize={wheelSize} />
						</div>

						{/* Center circle */}
						<div
							className='absolute pointer-events-none border'
							style={{
								width: wheelSize * 0.07,
								height: wheelSize * 0.07,
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								borderRadius: '50%',
								backgroundColor: 'white',
								zIndex: 30,
							}}
						/>
					</div>
				</div>

				{/* Spin button */}
				<button
					onClick={handleSpin}
					disabled={isSpinning}
					className={`mt-12 w-full bg-primary text-black font-semibold py-4 rounded-full transition cursor-pointer shadow-[0px_4px_0px_0px_#0B132A] max-w-[280px]
            ${isSpinning ? 'opacity-60 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:scale-105'}`}>
					{isSpinning ? 'Spinning...' : 'Spin'}
				</button>
			</main>
		</div>
	);
}
