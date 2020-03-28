/**
 * Toda vez que formos utiilzar a sintaxe JSX precisamos importar a biblioteca do React.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Agora que configuramos nossa navegação, vamos começar cadastrando nossas rotas.
 */
const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes(){
    return(
        /**
         * Como anotação, tinhamos um elemento chamado BrowserRouter quando trabalhamos com
         * rota no React e que englobava todas nossas rotas.
         * No React Native, também seguimos essa mesma forma. No React Native, temos o
         * NavigationContainer. Esse elemento é essencial que venha por volta de nossas
         * rotas. 
         * 
         * Vamos configurar um AppStack.Screen para cada nova rota que iremos configurar em nossa
         * aplicação. Esse AppStack.Screen recebe uma propriedade chamada componente, que é o componente
         * da página. Sendo que esses componentes das páginas são cada uma daquelas páginas que criamos.
         * 
         * A propriedade 'screenOptions={{ headerShown: false }}', passada no AppStack 
         * tem como objetivo não apresentar o cabeçalho da aplicação quando a 
         * aplicação é iniciada.
         */
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
