import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import pesquisa from './pages/pesquisaYoutube';
import pesquisavimeo from './pages/pesquisaVimeo';
import rotaInterna from './pages/rotaInterna';




const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="index">

            <Stack.Screen
                name="index"
                component={Bem_Vindo}
            />

            <Stack.Screen
                name="pesquisa"
                component={pesquisa}
            />

            <Stack.Screen
                name="pesquisavimeo"
                component={pesquisavimeo}
            />

            <Stack.Screen
                name="rotaInterna"
                component={rotaInterna}
            />

        </Stack.Navigator>

    )
}