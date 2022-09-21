import React from 'react';
import Navbar from '../layout/Navbar/Navbar';
import Image1 from '../../public/images/about/main/image1.png';
import Image2 from '../../public/images/about/main/image2.png';
import Image3 from '../../public/images/about/main/image3.png';
import Image4 from '../../public/images/about/main/image4.png';
import Image5 from '../../public/images/about/main/image5.png';
import Image from 'next/image';

function MainSection() {
	return (
		<div className='customized-blue-wallpaper pl-[5vw] pr-[5vw] pt-[56px] lg:pb-0 pb-[56px]'>
			<Navbar />
			<div className='pt-[72.5px] flex flex-col justify-center items-center '>
				<h1 className='text-[#F1F1F1] text-xl m-0'>About</h1>
				<p className='text-[#FFFFFF] text-[64px] text-center font-[Manrope] max-w-[842px] mt-3 mb-[17.5px]'>
					We love to make great things, things that matter.
				</p>
				<p className='text-[#F1F1F1]  text-center max-w-[745.37px]'>
					Funding handshake buyer business-to-business metrics iPad partnership. First mover
					advantage innovator success deployment non-disclosure.
				</p>
			</div>
			<aside className='mt-[70px]'>
				<div className='lg:flex flex-row gap-[50px] justify-center hidden'>
					<div className='flex flex-col gap-[40px]'>
						<Image src={Image1} alt='' />
						<Image src={Image2} alt='' />
					</div>
					<div>
						<Image src={Image3} alt='' />
					</div>
					<div className='flex flex-col gap-[40px]'>
						<Image src={Image4} alt='' />
						<Image src={Image5} alt='' />
					</div>
				</div>
			</aside>
		</div>
	);
}

export default MainSection;
