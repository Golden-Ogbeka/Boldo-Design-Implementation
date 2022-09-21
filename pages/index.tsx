import type { NextPage } from 'next';
import React from 'react';
import Blog from '../components/Homepage/Blog/Blog';
import CustomerSection from '../components/Homepage/CustomerSection';
import HeroSection from '../components/Homepage/HeroSection';
import Newsletter from '../components/Homepage/Newsletter';
import Services from '../components/Homepage/Services/Services';
import Testimonial from '../components/Homepage/Testimonial/Testimonial';
import Footer from '../components/layout/Footer/Footer';
import { reveal } from '../functions/animation';

const Home: NextPage = () => {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<>
			<HeroSection />
			<Services />
			<Testimonial />
			<CustomerSection />
			<Blog />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
