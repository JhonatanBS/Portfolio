import { Header } from "./components/Header/Header";
import { NumberSquareSix, TreeStructure, Stack, Cardholder, SidebarSimple, Tree } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";

export function App() { 

  return (
    <>
      {/* HOME */}
      
      <main className={styles.main}>
        <Header />

        <div className={styles.show}>
          
          <div className={styles.developer}>
            <h3>Ola, meu nome é </h3>
            <h1><span>Jhonatan</span> Bezerra</h1>
            <h3>E sou </h3>
            <h2>Desenvolvedor <span>Front-End</span></h2>
          </div>

          <div className={styles.cardAcademy}>
            <span></span>

            <div>
              <NumberSquareSix size={90} weight="fill"/>
            </div>

            <div>
              <h2>Engenharia da Computação</h2>
              
              <p> 
                Meu primeiro contato com programação foi utilizando a linguagem <strong>C </strong>
                como base para lógica de programação, manipulando tipos primitivos de dados,
                vetores, matrizes, estruturas de repetição e condicionais.
                <br />
                Com a Estrutura de Dados, aprendemos o CRUD de forma dinãmica, utilizando listas,
                filas, pilhas, árvores binárias, tabela hash, registros, ponteiros, arquivos.    
              </p>
              <p><strong>Estrutura de Dados</strong> </p>
              
            </div>

            <div className={styles.structure}>

              <a href="https://github.com/JhonatanBS/Lista" target="_blank">  
              <SidebarSimple size={65}  alt="Lista" />
              <p>Lista</p>
              </a>

              <a href="">
              <Stack size={65} />
              <p>Fila</p>
              </a>

              <a href="">
              <Cardholder size={65} />
              <p>Pilha</p>
              </a>

              <a href="">
              <Tree size={65} />  
              <p>Árvore</p>
              </a>

              <a href="">
              <TreeStructure size={65} />
              <p>Hash</p>
              </a>

            </div>
          </div>

        </div>

      </main>

      {/* SOBRE */}
    </>
  )
}

