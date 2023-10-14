import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { H, Button, Help } from '../components/index';
import { Welcome } from '../components/MainPage/Welcome/Welcome';
import { Layout } from '../layout/Layout';

export default function Home(): JSX.Element {

	return (
		<Layout>
			<Welcome />
		</Layout>
	);
}
