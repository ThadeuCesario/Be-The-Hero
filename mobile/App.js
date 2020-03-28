import React from 'react';
import { Text, View } from 'react-native';
import Routes from './src/route';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

/**
 * Elementos HTML.
 * Na web estamos acostumados a utilizar elementos como '<div>','<span>','<p>','<h1>'.
 * Sendo que web cada um desses elementos possuem uma semântica.
 * 
 * No React Native não tem as mesmas tags que temos no HTML. 
 * Veja que no exemplo pronto temos uma tag <View>, basicamento todo e qualquer tipo de
 * container utilizará essa tag.
 * 
 * Já a tag <Text>, é utilizada para qualquer tipo de texto. Não importando se é um parágrafo
 * ou título. Ou seja NÃO temos mais semãntica. 
 * 
 * Veja que o procedimento para a estilização também muda. No React Native, para estilizarmos
 * vamos seguir como se fosse um CSS inline. Colocando a propriedade 'style={nomedobloco}'.
 * É passado um objeto com os estilos que desejamos.
 * 
 * Todos os elementos dentro do React Native, já possuem por padrão display='flex';
 * Não existe display block, ou inline-block. TODOS ELEMENTOS JÁ POSSUEM FLEX. Basta utilizar
 * o restante das propriedades.
 * 
 * Outra coisa que muda da Web para o mobile (React Native), é que não temos o padrão dashed-case
 * para as propriedades do css, mas sim camelCase. Por exemplo
 * O que era:  background-color
 * Agora é:    backgroundColor
 * 
 * No React Native, não existe herança de estilos. Ou seja, se quisermos uma estilização para um
 * determinado elemento. Vamos ter que passar uma estilização para ele. NÃO HÁ HERANÇA.
 * 
 * O React Native possui uma funcionalidade chamada de fast refresh. Em que eu faço uma alteração
 * e imediatamente ele é replicada para o mobile.
 * 
 * Usamos o stacknavigation quando formos realizar uma navegação mais por botões.
 * 
 * Também utilizaremos o Axios que será o cliente HTTP, responsável por chamar as APIs e trazer os
 * retornos.
 */

export default function App() {
  return (
    <Routes />
  );
}
