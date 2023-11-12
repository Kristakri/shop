import { HelpProps } from "./Help.props";
import styles from "./Help.module.css";
import cn from "classnames";

export const Help = ({className, children, ...props}: HelpProps):JSX.Element => {
  return (
  <span className={styles.help}>
    <span className={styles.helpText}>{children}</span>
    <button className={styles.helpButton}>?</button>
  </span>
  );
};