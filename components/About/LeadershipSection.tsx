import Image from 'next/image';
import React from 'react';
import Image1 from '../../public/images/about/leadership/image1.png';
import Image2 from '../../public/images/about/leadership/image2.png';
import Image3 from '../../public/images/about/leadership/image3.png';

function LeadershipSection() {
	return (
		<div className='pl-[5vw] pr-[5vw] pt-[98.5px] pb-[120px] '>
			<div className='reveal'>
				<div className='flex justify-center'>
					<div className='max-w-[842px]'>
						<h2 className='text-[#777777] text-xl mb-3'>Our team</h2>
						<p className='mb-[30px] text-5xl font-[Manrope]'>The leadership team</p>
						<p className='text-[#777777] text-xl'>
							Conversion angel investor entrepreneur first mover advantage. Handshake infographic
							mass market crowdfunding iteration. Traction stock user experience deployment beta
							innovator incubator focus.
						</p>
					</div>
				</div>
				<div className='flex flex-row gap-[51px] justify-center flex-wrap mt-[52px]'>
					<div className='flex flex-col '>
						<Image src={Image1} alt='' />
						<p className='font-[Manrope] text-[28px] mt-6'>Michael Scott</p>
						<p className='font-[Manrope] text-[#777777] mt-3'>General Manager</p>
					</div>
					<div className='flex flex-col '>
						<Image src={Image2} alt='' />
						<p className='font-[Manrope] text-[28px] mt-6'>Dwight Schrute</p>
						<p className='font-[Manrope] text-[#777777] mt-3'>General Manager</p>
					</div>
					<div className='flex flex-col '>
						<Image src={Image3} alt='' />
						<p className='font-[Manrope] text-[28px] mt-6'>Pam Beetsley</p>
						<p className='font-[Manrope] text-[#777777] mt-3'>General Manager</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeadershipSection;
