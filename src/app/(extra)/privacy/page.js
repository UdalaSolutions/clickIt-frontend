import { sections } from '../../utils/utils';

export default function PrivacyPolicyPage() {
	return (
		<div className='min-h-screen  px-6'>
			<div className='max-w-4xl mx-auto'>
				{/* Page Header */}
				<div className='mb-18'>
					<h1 className='text-[32px] font-bold text-[#0B132A] mb-4 text-center'>
						Privacy policy
					</h1>
					<p className='text-[#3D3D3D] text-center'>
						We keep your info safe always
					</p>
				</div>

				{/* Auto-Mapped Sections */}
				<div className='space-y-10'>
					{sections.map((section, index) => (
						<section key={index}>
							<h2 className='text-2xl font-bold text-[#0B132A] mb-4'>
								{section.title}
							</h2>

							{/* Intro paragraph */}
							{section.intro && (
								<p className='text-gray-700 leading-relaxed mb-3'>
									{section.intro}
								</p>
							)}

							{/* Regular paragraph content */}
							{section.content &&
								section.content.map((p, idx) => (
									<p
										key={idx}
										className='text-gray-700 leading-relaxed mb-4'>
										{p}
									</p>
								))}

							{/* Bullet list */}
							{section.list && (
								<ul className='space-y-2 text-gray-700 ml-4'>
									{section.list.map((item, idx) => (
										<li key={idx}>• {item}</li>
									))}
								</ul>
							)}
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
