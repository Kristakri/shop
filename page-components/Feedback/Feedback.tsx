import styles from "./Feedback.module.css";
import cn from "classnames";
import { H, Button } from "../../components";
import { useState } from "react";
import { FeedbackProps } from "./Feedback.props";
import { useForm } from "react-hook-form";
import { FaqItem } from "../../interfaces/faq.interface";
import { FeedbackForm } from "./Feedbakc.interface";

export const Feedback = ({className, children, ...props}: FeedbackProps):JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<FeedbackForm>();

  const onSubmit = (data: FeedbackForm) => {
    console.log(data)
    console.log("Success");
  };

  return (
    <section className={styles.feedback}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <H tag="h2">Есть вопросы?</H>
        <p>Заполните форму и наш менеджер свяжется с вами</p>
        <input type="text" placeholder="Ваше имя" className={cn(styles.input, {
          [styles.inputError]: errors.name
          })} 
        {...register('name', {required: { value: true, message: "Необходимо ввести имя!"}})} />
        <input type="text" placeholder="Номер телефона" className={cn(styles.input, {
          [styles.inputError]: errors.phone
          })} 
        {...register('phone', {required: { value: true, message: "Необходимо ввести номер телефона!"}})} />
        <Button>Отправить</Button>
      </form>
      <div className={styles.instagram}>
        <a href="https://vk.com">
          <img src="./feedback/Instagram.png" alt="Instagram" />
        </a>
        <div className={styles.photos}>
          <img src="./feedback/photo-1.jpg" alt="photo-1" className={styles.photoOne}/>
          <img src="./feedback/photo-2.jpg" alt="photo-2" className={styles.photoTwo}/>
          <img src="./feedback/photo-3.jpg" alt="photo-3" className={styles.photoThree}/>
          <img src="./feedback/photo-4.jpg" alt="photo-4" className={styles.photoFour}/>
          <img src="./feedback/photo-5.jpg" alt="photo-5" className={styles.photoFive}/>
        </div>
      </div>
    </section>
  );
};
