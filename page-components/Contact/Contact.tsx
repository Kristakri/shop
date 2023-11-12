import { ContactProps } from "./Contact.props";
import styles from "./Contact.module.css";
import cn from "classnames";
import { H, Help } from "../../components";

export const Contact = ({className, children, ...props}: ContactProps):JSX.Element => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <H tag="h2">Контакты</H>
          <p className={styles.structure}>Главный офис 
            <Help>Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, 
              качестве обслуживания и товара просьба задавать в отдел продаж</Help>
          </p>
          <a href="tel:+78007898989" className={styles.number}>+7 800 789 89 89</a>
          <address className={styles.address}>г. Санкт-Петербург, Комсомольская, 43 к1</address>

          <p className={styles.structure}>Отдел продаж</p>
          <a href="tel:+78007898989" className={styles.number}>+7 800 789 89 89</a>
          <address className={styles.address}>г. Санкт-Петербург, Комсомольская, 43 к1</address>

          <div className={styles.social}>
            <a href="https://vk.com" className={styles.socialLink}><img src="./social/vk.png" alt="vk" /></a>
            <a href="https://instagramm.com" className={styles.socialLink}><img src="./social/instagram.png" alt="vk" /></a>
          </div>
        </div>
        <div className={styles.map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cb06ebabfc5477b18c6daeb7edf4f379193ed5aa526271cb20435b23bc93ed5&amp;source=constructor" width="100%" height="500" frameBorder="0"></iframe>
        </div>
      </div>
    </section>
  );
};