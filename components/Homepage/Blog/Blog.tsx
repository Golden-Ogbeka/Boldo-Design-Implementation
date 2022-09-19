import React from 'react';
import styles from '../../../styles/Services.module.css';
import BlogCard from './BlogCard';
import Image1 from '../../../public/images/blog/article-1.png';
import Image2 from '../../../public/images/blog/article-2.png';
import Image3 from '../../../public/images/blog/article-3.png';
import Avatar1 from '../../../public/images/blog/avatar-1.png';
import Avatar2 from '../../../public/images/blog/avatar-2.png';
import Avatar3 from '../../../public/images/blog/avatar-3.png';
import Link from 'next/link';

function Blog() {
	return (
		<div className={styles.section1 + ' pb-[124px] justify-around reveal'}>
			<h2>Our Blog</h2>
			<p>Value proposition accelerator product management venture</p>
			<div className='flex flex-row items-center lg:justify-around flex-wrap gap-10 w-full justify-center'>
				<BlogCard
					image={Image1}
					description='Pitch termsheet backing validation focus release.'
					avatar={Avatar1}
					avatarName='Chandler Bing'
				/>
				<BlogCard
					image={Image2}
					description='Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'
					avatar={Avatar2}
					avatarName='Rachel Green'
				/>
				<BlogCard
					image={Image3}
					description='Beta prototype sales iPad gen-z marketing network effects value proposition'
					avatar={Avatar3}
					avatarName='Monica Geller'
				/>
			</div>
			<Link href='/blog'>
				<button className={styles.blogButton}>Load more</button>
			</Link>
		</div>
	);
}

export default Blog;
