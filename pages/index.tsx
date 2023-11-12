import { AboutUs, Catalog, Welcome, OurTeam, Faq, Product, Contact, Quiz, Feedback } from '../page-components/index';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from "next";
import axios from 'axios';
import { FaqItem, OurTeamItem, ProductItem, Type } from '../interfaces/index';
import { useState } from 'react';

export function Home({faq, team, products, types}: MainPageProps): JSX.Element {
	const [showProduct, setShowProduct] = useState<[number, boolean]>([0, false]);

	const openProduct = (id: number) => {
		setShowProduct([id, true]);
	};

	const closeProduct = () => {
		setShowProduct([showProduct[0], false]);
	};

	return (
		<>
			<Welcome />
			<Catalog products={products} openProduct={openProduct} />
			<AboutUs />
			<Quiz types={types} />
			<OurTeam team={team} />
			<Faq faq={faq} />
			<Contact />
			<Feedback />
			
			{showProduct[0] != 0 ? 
				<Product closeProduct={closeProduct} opened={showProduct[1]} 
				product={products.filter((p) => p.id === showProduct[0])[0]} /> 
			: <></>}
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<MainPageProps> = async () => {
  const { data: faq } = await axios.get<FaqItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/faq");
	const { data: team } = await axios.get<OurTeamItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/our-team");
	const { data: products } = await axios.get<ProductItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/product");
	const { data: types } = await axios.get<Type[]>(process.env.NEXT_PUBLIC_DOMAIN + "/types");

  return {
    props: {
      faq,
			team,
			products,
			types
    }
  };
};

interface MainPageProps extends Record<string, unknown> {
  faq: FaqItem[],
	team: OurTeamItem[],
	products: ProductItem[],
	types: Type[]
}