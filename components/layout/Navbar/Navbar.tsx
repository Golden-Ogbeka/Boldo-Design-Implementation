import React from 'react';
import styles from '../../../styles/Navbar.module.css';
import Logo from '../../../public/images/brand/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<nav className={styles.container}>
			<Link href='/'>
				<div className={styles.logo}>
					<Image src={Logo} alt='Boldo' className='cursor-pointer' />
				</div>
			</Link>
			<div className={styles.linkContainer}>
				<Link href='#product'>
					<span className={styles.navLink + ' desktopLink'}>Product</span>
				</Link>
				<Link href='#services'>
					<span className={styles.navLink}>Services</span>
				</Link>
				<Link href='/about'>
					<span className={styles.navLink}>About</span>
				</Link>
				<button className={styles.navButton + ' desktopLink'}>Log In</button>
			</div>
		</nav>
	);
}

export default Navbar;
