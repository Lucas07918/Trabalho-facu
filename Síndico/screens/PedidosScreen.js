import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native";
import TaskScreen from "./TaskScreen";
import NewTaskScreen from "./NewTaskScreen";
import Details from "./DetailsScreen";

const Stack = createStackNavigator();

const PedidosScreen = () => {
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Task" component={TaskScreen} />
                <Stack.Screen name="NewTask" component={NewTaskScreen} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
    );
}




export default PedidosScreen;

