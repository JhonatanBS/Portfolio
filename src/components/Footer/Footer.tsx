import styles from "./Footer.module.css";

export function Footer() {
  return(
    <footer className={styles.footer}>
        <p>Copyright &copy;2022 jhon Developer</p>
        <p> Design by <span>Jhonatan</span></p>
    </footer>
  )  
}