import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = ({ children, ...props }: LayoutProps):JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};