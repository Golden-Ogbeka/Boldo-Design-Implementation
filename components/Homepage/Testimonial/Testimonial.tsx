import Image from 'next/image';
import React from 'react';
import ArrowLeft from '../../../public/icons/arrow-left.png';
import ArrowRight from '../../../public/icons/arrow-right.png';
import HorizontalSlider from '../../reusable/HorizontalSlider';
import TestimonialItem from './TestimonialItem';

function Testimonial() {
	return (
		<section
			id='testimonial'
			className='bg-[#0A2640] pt-[96px] pb-[96px] pl-[5vw] pr-[5vw]'
		>
			<div className='reveal'>
				<div className='flex flex-row flex-wrap gap-10 items-end justify-between mb-[72px]'>
					<h2
						className='heading max-w-[716px]'
						style={{
							color: '#fff',
						}}
					>
						An enterprise template to ramp up your company website
					</h2>
					<div className='flex flex-row items-center gap-7'>
						<button className='w-[72px] h-[72px] rounded-[36px] bg-white flex items-center justify-center hover:bg-[#65e4a3]'>
							<Image src={ArrowLeft} alt='Left' />
						</button>
						<button className='w-[72px] h-[72px] rounded-[36px] bg-white flex items-center justify-center hover:bg-[#65e4a3]'>
							<Image src={ArrowRight} alt='Right' />
						</button>
					</div>
				</div>
				<HorizontalSlider id='testimonialItems'>
					<TestimonialItem />
				</HorizontalSlider>
			</div>
		</section>
	);
}

export default Testimonial;
