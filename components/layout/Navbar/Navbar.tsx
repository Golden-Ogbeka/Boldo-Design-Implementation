import React from 'react';
import styles from '../../../styles/Navbar.module.css';
import Logo from '../../../public/images/brand/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<div className={styles.container}>
			<Link href='/'>
				<div className={styles.logo}>
					<Image src={Logo} alt='Boldo' className='cursor-pointer' />
				</div>
			</Link>
			<div className={styles.linkContainer}>
				<a href='#product' className={styles.navLink + ' desktopLink'}>
					Product
				</a>
				<a href='#services' className={styles.navLink}>
					Services
				</a>
				<Link href='/about'>
					<span className={styles.navLink}>About</span>
				</Link>
				<button className={styles.navButton + ' desktopLink'}>Log In</button>
			</div>
		</div>
	);
}

export default Navbar;
