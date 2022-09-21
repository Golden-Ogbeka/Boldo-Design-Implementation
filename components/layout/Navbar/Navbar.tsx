import React from 'react';
import styles from '../../../styles/Navbar.module.css';
import Logo from '../../../public/images/brand/logo.png';
import LogoAlt from '../../../public/images/brand/logo-alt.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar({ type = 'normal' }: { type: 'normal' | 'alternate' }) {
	return (
		<nav className={styles.container}>
			<Link href='/'>
				<div className={styles.logo}>
					<Image
						src={type === 'normal' ? Logo : LogoAlt}
						alt='Boldo'
						className='cursor-pointer'
					/>
				</div>
			</Link>
			<div className={styles.linkContainer}>
				<Link href='#product'>
					<span
						className={type === 'normal' ? styles.navLink : styles.navLinkAlt + ' desktopLink'}
					>
						Product
					</span>
				</Link>
				<Link href='#services'>
					<span className={type === 'normal' ? styles.navLink : styles.navLinkAlt}>
						Services
					</span>
				</Link>
				<Link href='/about'>
					<span className={type === 'normal' ? styles.navLink : styles.navLinkAlt}>About</span>
				</Link>
				<button
					className={
						type === 'normal' ? styles.navButton : styles.navButtonAlt + ' desktopLink'
					}
				>
					Log In
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
