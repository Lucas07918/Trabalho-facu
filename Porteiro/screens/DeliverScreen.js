import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PedidosScreen from "./PedidosScreen";
import RecebidosScreen from "./RecebidosScreen";

const Tab = createMaterialTopTabNavigator();

const DeliverScreen = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Pedidos" component={PedidosScreen} />
            <Tab.Screen name="Recebidos" component={RecebidosScreen} />
        </Tab.Navigator>
    );
}


export default DeliverScreen;