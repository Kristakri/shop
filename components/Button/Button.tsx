import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({className, appearance = 'primary', children, ...props}: ButtonProps):JSX.Element => {
  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: appearance == "primary",
      [styles.ghost]: appearance == "ghost",
      [styles.gray]: appearance == "gray",
    })}
    {...props}
    >{children}</button>
  );
};