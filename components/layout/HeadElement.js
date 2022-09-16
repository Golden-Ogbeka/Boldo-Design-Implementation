import Head from 'next/head';
import React from 'react';

function HeadElement({ pageTItle = 'Boldo', noIndex = false }) {
	return (
		<Head>
			<meta charSet='utf-8' />
			<link rel='icon' href='/favicon.ico' />

			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='theme-color' content='#000000' />

			{/* <!-- Main Tags --> */}
			<title>{pageTItle}</title>
			<meta name='title' content={pageTItle} />
			<meta name='description' content='Save time by building fast with Boldo Template' />

			{/* <!-- Google meta tags --> */}
			<meta itemProp='name' content={pageTItle} />
			<meta
				itemProp='description'
				content='Save time by building fast with Boldo Template'
			/>
			<meta
				itemProp='image'
				content='https://boldo-design-implementation.vercel.app/favicon.ico'
			/>

			{/* <!-- Facebook meta tags --> */}
			<meta property='og:url' content='https://boldo-design-implementation.vercel.app' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={pageTItle} />
			<meta
				property='og:description'
				content='Save time by building fast with Boldo Template'
			/>
			<meta
				property='og:image'
				content='https://boldo-design-implementation.vercel.app/favicon.ico'
			/>

			{/* <!-- Twitter meta tags --> */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={pageTItle} />
			<meta
				name='twitter:description'
				content='Save time by building fast with Boldo Template'
			/>
			<meta
				name='twitter:image'
				content='https://boldo-design-implementation.vercel.app/favicon.ico'
			/>

			{noIndex === true && <meta name='robots' content='noIndex' />}
		</Head>
	);
}

export default HeadElement;
