import { QuizProps } from "./Quiz.props";
import styles from "./Quiz.module.css";
import cn from "classnames";
import { H, Button } from "../../components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { QuizForm } from "./QuizForm.interface";

export const Quiz = ({types, className, children, ...props}: QuizProps):JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<QuizForm>();
  const onSubmit = (data: QuizForm) => {
    if (contentShow < 4) {
      if(contentShow === 1 && data.type.length < 1) return false;
      if(contentShow === 2 && data.size.length < 1) return false;
      setContentShow(c => c + 1);
      return false;
    }
    if (data.name.length < 1 || data.email.length < 1) return false;
    setSendQuiz(true);
    console.log("Success");
  };

  const sizes: string[] = ["менее 36", "36-38", "39-41", "42-44", "45 и больше"];
  const [contentShow, setContentShow] = useState<number>(1);
  const [sendQuiz, setSendQuiz] = useState<boolean>(false);

  return (
    <section className={styles.quiz}>
      <form className={styles.quizWindow} onSubmit={handleSubmit(onSubmit)}>
        {contentShow < 4 && <div>
          <H tag="h2">Мы подберём идеальную пару для вас</H>
          <p>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями</p>
          {contentShow == 1 && <div className={styles.quizContent}>
            <H tag="h3">Какой тип кроссовок рассматриваете?</H>
            <ul className={styles.products}>
              {types.map(t => <li key={t.id}>
                <img src={t.photo} alt={t.name} className={styles.productPhoto}/>
                <input type="checkbox" id={t.name} value={t.name} className={styles.checkbox}
                {...register('type', {required: { value: true, message: "Необходимо выбрать тип кроссовок!"}})} />
                <label htmlFor={t.name} className={styles.label}>{t.name}</label>
              </li>)}
            </ul>
            <div className={styles.error}>{errors.type && errors.type.message}</div>
          </div>}
          {contentShow == 2 && <div className={styles.quizContent}>
            <H tag="h3">Какой размер вам подойдет?</H>
            <ul className={styles.sizes}>
              {sizes.map(s => <li key={s}>
                <input type="checkbox" value={s} id={s} className={styles.checkbox}
                {...register('size', {required: { value: true, message: "Необходимо выбрать размер кроссовок!"}})}/>
                <label htmlFor={s} className={styles.label}>{s}</label>
              </li>)}
            </ul>
            <img src="./quiz/background-size.jpg" alt="background-size" className={styles.sizeImg}/>
            <div className={styles.error}>{errors.size && errors.size.message}</div>
          </div>}
          {contentShow == 3 && <div className={styles.quizContent}>
            <H tag="h3">Уточните какие-либо моменты</H>
            <textarea {...register('correction')} placeholder="Введите сообщение" className={styles.corrction}/>
          </div>}
          <div className={styles.quizPanel}>
            <p>{contentShow} из 3</p>
            <Button appearance="ghost">Следующий шаг</Button>
          </div>
        </div>}
        {contentShow == 4 && <div>
          <H tag="h2">Ваша подборка готова!</H>
          <p>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</p>
          <hr className={styles.hr}/>
          <div className={styles.quizContentLast}>
           <p>Получить предложение</p>
           <p className={styles.quizContentLastP}>Получите подборку подходящих для вас моделей на почту</p>
           <input type="text" placeholder="Ваше имя" className={cn(styles.input, {
            [styles.inputError]: errors.email
           })} 
            {...register('name', {required: { value: true, message: "Необходимо ввести имя!"}})}/>
           <input type="email" placeholder="E-mail" className={cn(styles.input, {
            [styles.inputError]: errors.name
           })}
           {...register('email', {required: { value: true, message: "Необходимо ввести E-mail!"}})}/>
           <Button appearance="primary">Получить</Button>
           <img src="./quiz/phone.png" alt="phone" className={styles.phoneImg} />
           {sendQuiz && <img src="./quiz/phone-success.png" alt="phone-success" className={styles.phoneSuccessImg} />}
          </div>
        </div>}
      </form>
    </section>
  );
};