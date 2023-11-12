import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { H } from "../../components";

export const Footer = ({className, children, ...props}: FooterProps):JSX.Element => {
  return (
  <footer className={styles.footer}>
     <nav className={styles.navigation}>
      <H tag="h2"><a href="/" className={styles.logo}>SneakMax</a></H>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Каталог</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>О нас</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Подбор товара</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Наша команда</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Доставка и оплата</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Контакты</a></li>
      </ul>
    </nav>
  </footer>
  );
};