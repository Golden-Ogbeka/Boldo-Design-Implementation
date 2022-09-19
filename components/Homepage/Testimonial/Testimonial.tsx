import Image from 'next/image';
import React from 'react';
import ArrowLeft from '../../../public/icons/arrow-left.png';
import ArrowRight from '../../../public/icons/arrow-right.png';
import HorizontalSlider from '../../reusable/HorizontalSlider';
import TestimonialItem from './TestimonialItem';
import Avatar1 from '../../../public/images/testimonial/avatar-1.png';
import Avatar2 from '../../../public/images/testimonial/avatar-2.png';
import Avatar3 from '../../../public/images/testimonial/avatar-3.png';

function Testimonial() {
	const moveRight = () => {
		const testimonialSlider: HTMLElement | null =
			document.getElementById('testimonialItems');
		if (!!testimonialSlider) {
			testimonialSlider.scrollLeft += 300;
		}
	};
	const moveLeft = () => {
		const testimonialSlider: HTMLElement | null =
			document.getElementById('testimonialItems');
		if (!!testimonialSlider) {
			testimonialSlider.scrollLeft -= 300;
		}
	};
	return (
		<section
			id='testimonial'
			className='bg-[#0A2640] pt-[96px] pb-[96px] pl-[5vw] pr-[5vw]'
		>
			<div className='reveal'>
				<div className='flex flex-row flex-wrap gap-10 items-end lg:justify-between justify-center mb-[72px]'>
					<h2
						className='heading max-w-[716px] text-center lg:text-left'
						style={{
							color: '#fff',
						}}
					>
						An enterprise template to ramp up your company website
					</h2>
					<div className='flex flex-row items-center gap-7'>
						<button
							className='w-[72px] h-[72px] rounded-[36px] bg-white flex items-center justify-center hover:bg-[#65e4a3] outline-none border-none'
							onClick={moveLeft}
						>
							<Image src={ArrowLeft} alt='Left' />
						</button>
						<button
							className='w-[72px] h-[72px] rounded-[36px] bg-white flex items-center justify-center hover:bg-[#65e4a3] outline-none border-none'
							onClick={moveRight}
						>
							<Image src={ArrowRight} alt='Right' />
						</button>
					</div>
				</div>
				<HorizontalSlider
					id='testimonialItems'
					style={{
						alignItems: 'flex-start',
					}}
				>
					<TestimonialItem
						avatar={Avatar1}
						name='Albus Dumbledore'
						position='Manager @ Howarts'
						testimony='Buyer buzz partner network disruptive non-disclosure agreement business'
					/>
					<TestimonialItem
						avatar={Avatar2}
						name='Severus Snape'
						position='Manager @ Slytherin'
						testimony='Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.'
					/>
					<TestimonialItem
						avatar={Avatar3}
						name='Harry Potter'
						position='Team Leader @ Gryffindor'
						testimony='Release facebook responsive web design business model canvas seed money monetization.'
					/>
					<TestimonialItem
						avatar={Avatar1}
						name='Albus Dumbledore'
						position='Manager @ Howarts'
						testimony='Buyer buzz partner network disruptive non-disclosure agreement business'
					/>
					<TestimonialItem
						avatar={Avatar2}
						name='Severus Snape'
						position='Manager @ Slytherin'
						testimony='Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.'
					/>
					<TestimonialItem
						avatar={Avatar3}
						name='Harry Potter'
						position='Team Leader @ Gryffindor'
						testimony='Release facebook responsive web design business model canvas seed money monetization.'
					/>
				</HorizontalSlider>
			</div>
		</section>
	);
}

export default Testimonial;
