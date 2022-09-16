import React from 'react';
import styles from '../../styles/Services.module.css';
import ServiceCard from './ServiceCard';
import Image1 from '../../public/images/services/cool-1.png';
import Image2 from '../../public/images/services/cool-2.png';
import Image3 from '../../public/images/services/cool-3.png';

function Section1() {
	return (
		<div className={styles.section1}>
			<h2>Our Services</h2>
			<p>Handshake infographic mass market crowdfunding iteration.</p>
			<div className='flex flex-row items-center lg:justify-around flex-wrap gap-10 w-full sm:justify-center'>
				<ServiceCard image={Image1} title='Cool feature title' />
				<ServiceCard image={Image2} title='Even cooler feature' />
				<ServiceCard image={Image3} title='Cool feature title' />
			</div>
		</div>
	);
}

export default Section1;
