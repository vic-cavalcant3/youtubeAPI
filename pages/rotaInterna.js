import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';
import React, { useState } from 'react';

const Tab = createBottomTabNavigator();


export default function RotaInterna() {
    const [info1, setInfo1] = useState('');
    const [info2, setInfo2] = useState('');
    return (

        
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: "trasnparent",
            // tabBarStyle: {
            //     position: 'absolute',
            //     height: 60,
            //     bottom: 30,
            //     right: 30,
            //     left: 30,
            //     borderRadius: 5,
            //     backgroundColor: "transparent",
            // },
            }}>


            <Tab.Screen
                name="tela1"
                //component={Tela1}
                options={{
                tabBarBadge: 1,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="chatbubble-ellipses" size={24} color="black" />)
                        }
                        return (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
                    }
                }}>
                {() => <Tela1 textoPronto={setInfo1} textoPronto2={setInfo2} />}
            </Tab.Screen>

            <Tab.Screen
                name="tela2"
                component={Tela2}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            >

            </Tab.Screen>
            <Tab.Screen
                name="tela3"
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="bookmark" />)
                        }
                        return (<Ionicons name="bookmark-outline" size={24} color="black" />)
                    }
                }}
            >
                {() => <Tela3 texto={info1} texto2={info2} />}
            </Tab.Screen>
        </Tab.Navigator>

        
    )
}