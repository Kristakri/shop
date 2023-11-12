import styles from "./Faq.module.css";
import cn from "classnames";
import { H, Button } from "../../components";
import { useState } from "react";
import { FaqProps } from "./Faq.props";
import { FaqItem } from "../../interfaces/faq.interface";

export const Faq = ({faq}: FaqProps):JSX.Element => {
  const [question, setQuestion] = useState<FaqItem[]>(faq);

  const openAnswer = (id: number) => {
    setQuestion(question.map(q => {
      if(q.id == id) {
        q.isOpened = !q.isOpened;
      }
      return q;
    }));
  };

  return (
    <section className={styles.faq}>
      <H tag="h2">Часто задаваемые вопросы</H>
      <ul className={styles.faqList}>
        {question.map(q => (
          <li className={styles.faqItem} key={q.id} onClick={() => openAnswer(q.id)}>
            <div className={styles.faqTitle}>
              <span className={styles.question}>{q.question}</span>
              <button className={styles.button}>
              <span className={cn('material-symbols-outlined', styles.buttonIcon, {
                [styles.buttonIconActive]: q.isOpened
              })}>close</span>
              </button>
            </div>
            <div className={cn(styles.answer, {
              [styles.show]: q.isOpened,
              [styles.hidden]: !q.isOpened,
            })}>{q.answer}</div>
          </li>
        ))}
      </ul>
    </section>
  );

};
