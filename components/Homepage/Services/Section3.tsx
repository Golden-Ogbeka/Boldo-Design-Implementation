import Image from 'next/image';
import React from 'react';
import CustomerImage from '../../../public/images/services/customer-2.png';
import styles from '../../../styles/Services.module.css';
import FeatherIcon from '../../../public/icons/feather.png';
import EyeIcon from '../../../public/icons/eye.png';
import SunIcon from '../../../public/icons/sun.png';

function Section3() {
	return (
		<div className='pt-[197px] pl-[5vw] pr-[5vw] flex flex-wrap md:flex-nowrap items-center gap-10 lg:justify-between justify-center reveal'>
			<div className={`flex flex-col`}>
				<h3 className={styles.servicesHeader}>
					We connect our customers with the best, and help them keep up-and stay open.
				</h3>
				<ul className='list-none mt-[64px]'>
					<li className={styles.listContainer}>
						<div className={styles.listIcon}>
							<Image src={FeatherIcon} alt='Success' />
						</div>
						<span className={styles.listText}>We connect our customers with the best.</span>
					</li>
					<li className={styles.listContainer + ' mt-6'}>
						<div className={styles.listIcon}>
							<Image src={EyeIcon} alt='Success' />
						</div>
						<span className={styles.listText}>Advisor success customer launch party.</span>
					</li>
					<li className={styles.listContainer + ' mt-6'}>
						<div className={styles.listIcon}>
							<Image src={SunIcon} alt='Success' />
						</div>
						<span className={styles.listText}>Business-to-consumer long tail.</span>
					</li>
				</ul>
			</div>
			<Image src={CustomerImage} alt='Customer' objectFit='contain' />
		</div>
	);
}

export default Section3;
