import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {

	return (
		<div className={styles.container}>
			<Head>
				<title>Интернет-магазин ФОТО ЛЮМИК</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Ubuntu:wght@300;500&display=swap" rel="stylesheet"></link>
			</Head>

			<main className={styles.main}>
			
			</main>

			<footer className={styles.footer}>
			
			</footer>
		</div>
	);
}
