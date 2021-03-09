# **[TypeScript Zero to Hero](https://dev.to/glaucia86/lancamento-modulo-01-typescript-zero-to-hero-40n4)**, por Glaucia Lemos

## **Referências de Typescript**

### **Gratuitas**

- [Github - curso-typescript-zero-to-hero](https://github.com/glaucia86/curso-typescript-zero-to-hero)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
- [Typescript Playground](https://www.typescriptlang.org/play)
- [Introdução às referências do TSConfig](https://www.typescriptlang.org/pt/tsconfig)
- [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react)

----

## **Projeto para exercitar**

### **[Relógio Pomodoro](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G)**

#### **Critérios de aceite**

**Dado** que o usuário acessa a página  
**E** o relógio está **zerado**  
**Então** deve ser exibido o botão `start`  
**E** o tempo padrão deve ser 25 minutos  

**Dado** que o usuário clique em `start`  
**Então** o tempo deve começar a rodar  
**E** deve ser exibido o botão `pause`  

**Dado** que o relógio foi **parado**  
**Então** um botão de `resume` deve ser exibido no lugar do `pause`  

**Dado** que a página seja atualizada  
**Então** o relógio deve voltar ao estado inicial  

**Dado** que o tempo está rodando  
**Então** o círculo que contabiliza o tempo deve diminuir proporcionalmente ao tempo  
**Dado** que o tempo do ciclo `Pomodoro` acabe  
**Então** a contagem deve recomeçar com a opção `short break` selecionada  
**E** o tempo padrão deve ser 5 minutos  

**Dado** que sejam completados 4 ciclos de `Pomodoro`  
**Então** a pausa deve ser uma `long break` de 30 minutos  

#### **Simulação (sem interação do usuário)**

- Relógio é iniciado;
- Tempo de 25 minutos começa a ser contado com modo `Pomodoro` selecionado;
- Tempo acaba e automaticamente se inicia a `short break` de 5 minutos;
- Tempo acaba e automaticamente voltamos ao modo `Pomodoro`;
- Este loop de modo `Pomodoro` ocorrerá 4 vezes;
- Após o fim do quarto ciclo `Pomodoro`, automaticamente uma `long break` de 30 minutos ocorre;
- Após o final da `long break` o relógio volta ao seu estado inicial;

> [Mais informações sobre os princípios da técnica Pomodoro.](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro#Passo-a-passo)

---

## **Getting Started with Create React App**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
