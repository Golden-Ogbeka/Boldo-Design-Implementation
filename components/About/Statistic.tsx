import React from 'react';

function Statistic({ value, type }: { value: string; type: string }) {
	return (
		<div className='flex flex-col gap-[32px] items-center lg:items-start'>
			<span className='font-[Manrope] text-[#4FE9A4] text-8xl'>{value}</span>
			<span className='text-[#F1F1F1] text-2xl'>{type}</span>
		</div>
	);
}

export default Statistic;
