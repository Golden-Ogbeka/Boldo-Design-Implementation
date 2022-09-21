import { NextPage } from 'next';
import React from 'react';
import LatestNews from '../components/Blog/LatestNews';
import MainSection from '../components/Blog/MainSection';
import Newsletter from '../components/Homepage/Newsletter';
import Footer from '../components/layout/Footer/Footer';
import HeadElement from '../components/layout/HeadElement';
import { reveal } from '../functions/animation';

const Blog: NextPage = () => {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<>
			<HeadElement pageTItle='Boldo - Blog' />
			<MainSection />
			<LatestNews />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Blog;
