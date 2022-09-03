import styles from './Header.module.css';
import Logotipo from "../../assets/img/Logotipo.png";
import { List , X} from 'phosphor-react';
import { MouseEventHandler, useState } from 'react';

export function Header() {
  
  const [iconMenu, setIconMenu] = useState(true);

  function alterIconMenu() {
    const enableOrDisable = iconMenu === true ? false : true;

    setIconMenu(enableOrDisable);
  }
  
  return (
    <header className={styles.header}>

      <div className={styles.logotipo}>
        <img src={Logotipo} alt="" />  
      </div>

      <nav className=
      {iconMenu === false ? `${styles.menu}` : `${styles.menu} ${styles.menuDisable}`}>
        <a href="/">Home</a>
        <a href="#scroll-sobre">Sobre</a> 
        <a href="#scroll-conhecimentos">Conhecimentos</a> 
        <a href="#scroll-projetos">Projetos</a> 
        <a href="#scroll-contato">Contato</a>   
      </nav> 

      <button className={styles.hamburguer} onClick={alterIconMenu}>
      { iconMenu === true ? (<List size={60} weight="bold" />)
      :
      (<X size={60} weight="bold" />)  
      }  
      
      </button>

    </header>
  )
}
