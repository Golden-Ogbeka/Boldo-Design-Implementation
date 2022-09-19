import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../../../styles/Services.module.css';
import ArrowRight from '../../../public/icons/arrow-right-small.png';

function BlogCard({
	image,
	title = 'Category',
	date = 'November 22, 2021',
	description,
	avatar,
	avatarName,
}: {
	image: StaticImageData;
	title?: string;
	date?: string;
	description: string;
	avatar: StaticImageData;
	avatarName: String;
}) {
	return (
		<div className='flex flex-col max-w-[300px]'>
			<Image src={image} alt={title} objectFit='contain' />
			<div className='flex flex-row items-center gap-3 flex-wrap mt-6 mb-3 '>
				<h3 className={`${styles.blogCardTitle}`}>{title}</h3>
				<h3 className={styles.blogCardDate}>{date}</h3>
			</div>
			<p className={`mb-5 ${styles.blogCardText}`}>{description}</p>
			<div className='flex flex-row items-center gap-3'>
				<Image src={avatar} alt='Avatar' />
				<span>{avatarName}</span>
			</div>
		</div>
	);
}

export default BlogCard;
