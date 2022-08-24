import styles from './Header.module.css';
import Logotipo from "../../assets/img/Logotipo.png";

export function Header() {
  
  return (
    <header className={styles.header}>

      <div className={styles.logotipo}>
        <img src={Logotipo} alt="" />  
      </div>

      <nav className={styles.menu}>
        <a href="/">Home</a>
        <a href="">Sobre</a> 
        <a href="">Conhecimentos</a> 
        <a href="">Projetos</a> 
        <a href="">Contato</a>   
      </nav> 

    </header>
  )
}
