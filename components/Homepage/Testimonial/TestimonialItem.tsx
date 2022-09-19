import Image, { StaticImageData } from 'next/image';
import React from 'react';

function TestimonialItem({
	testimony,
	avatar,
	name,
	position,
}: {
	testimony: string;
	avatar: StaticImageData;
	name: string;
	position: string;
}) {
	return (
		<div className='flex flex-col min-w-[350px] bg-white rounded-[12px] p-10'>
			<blockquote className='text-2xl'>“{testimony}”</blockquote>
			<div className='flex flex-row items-center gap-4 mt-10'>
				<Image src={avatar} alt='Avatar' />
				<div className='flex flex-col gap-[6px]'>
					<span className='font-bold'>{name}</span>
					<span className='text-sm'>{position}</span>
				</div>
			</div>
		</div>
	);
}

export default TestimonialItem;
