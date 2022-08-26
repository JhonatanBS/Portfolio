import styles from "./CardKnow.module.css";

interface IKnow {
  id?: number,  
  src: string,
  title: string,
  description: string,  
}

export function CardKnow({src, title, description}: IKnow){
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <img src={src}/>
      </div>

      <div className={styles.back}>
      <h5>{title}</h5>
      <p>{description}</p>
      </div>
      
    </div>
  )
}
