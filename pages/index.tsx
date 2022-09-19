import type { NextPage } from 'next';
import React from 'react';
import Blog from '../components/Homepage/Blog/Blog';
import CustomerSection from '../components/Homepage/CustomerSection';
import HeroSection from '../components/Homepage/HeroSection';
import Newsletter from '../components/Homepage/Newsletter';
import Services from '../components/Homepage/Services/Services';
import Footer from '../components/layout/Footer/Footer';

const Home: NextPage = () => {
	function reveal() {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

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
			<CustomerSection />
			<Blog />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
