import Image from 'next/image';
import React from 'react';
import Image1 from '../../public/images/about/values/image1.png';
import Image2 from '../../public/images/about/values/image2.png';
import Image3 from '../../public/images/about/values/image3.png';

function ValuesSection() {
	return (
		<div className='pl-[5vw] pr-[5vw] pt-[122.5px] pb-[123px] blue-wallpaper'>
			<div className='reveal'>
				<div className='flex justify-center'>
					<div className='max-w-[842px]'>
						<h2 className='text-white text-xl mb-3'>Our values</h2>
						<p className='mb-[30px] text-5xl font-[Manrope] text-white'>Things in we believe</p>
						<p className='text-[#F1F1F1] text-xl'>
							Conversion angel investor entrepreneur first mover advantage. Handshake infographic
							mass market crowdfunding iteration. Traction stock user experience deployment beta
							innovator incubator focus.
						</p>
						<div className='flex flex-row gap-[50px] flex-wrap mt-[72px]'>
							<Image src={Image1} alt='' />
							<div className='flex flex-col gap-[15px] max-w-[602px]'>
								<span className='text-white text-xl font-[Manrope]'>We are committed.</span>
								<span className='text-[#F1F1F1] text-xl'>
									Conversion angel investor entrepreneur first mover advantage. Handshake
									infographic mass market crowdfunding iteration.
								</span>
							</div>
						</div>
						<div className='flex flex-row gap-[50px] flex-wrap mt-[72px]'>
							<Image src={Image2} alt='' />
							<div className='flex flex-col gap-[15px] max-w-[602px]'>
								<span className='text-white text-xl font-[Manrope]'>We are responsible.</span>
								<span className='text-[#F1F1F1] text-xl'>
									Conversion angel investor entrepreneur first mover advantage. Handshake
									infographic mass market crowdfunding iteration.
								</span>
							</div>
						</div>
						<div className='flex flex-row gap-[50px] flex-wrap mt-[72px]'>
							<Image src={Image3} alt='' />
							<div className='flex flex-col gap-[15px] max-w-[602px]'>
								<span className='text-white text-xl font-[Manrope]'>We aim for progress.</span>
								<span className='text-[#F1F1F1] text-xl'>
									Conversion angel investor entrepreneur first mover advantage. Handshake
									infographic mass market crowdfunding iteration.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ValuesSection;
