import styles from "./Title.module.css";

interface ITitle {
  title: string;
  color: string;  
}

export function Title({title, color}: ITitle) {
    return(
        <div 
          className={color === "light" ? 
          `${styles.title} ${styles.titleLight}` 
          :
          `${styles.title}`
          }>
            <h2>{title}</h2>
        </div>
    )
}