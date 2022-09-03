import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { NumberSquareSix, TreeStructure, Stack, Cardholder, SidebarSimple, Tree, Key, GithubLogo } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";
import photo from "./assets/img/Perfil.png"
import { Button } from "./components/Button/Button";
import { CardKnow } from "./components/Card/CardKnow";
import { Radio } from "./components/Radio/Radio";

/* Images in Know */
import C from "./assets/img/know/C.svg";
import mongodb from "./assets/img/know/mongodb.svg";
import node from "./assets/img/know/node.svg";
import mysql from "./assets/img/know/mysql.svg";
import docker from "./assets/img/know/docker.svg";
import java from "./assets/img/know/java.svg";
import html from "./assets/img/know/html.svg";
import css from "./assets/img/know/css.svg";
import javascript from "./assets/img/know/javascript.svg";
import bootstrap from "./assets/img/know/bootstrap.svg";
import react from "./assets/img/know/react.svg";
import typescript from "./assets/img/know/typescript.svg";
import { FormEvent, useState } from "react";

/* Images in Projects*/
import capaTodo from "./assets/img/projects/capatodo.svg";
import capaLab from "./assets/img/projects/capalab.svg";
import capaFeed from "./assets/img/projects/capafeed.svg";
import capadsMovie from "./assets/img/projects/capaDSmovie.png";
import capadsVendas from "./assets/img/projects/capaDSVendas.png";
import github from "./assets/img/projects/github.svg";
import vercel from "./assets/img/projects/vercel.svg";
import netlify from "./assets/img/projects/netlify.svg";

/* Images Contact */
import logo from "./assets/img/Logotipo.png";
import githubicon from "./assets/img/contact/githubicon.svg";
import instagramicon from "./assets/img/contact/instagramicon.svg";
import linkedinicon from "./assets/img/contact/linkedinicon.svg";
import { Footer } from "./components/Footer/Footer";


interface ISlides {
  id: number,
  image: string,
  title: string,
  description: string,
  repository: {icon: string, link: string},
  deploy: {icon: string, link: string},
  done: boolean
}

