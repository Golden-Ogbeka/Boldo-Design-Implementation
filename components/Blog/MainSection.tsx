import React from 'react';
// import styles from '../../styles/Blog.module.css';
import Navbar from '../layout/Navbar/Navbar';
import MainImage from '../../public/images/blog/page/mainImage.png';
import Avatar from '../../public/images/blog/avatar-1.png';
import Image from 'next/image';

function MainSection() {
	return (
		<section className='pl-[5vw] pr-[5vw] pt-[56px]'>
			<Navbar type='alternate' />
			<div className='pt-[72.5px] flex flex-col justify-center items-center gap-3'>
				<h1 className='text-[#0A2640] text-xl m-0'>Blog</h1>
				<p className='text-[#0A2640] text-[64px] text-center font-[Manrope]'>
					Thoughts and words
				</p>
			</div>
			<div className='pt-[67.5px] flex flex-row items-center justify-center lg:justify-between gap-10 flex-wrap lg:flex-nowrap'>
				<Image src={MainImage} alt='Blog' />
				<div className='flex flex-col justify-center lg:justify-start items-center lg:items-start'>
					<div className='flex flex-row gap-3'>
						<span className='text-[#0A2640] font-bold'>Category</span>
						<span className='text-[#777777]'>November 22, 2021</span>
					</div>
					<p className='font-[Manrope] text-5xl lg:max-w-[50vw] text-center lg:text-left mt-3'>
						Pitch termsheet backing validation focus release.
					</p>
					<div className='flex flex-row items-center gap-3 mt-5'>
						<Image src={Avatar} alt='Avatar' />
						<span>Chandler Bing</span>
					</div>
				</div>
			</div>
			<hr className='mt-[72px]  border-[#0A2640]' />
		</section>
	);
}

export default MainSection;
