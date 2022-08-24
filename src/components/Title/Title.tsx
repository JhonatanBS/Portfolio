import styles from "./Title.module.css";

interface ITitle {
  title: string;  
}

export function Title({title}: ITitle) {
    return(
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
    )
}