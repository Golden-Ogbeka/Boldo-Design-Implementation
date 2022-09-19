import Image from 'next/image';
import React from 'react';
import Wallpaper from '../../public/images/testimonial/wallpaper.png';
import ArrowIcon from '../../public/icons/chevron-down.png';

function CustomerSection() {
	return (
		<section className='pl-[5vw] pr-[5vw] pb-[156px] pt-[124px]'>
			<div className='reveal'>
				<Image src={Wallpaper} alt='Our customers' objectFit='cover' layout='responsive' />
				<div className='flex flex-row flex-wrap gap-10 xl:justify-between  justify-center items-start mt-[56px]'>
					<p className='heading max-w-[500px]'>
						We connect our customers with the best, and help them keep up-and stay open.
					</p>
					<ul>
						<li className='flex flex-row items-center justify-between w-[500px] max-w-full gap-5 pb-4 border-b-2'>
							<span className='text-[20px]'>We connect our customers with the best.</span>
							<div className='w-7 h-7 rounded-[18px] bg-[#0A2640] flex justify-center items-center '>
								<Image src={ArrowIcon} alt='Success' />
							</div>
						</li>
						<li className='flex flex-row items-center justify-between w-[500px] max-w-full gap-5 pb-4 border-b-2 mt-8'>
							<span className='text-[20px]'>Android research & development rockstar? </span>
							<div className='w-7 h-7 rounded-[18px] bg-[#0A2640] flex justify-center items-center '>
								<Image src={ArrowIcon} alt='Success' />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default CustomerSection;
