import { WelcomeProps } from "./Welcome.props";
import styles from "./Welcome.module.css";
import cn from "classnames";
import { H, Button } from "../../components";

export const Welcome = ({className, children, ...props}: WelcomeProps):JSX.Element => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcomeWrapper}>
        <span className={styles.welcomeBackgroundText}>SneakMax</span>
        <div className={styles.welcomeContainer}>
          <H tag="h1" className={styles.welcomeTitle}>Кроссовки известных брендов с доставкой по России и СНГ</H>
          <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
          <Button>Перейти к покупкам</Button>
        </div>
      </div>
    </section>
  );
};