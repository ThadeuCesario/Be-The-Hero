import React from 'react';
import ReactDOM from 'react-dom'; //Integração do react com a DOM.
import App from './App';

/**
 * Conceito de JSX e Componentes.
 * O método 'render' é responsável pela renderização, isto é colocar em tela.
 * Em React quando utilizamos um componente podemos escrevê-lo igual a uma tag HTML.
 * Ele está inserindo esse App dentro do elemento com id 'root'.
 * 
 * Um componente do React nada mais é do que uma função que retorna HTML. Porém quando o HTML
 * está escrito dentro de um arquivo Javascript, chamamos essa junção de JSX.
 * JSX (JavaScript XML).
 * 
 * Reforçando -> Componente no React é uma função que retorna HTML.
 * 
 * Propriedades:
 * As propriedades do HTML é quase a mesma coisa do que temos no HTML relacionado a atributos.
 * Porém são atributos que são passados para componentes ao invés de elementos HTML.
 * 
 * Estados:
 * Podemos entender como uma informação que será mantida pelo componente. Imagine 
 * que o componente precise armazenar algum tipo de informação (input do usuário, ou 
 * algum dado de uma API externa). E nosso componente precisa trabalhar com essa informação...
 * No React não podemos utilizar variáveis convencionais, assim precisamos utilizar
 * um conceito chamado 'Estado'.
 * 
 * Imutabilidade:
 * Dentro do React por uma questão de performance, nunca podemos manipular a variável do estado de uma
 * forma direta. No precisamos sobrepor o valor da variável
 */
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

