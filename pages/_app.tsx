import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />

				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />

				{/* <!-- Main Tags --> */}
				<title>{'Boldo'}</title>
				<meta name='title' content={'Boldo'} />
				<meta name='description' content='Save time by building fast with Boldo Template' />

				{/* <!-- Google meta tags --> */}
				<meta itemProp='name' content={'Boldo'} />
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
				<meta property='og:title' content={'Boldo'} />
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
				<meta name='twitter:title' content={'Boldo'} />
				<meta
					name='twitter:description'
					content='Save time by building fast with Boldo Template'
				/>
				<meta
					name='twitter:image'
					content='https://boldo-design-implementation.vercel.app/favicon.ico'
				/>
			</Head>
			<Component {...pageProps}></Component>
		</>
	);
}

export default MyApp;
