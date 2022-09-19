import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function Services() {
	return (
		<section id='services' className='pl-[5vw] pr-[5vw] pb-[120px] pt-[82px]'>
			<div className='reveal'>
				<Section1 />
				<Section2 />
				<Section3 />
			</div>
		</section>
	);
}

export default Services;