export function App() {

  const backend = [
    {
     id: 1, 
     icon: node, 
     title: "Node",
     description: "Node é um runtime Javascript, interpretado pelo motor V8 do Chrome, totalmente independente do navegador. ",
    },
    {
      id: 2, 
      icon: C, 
      title: "C",
      description: "Linguagem de baixo nível, com tipos primitivos, vetores, registros, arquivos, ponteiros.",
    },
    {
      id: 3, 
      icon: java, 
      title: "Java",
      description: "Linguagem que se destaca por Programação Orientada a Objetos, com tipagem fortíssima.",
    },
    {
      id: 4, 
      icon: mysql, 
      title: "Mysql",
      description: "Banco de dados relacional, formado por tabelas, colunas, linhas, dados e comandos SQL.",
    },
    {
      id: 5, 
      icon: mongodb, 
      title: "MongoDB",
      description: "Banco de dados não relacional, formado por collections, documents e fields, com dados em BSON.",
    },
    {
      id: 6, 
      icon: docker, 
      title: "Docker",
      description: "Ferramenta que isola aplicações, criando imagens executadas por containers, diminuindo o tempo de configuração de aplicativos.",
    },
  ]

  const frontend = [
    {
     id: 1, 
     icon: html, 
     title: "Html",
     description: "Uma linguagem de marcação para construir páginas web, formada por tags e sua semântica no navegador é indispensável.",
    },
    {
      id: 2, 
      icon: css ,
      title: "css3",
      description: "Linguagem de estilização de páginas web, responsável por estilizar tags através de id e classes.",
    },
    {
      id: 3, 
      icon: javascript, 
      title: "Javascript",
      description: "Linguagem de programação estruturada, de script de alto nível, com tipagem fraca.",
    },
    {
      id: 4, 
      icon: bootstrap, 
      title: "Bootstrap",
      description: "Ferramenta utilizada para responsividade e inserção de componentes de estilização.",
    },
    {
      id: 5, 
      icon: react, 
      title: "React",
      description: "Uma biblioteca Javascript para criação de interfaces de usuário, formada por hooks, componentes, props, contextos e muito mais.",
    },
    {
      id: 6, 
      icon: typescript, 
      title: "Typescript",
      description: "É um super set do Javascript, carregado de novas funcionalidades, mas seu principal ponto é tipagem estática fortíssima.",
    },
  ]

  const [slides, setSlides] = useState<ISlides[]>([
    {
      id: 1,
      image: capaTodo,
      title: "Todo List",
      description: "Projeto criado utilizando React com Typescript, utilizando um array, manipulamos o CRUD das tarefas para criar, deletar e atualizar as tarefas concluídas.",
      repository: {icon: github, link: "https://github.com/JhonatanBS/REACT/tree/main/Desafios/todoList"},
      deploy: {icon: netlify, link: "https://todo-jhonatan.netlify.app/"},
      done: true,
    },
    {
      id: 2,
      image: capaLab,
      title: "Ignite Lab",
      description: "Projeto criado utilizando React com Typescript, Tailwind, GraphQL, Apollo Client; com a plataforma hygraph criamos querys cadastrar novos usuários e para inserir as aulas e professores.",
      repository: {icon: github, link: "https://github.com/JhonatanBS/Ignite-Lab"},
      deploy: {icon: vercel, link: "https://ignite-lab-eta-ochre.vercel.app"},
      done: false,
    },
    {
      id: 3,
      image: capaFeed,
      title: "Ignite Feed",
      description: "Projeto criado utilizando React com Typescript, com um array, criamos, deletamos, atualizamos, listamos comentários.",
      repository: {icon: github, link: "https://github.com/JhonatanBS/REACT/tree/main/Curso_ROCKETSEAT/Projeto01/01_fundamentos_reactjs-ts"},
      deploy: {icon: netlify, link: "https://ignite-feed-jhonatan.netlify.app"},
      done: false,
    },
    {
      id: 4,
      image: capadsVendas,
      title: "DSVendas",
      description: "Projeto criado utilizando React com Typescript, com um array, criamos, deletamos, atualizamos, listamos comentários.",
      repository: {icon: github, link: "https://github.com/JhonatanBS/DSVendas"},
      deploy: {icon: netlify, link: "https://dsvendas-jhonatanbs.netlify.app/"},
      done: false,
    },
    {
      id: 5,
      image: capadsMovie,
      title: "DSMovie",
      description: "Projeto criado utilizando React com Typescript, com um array, criamos, deletamos, atualizamos, listamos comentários.",
      repository: {icon: github, link: "https://github.com/JhonatanBS/dsmovie"},
      deploy: {icon: netlify, link: "https://jhonatanbs-dsmovie.netlify.app/"},
      done: false,
    },
  ]);

  function handleAlterSlide(idSlide: number):void {
    const actual = slides.map( slide => {
      
      if(slide.id === idSlide) {
        slide.done = true;
      }else{
        slide.done = false;
      }

      return slide;
    });

    setSlides(actual);
  }

  function handleOnSubmit(event: FormEvent):void {
    event.preventDefault();
    alert("Aguarde, essa seção não foi concluída");
  }
  
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

              <a href="https://github.com/JhonatanBS/Fila" target="_blank">
              <Stack size={65} />
              <p>Fila</p>
              </a>

              <a href="https://github.com/JhonatanBS/Pilha" target="_blank">
              <Cardholder size={65} />
              <p>Pilha</p>
              </a>

              <a href="https://github.com/JhonatanBS/Arvore" target="_blank">
              <Tree size={65} />  
              <p>Árvore</p>
              </a>

              <a href="https://github.com/JhonatanBS/tabelaHash" target="_blank">
              <TreeStructure size={65} />
              <p>Hash</p>
              </a>

            </div>
          </div>

        </div>

      </main>

      {/* SOBRE */}

      <section className={styles.sectionAbout} id="scroll-sobre">
        <Title title={"Sobre"} color="dark"/>

        <div className={styles.about}>

          <div className={styles.photo}>
            <img src={photo} />
          </div>

          <div className={styles.description}>
            <h4>Ola, sou o <span>Jhonatan</span></h4>
            <p>
            Meu primeiro contato com programação foi na faculdade no ano de 2020,
            utilizando a linguagem C como base para lógica de programação, em seguida
            JAVA para Programação Orientada a Objetos, e foi na disciplina de estrutura
            de dados que minha paixão por programação se formou, aonde éramos desafiados
             a criar códigos do zero em C.
            </p>
            <p>Apaixonado por esse pequeno mundo que criamos no desenvolvimento Web, simplicando
               tarefas, melhorando a vida das pessoas.
            </p>
          <Button download="Download CV"/>
          </div>

        </div>
      </section>

      {/* KNOWLEDGE */}

      <section className={styles.know} id="scroll-conhecimentos">

        <div className={styles.backend} >
          
            <Title title="Back-end" color="light"/> 
            
            <div className={styles.sectionBack}>
              {backend.map( card => {
              return <CardKnow key={card.id} src={card.icon} title={card.title} description={card.description}/>
              })}
            </div>
            
        </div>

        <div className={styles.frontend}>

        <Title title="Front-end" color="light"/>

        <div className={styles.sectionFront}>
              {frontend.map( card => {
              return <CardKnow key={card.id} src={card.icon} title={card.title} description={card.description}/>
              })}
            </div>

        </div>

      </section>

      {/* Projects */}

      <section className={styles.sectionProjects} id="scroll-projetos">
        <div className={styles.backgroundProject}>
            
            {slides.map( slide => { 
               if(slide.done === true) {
                 return(
                   <> 
                     <div className={styles.imgProject}> 
                       <img src={slide.image} />
                     </div>
            
                     <div className={styles.slideDescription}>
                         <div className={styles.radioList}>
                             {slides.map( slide => {
                                 return <Radio 
                                         key={slide.id} 
                                         id={slide.id} 
                                         AlterSlide={handleAlterSlide} 
                                         done={slide.done}
                                        />
                             })}
                         </div>

                       <div className={styles.textDescription}>
                          <h2 >{slide.title}</h2>
                          <p>{slide.description}</p>
                        
                          <div className={styles.buttonLinks}>
                            <a href={slide.repository.link} target="_blank"> Repositório
                                <img src={slide.repository.icon} />
                            </a>

                            <a href={slide.deploy.link} target="_blank"> Deploy
                                <img src={slide.deploy.icon} />
                            </a>
                          </div>
                      </div>
                     </div>
                     </> 
                  )
              }
            })} 
            
        </div>
      </section>

      {/* Contact */}

      <section className={styles.sectionContact} id="scroll-contato">
        
        <div className={styles.network}>
          <div className={styles.logoNetwork}>
            <img src={logo}  />
          </div>

          <div className={styles.titleNetwork}>
            <h6>Encontre pelas Rede Sociais</h6>
          </div>

          <div className={styles.socialNetwork}>

            <a>
              <img src={githubicon} alt="" />
            </a>

            <a>
              <img src={linkedinicon} alt="" />
            </a>

            <a>
              <img src={instagramicon} alt="" />
            </a>

          </div>
        </div>

        <div className={styles.contact}>
          
          <div className={styles.containerForm}>
            <div>
              <Title title="Contato" color="dark"/>
            </div>

            <div className={styles.formContact}>
              <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder="Digite seu nome"/>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email"/>

                <label htmlFor="message">Mensagem</label>
                <textarea 
                  placeholder="Digite sua Mensagem"
                  name="message" 
                  id="message" 
                  maxLength={200} 
                  minLength={10} 
                  rows={7}>
                </textarea>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

