import React from 'react';
import Statistic from './Statistic';

function StatisticsSection() {
	return (
		<div className='pl-[5vw] pr-[5vw] pt-[94px] pb-[96px] blue-wallpaper'>
			<div className='reveal'>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-[#F1F1F1] text-xl m-0'>Our numbers</h2>
					<p className='text-[#FFFFFF] text-[48px] text-center font-[Manrope] max-w-[842px] mt-3 mb-[17.5px]'>
						Handshake infographic mass market crowdfunding iteration.
					</p>
				</div>
				<div className='flex flex-row justify-center lg:justify-around items-center flex-wrap gap-10 mt-[82px]'>
					<Statistic type='Cool feature title' value='120m' />
					<Statistic type='Cool feature title' value='10.000' />
					<Statistic type='Cool feature title' value='240' />
				</div>
			</div>
		</div>
	);
}

export default StatisticsSection;
