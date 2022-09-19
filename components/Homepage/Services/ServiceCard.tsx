import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../../../styles/Services.module.css';
import ArrowRight from '../../../public/icons/arrow-right-small.png';

function ServiceCard({ image, title }: { image: StaticImageData; title: string }) {
	return (
		<div className='flex flex-col max-w-[300px]'>
			<Image src={image} alt={title} objectFit='contain' />
			<h3 className={`mt-6 mb-3 ${styles.cardTitle}`}>{title}</h3>
			<p className={`mb-5 ${styles.cardText}`}>
				Learning curve network effects return on investment.
			</p>
			<button className={styles.cardButton}>
				<span>Explore page</span>
				<Image src={ArrowRight} alt='Arrow' />
			</button>
		</div>
	);
}

export default ServiceCard;
