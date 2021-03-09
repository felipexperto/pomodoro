# **Typescript Pomodoro Clock**

A ideia deste projeto é explorar um pouco sobre Typescript frente à um desafio real.

O conceito e layout da aplicação vieram do site FrontendMentor e você [pode conferir clicando aqui](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G).

Este projeto utilizou como boilerplate o `create-react-app` para Typescript.

![React](https://github.com//aleen42/badges/raw/master/src/react.svg)
![Tamanho do repositório](https://img.shields.io/github/repo-size/felipexperto/pomodoro)
![Quantidade de linhas de código do repositório](https://img.shields.io/tokei/lines/github/felipexperto/pomodoro)
![Quantidades de linguagens no repositório](https://img.shields.io/github/languages/count/felipexperto/pomodoro)
![Linguagem principal do repositório](https://img.shields.io/github/languages/top/felipexperto/pomodoro)

![Tipo de licença do projeto](https://img.shields.io/github/license/felipexperto/pomodoro)
![Versão do projeto no package.json](https://img.shields.io/github/package-json/v/felipexperto/pomodoro)
![Data do último commit](https://img.shields.io/github/last-commit/felipexperto/pomodoro)



## **Stack**
 * [React](https://pt-br.reactjs.org/) & [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html) (Biblioteca de componentes);
 * [Styled Components](https://styled-components.com/) (CSS-in-JS);
 * [PropTypes](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html) (typechecking);
 * [Typescript](https://www.typescriptlang.org/).

## **Rodando a aplicação:**

Instalando as dependências:

* `npm install`


Visualizando o projeto em modo de desenvolvimento:

* `npm start`
* Acessar http://localhost:3000/ para visualizar no navegador.

----

## **Sobre o projeto**

![Pomodoro Clock](./layout/pomodoro.jpg)

### **Critérios de aceite**

**Dado** que o usuário acessa a página  
**E** o relógio está **zerado**  
**Então** deve ser exibido o botão `start`  
**E** o tempo padrão deve ser 25 minutos  

**Dado** que o usuário clique em `start`  
**Então** o tempo deve começar a rodar  
**E** deve ser exibido o botão `pause`  

**Dado** que o relógio foi **parado**  
**Então** um botão de `start` deve ser exibido no lugar do `pause`  

**Dado** que a página seja atualizada  
**Então** o relógio deve voltar ao estado inicial  

**Dado** que o tempo está rodando  
**Então** o círculo que contabiliza o tempo deve diminuir proporcionalmente ao tempo  

**Dado** que o tempo do ciclo `Pomodoro` acabe  
**Então** a contagem deve recomeçar com a opção `short break` selecionada  
**E** o tempo padrão deve ser 5 minutos  

**Dado** que sejam completados 4 ciclos de `Pomodoro`  
**Então** a pausa deve ser uma `long break` de 15 minutos  

### **Simulação (sem interação do usuário)**

- Relógio é iniciado;
- Tempo de 25 minutos começa a ser contado com modo `Pomodoro` selecionado;
- Tempo acaba e automaticamente se inicia a `short break` de 5 minutos;
- Tempo acaba e automaticamente voltamos ao modo `Pomodoro`;
- Este loop de modo `Pomodoro` ocorrerá 4 vezes;
- Após o fim do quarto ciclo `Pomodoro`, automaticamente uma `long break` de 15 minutos ocorre;
- Após o final da `long break` o relógio volta ao seu estado inicial;

> [Mais informações sobre os princípios da técnica Pomodoro.](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro#Passo-a-passo)

---

## **Referências de Typescript**

- [TypeScript Zero to Hero](https://dev.to/glaucia86/lancamento-modulo-01-typescript-zero-to-hero-40n4), por Glaucia Lemos
- [Github - curso-typescript-zero-to-hero](https://github.com/glaucia86/curso-typescript-zero-to-hero)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
- [Typescript Playground](https://www.typescriptlang.org/play)
- [Introdução às referências do TSConfig](https://www.typescriptlang.org/pt/tsconfig)
- [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react)
