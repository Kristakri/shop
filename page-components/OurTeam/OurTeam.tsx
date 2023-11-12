import { OurTeamProps } from "./OurTeam.props";
import styles from "./OurTeam.module.css";
import cn from "classnames";
import { H, Button } from "../../components";

export const OurTeam = ({team}: OurTeamProps):JSX.Element => {

  return (
    <section className={styles.ourTeam}>
      <div className={styles.backgroundCircleRed}></div>
      <div className={styles.backgroundCircleBig}></div>
      <div className={styles.backgroundCircleSmall}></div>

      <div className={styles.ourTeamContent}>
        <H tag="h2" className={styles.ourTeamTitle}>Наша команда</H>
        <ul className={styles.ourTeamGrid}>
          {team && team.map(t => (
            <li className={styles.ourTeamPerson} key={t.id}>
              <img src={t.photo} alt="person" className={styles.ourTeamImg} />
              <p>{t.name}</p>
              <span>{t.post}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};