import Image from 'next/image';
import React from 'react';
import CustomerImage from '../../public/images/services/customer-1.png';
import styles from '../../styles/Services.module.css';
import CheckIcon from '../../public/icons/check.png';

function Section2() {
	return (
		<div className='pt-[197px] pl-[5vw] pr-[5vw] flex flex-wrap md:flex-nowrap items-center gap-10 lg:justify-between justify-center reveal'>
			<Image src={CustomerImage} alt='Customer' objectFit='contain' />
			<div className={`flex flex-col`}>
				<h3 className={styles.servicesHeader}>
					We connect our customers with the best, and help them keep up-and stay open.
				</h3>
				<ul className='list-none mt-[41px]'>
					<li className='flex flex-row items-center gap-[27px]'>
						<div className='w-9 h-9 rounded-[18px] bg-[#0A2640] flex justify-center items-center'>
							<Image src={CheckIcon} alt='Success' />
						</div>
						<span className={styles.listText}>We connect our customers with the best.</span>
					</li>
					<li className='flex flex-row items-center gap-[27px] mt-[25px]'>
						<div className='w-9 h-9 rounded-[18px] bg-[#0A2640] flex justify-center items-center'>
							<Image src={CheckIcon} alt='Success' />
						</div>
						<span className={styles.listText}>Advisor success customer launch party.</span>
					</li>
					<li className='flex flex-row items-center gap-[27px] mt-[25px]'>
						<div className='w-9 h-9 rounded-[18px] bg-[#0A2640] flex justify-center items-center'>
							<Image src={CheckIcon} alt='Success' />
						</div>
						<span className={styles.listText}>Business-to-consumer long tail.</span>
					</li>
				</ul>
				<button className={styles.servicesButton}>Start now</button>
			</div>
		</div>
	);
}

export default Section2;
