import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { H } from "../../components";

export const Header = ({className, children, ...props}: HeaderProps):JSX.Element => {
  return (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <H tag="h2"><a href="/" className={styles.logo}>SneakMax</a></H>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Каталог</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>О нас</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Подбор товара</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Наша команда</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Доставка и оплата</a></li>
        <li className={styles.menuItem}><a href="#" className={styles.menuLink}>Контакты</a></li>
        <li className={styles.menuItem}>
          <button className={styles.basket}>
            <span className="material-symbols-sharp">shopping_basket</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  );
};