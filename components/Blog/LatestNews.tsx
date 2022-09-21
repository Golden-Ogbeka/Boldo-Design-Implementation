import React from 'react';
import BlogCard from '../Homepage/Blog/BlogCard';
import Image1 from '../../public/images/blog/article-1.png';
import Image2 from '../../public/images/blog/article-2.png';
import Image3 from '../../public/images/blog/article-3.png';
import Avatar1 from '../../public/images/blog/avatar-1.png';
import Avatar2 from '../../public/images/blog/avatar-2.png';
import Avatar3 from '../../public/images/blog/avatar-3.png';
import Link from 'next/link';
import styles from '../../styles/Services.module.css';

function LatestNews() {
	return (
		<section className='pt-24 pl-[10vw] pr-[10vw]'>
			<h2 className='text-5xl font-[Manrope] mb-10 text-center lg:text-left'>Latest news</h2>
			<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center md:justify-items-stretch reveal'>
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
				<BlogCard
					image={Image1}
					description='Pitch termsheet backing validation focus release.'
					avatar={Avatar1}
					avatarName='Chandler Bing'
				/>
				<BlogCard
					image={Image1}
					description='Pitch termsheet backing validation focus release.'
					avatar={Avatar1}
					avatarName='Chandler Bing'
				/>
				<BlogCard
					image={Image1}
					description='Pitch termsheet backing validation focus release.'
					avatar={Avatar1}
					avatarName='Chandler Bing'
				/>
			</div>
			<div className='flex justify-center items-center'>
				<Link href='/blog'>
					<button
						className={styles.blogButton}
						style={{
							marginTop: 96,
							marginBottom: 124,
						}}
					>
						Load more
					</button>
				</Link>
			</div>
		</section>
	);
}

export default LatestNews;
