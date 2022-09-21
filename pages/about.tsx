import React from 'react';
import LeadershipSection from '../components/About/LeadershipSection';
import MainSection from '../components/About/MainSection';
import StatisticsSection from '../components/About/StatisticsSection';
import StorySection from '../components/About/StorySection';
import ValuesSection from '../components/About/ValuesSection';
import Newsletter from '../components/Homepage/Newsletter';
import Footer from '../components/layout/Footer/Footer';
import HeadElement from '../components/layout/HeadElement';
import { reveal } from '../functions/animation';

function About() {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<>
			<HeadElement pageTItle='Boldo - About' />
			<MainSection />
			<StorySection />
			<StatisticsSection />
			<LeadershipSection />
			<ValuesSection />
			<Newsletter />
			<Footer />
		</>
	);
}

export default About;
