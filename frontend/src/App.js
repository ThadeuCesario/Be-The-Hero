import React, {useState} from 'react';
//import Logon from './pages/Logon'; //Não precisamos chegar até o arquivo index, porque sempre que importamos uma pasta o arquivo procurado é o arquivo index.
import Routes from './router';
import './global.css';

function App() {
  // const [counter, setCounter] = useState(0);

  /**
   * Quando usamos o useState é retornado um array com duas posições.
   * A primeira posição é o valor da variável, a segunda posição é uma função de atualização
   * desse valor. Basicamente esse consegue trocar o valor (da primeira posição).
   * 
   * Toda vez que nosso componente precisar armazenar uma informação dentro dele,
   * nos não vamos precisar criar uma variável comum, na verdade sempre criaremos um estado.
   * Assim podemos atualizar a informação e ela reflete dentro da interface.
   */

  // function increment(){
  //   setCounter(counter+1);
  // }

  return (
    /**
     * Vamos trabalhar o conceito de propriedades. Imagine que nosso Header seja customizado
     * por página. Veja que passamos uma propriedade chamada 'title' no nosso Header.
     * Agora precisamos recuperar essa propriedade dentro do nosso componente Header.
     */
    // <Header title="Semana OmniStack 11.0"/>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
