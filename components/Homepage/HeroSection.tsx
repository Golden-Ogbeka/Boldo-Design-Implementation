import React from 'react';
import Navbar from '../layout/Navbar/Navbar';
import styles from '../../styles/HeroSection.module.css';
import HeroImage from '../../public/images/hero/hero.png';
import Image from 'next/image';
import HorizontalSlider from '../../components/reusable/HorizontalSlider';
import LogoWall1 from '../../public/images/logo-wall/boldo.png';
import LogoWall2 from '../../public/images/logo-wall/presto.png';

function HeroSection() {
	return (
		<div className={`pl-[5vw] pr-[5vw] pt-[56px] pb-[64px] ${styles.container}`}>
			<Navbar />
			<div
				className='flex flex-row flex-wrap pt-[65px] pb-[56px] items-center gap-y-24 gap-x-5'
				id='product'
			>
				<div className='text-white md:flex-[40%] sm:flex-[100%] flex flex-col lg:items-start sm:items-center'>
					<h1 className={styles.mainText}>Save time by building fast with Boldo Template</h1>
					<p className={styles.subText}>
						Funding handshake buyer business-to-business metrics iPad partnership. First mover
						advantage innovator success deployment non-disclosure.
					</p>
					<div className={styles.buttonContainer}>
						<button className={styles.mainButton}>Buy template</button>
						<button className={styles.subButton}>Explore</button>
					</div>
				</div>
				<div className='text-white md:flex-[55%] sm:flex-[100%] flex flex-col lg:items-end sm:items-center'>
					<Image src={HeroImage} alt='Boldo Product' objectFit='contain' />
				</div>
			</div>

			<HorizontalSlider>
				<Image src={LogoWall1} alt='Presto' width={146.51} />
				<Image src={LogoWall2} alt='Boldo' width={146.51} />
			</HorizontalSlider>
		</div>
	);
}

export default HeroSection;
