import { AboutUsProps } from "./AboutUs.props";
import styles from "./AboutUs.module.css";
import cn from "classnames";
import { H, Button } from "../../components";

export const AboutUs = ({className, children, ...props}: AboutUsProps):JSX.Element => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutBackgroundCircleBig}></div>
      <div className={styles.aboutBackgroundCircleSmall}></div>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutContent}>
          <H tag="h2">Пара слов о нас</H>
          <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем 
            менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь 
            тебе подняться и двигаться вперед. </p>
          <strong className={styles.aboutAuthor}>SneakMax</strong>
        </div>
        <img src="./about-background.jpg" alt="aboutBackgroundImg" className={styles.aboutBackgroundImg}/>
      </div>
    </section>
  );
};