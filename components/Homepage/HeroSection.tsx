import React from 'react';
import Navbar from '../layout/Navbar/Navbar';
import styles from '../../styles/HeroSection.module.css';
import HeroImage from '../../public/images/hero/hero.png';
import Image from 'next/image';

function HeroSection() {
	return (
		<div className={`pl-[5vw] pr-[5vw] pt-[56px] pb-[64px] ${styles.container}`}>
			<Navbar />
			<div className='flex flex-row flex-wrap pt-[65px] pb-[56px] items-center gap-5'>
				<div className='text-white md:flex-[60%] sm:flex-[100%] flex flex-col lg:items-start sm:items-center'>
					<Image src={HeroImage} alt='Boldo Product' objectFit='contain' />
				</div>
				<div className='text-white md:flex-[36%] sm:flex-[100%] flex flex-col lg:items-end sm:items-center'>
					<Image src={HeroImage} alt='Boldo Product' objectFit='contain' />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
