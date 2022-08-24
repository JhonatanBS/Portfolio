import styles from "./Button.module.css";

interface IButton {
  download: string;  
}

export function Button({download}: IButton) {

  return (
    <a className={styles.button} href="#">
      {download}
    </a>
  )  
}