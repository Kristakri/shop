import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { AppContextProvider, IAppContext } from "../context/app.context";
import { FunctionComponent } from "react";

export const Layout = ({ children, ...props }: LayoutProps):JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider cartItem={[]}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};