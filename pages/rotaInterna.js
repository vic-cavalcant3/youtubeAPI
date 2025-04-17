import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import Tela1 from './pesquisaYoutube';
import Tela2 from './pesquisaVimeo';
import React, { useState } from 'react';

const Tab = createBottomTabNavigator();


export default function RotaInterna() {
    const [info1, setInfo1] = useState('');
    const [info2, setInfo2] = useState('');
    return (

        
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: "trasnparent",
            }}>


            <Tab.Screen
                name="pesquisaYoutube"
                options={{
                // tabBarBadge: 1, ==============   bolinha vermelha
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="logo-youtube" size={24} color="black" />)
                        }
                        return (<Ionicons name="logo-youtube" size={24} color="grey" />)
                    }
                }}>
                {() => <Tela1 textoPronto={setInfo1} textoPronto2={setInfo2} />}
            </Tab.Screen>

            <Tab.Screen
                name="pesquisaVimeo"
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="logo-vimeo" size={24} color="black" />)
                        }
                        return (<Ionicons name="logo-vimeo" size={24} color="grey" />)
                    }
                }}>
                {() => <Tela2 texto={info1} texto2={info2} />}
            </Tab.Screen>
        </Tab.Navigator>

        
    )
}