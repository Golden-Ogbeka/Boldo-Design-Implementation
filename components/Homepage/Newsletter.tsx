import React from 'react';
import styles from '../../styles/Newsletter.module.css';

function Newsletter() {
	return (
		<section>
			<div className='reveal pl-[5vw] pr-[5vw] mt-[124px] mb-[84px]'>
				<div className={styles.container}>
					<h2>An enterprise template to ramp up your company website</h2>
					<div className='flex flex-row items-center flex-wrap gap-6 justify-center'>
						<input
							type='email'
							name='Email'
							id='Email'
							placeholder='Your email address'
							className='w-[370px] max-w-[100%]'
						/>
						<button
							className='mainButton'
							style={{
								minWidth: 210,
							}}
						>
							Start now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
