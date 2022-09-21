import Link from 'next/link';
import React from 'react';
import HeadElement from '../components/layout/HeadElement.js';
import Navbar from '../components/layout/Navbar/Navbar';

function PageNotFound() {
	return (
		<>
			<HeadElement noIndex={true} pageTItle='Page not found' />
			<div className='pageNotFoundContainer'>
				<Navbar />
				<div className='flex justify-center items-center h-full flex-col gap-10'>
					<h1 className='text-white text-5xl'>Page not found</h1>
					<p className='text-white text-xl text-center'>
						The page you are looking for wasn&apos;t found
					</p>
					<Link href='/'>
						<button className='mainButton'>Go to Home</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default PageNotFound;
