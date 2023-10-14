import { HelpProps } from "./Help.props";
import styles from "./Help.module.css";
import cn from "classnames";

export const Help = ({className, children, ...props}: HelpProps):JSX.Element => {
  return (
  <div className={styles.help}>
    <div className={styles.helpText}>{children}</div>
    <button className={styles.helpButton}>?</button>
  </div>
  );
};