import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/images/brand/logo-alt.png';
import styles from '../../../styles/Footer.module.css';

function Footer() {
	return (
		<footer className='flex flex-row flex-wrap gap-10 items-start justify-between pl-[5vw] pr-[15vw] pt-[100px] pb-[117px]'>
			<div className={'flex flex-col items-start ' + styles.logoContainer}>
				<Image src={Logo} alt='Boldo' />
				<p>
					Social media validation business model canvas graphical user interface launch party
					creative facebook iPad twitter.
				</p>
				<span>All rights reserved.</span>
			</div>
			<div className={'flex flex-col items-start'}>
				<h6 className={styles.listHeader}>Landings</h6>
				<ul className='list-none mt-8'>
					<li className={styles.listLink}>
						<Link href='/'>Home</Link>
					</li>
					<li className={styles.listLink + ' mt-5'}>
						<Link href='/#product'>Products</Link>
					</li>
					<li className={styles.listLink + ' mt-5'}>
						<Link href='/#services'>Services</Link>
					</li>
				</ul>
			</div>
			<div className={'flex flex-col items-start'}>
				<h6 className={styles.listHeader}>Company</h6>
				<ul className='list-none mt-8'>
					<li className={styles.listLink}>
						<Link href='/'>Home</Link>
					</li>
					<li className={styles.listLink + ' mt-5 flex flex-row items-center gap-5'}>
						<Link href='/careers'>Careers</Link>
						<aside className='m-0 flex justify-center items-center bg-[#65E4A3] pt-[1px] pb[1px] pl-[14px] pr-[14px] rounded-[120px]'>
							<span className={styles.hiringText}>Hiring!</span>
						</aside>
					</li>
					<li className={styles.listLink + ' mt-5'}>
						<Link href='/#services'>Services</Link>
					</li>
				</ul>
			</div>
			<div className={'flex flex-col items-start'}>
				<h6 className={styles.listHeader}>Resources</h6>
				<ul className='list-none mt-8'>
					<li className={styles.listLink}>
						<Link href='/blog'>Blog</Link>
					</li>
					<li className={styles.listLink + ' mt-5'}>
						<Link href='/#product'>Products</Link>
					</li>
					<li className={styles.listLink + ' mt-5'}>
						<Link href='/#services'>Services</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
