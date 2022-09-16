import React from 'react';
import styles from '../../../styles/Navbar.module.css';
import Logo from '../../../public/images/brand/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src={Logo} alt='Boldo' />
			</div>
			<div className={styles.linkContainer}>
				<a href='#product' className={styles.navLink}>
					Product
				</a>
				<a href='#services' className={styles.navLink}>
					Services
				</a>
				<Link href='/about'>
					<span className={styles.navLink}>About</span>
				</Link>
				<button className={styles.navButton}>Log In</button>
			</div>
		</div>
	);
}

export default Navbar;
