import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screens/ProfileScreen";
import MessageScreen from "../screens/MessageScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawer from "../components/CustomDrawer";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const AppStackSindico = () => {
    return(
        <Drawer.Navigator
        initialRouteName="Home2"
        drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor:'#820ad1',
            drawerActiveTintColor:'#fff', 
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {marginLeft: -25, fontSize:15}}}>
            <Drawer.Screen component={TabNavigator} name="Home" options={{
                drawerIcon: ({color}) => (
                    <MaterialIcons name="home" size={22} color={color} />
                )
            }} />
            <Drawer.Screen component={ProfileScreen} name="Perfil" options={{
                drawerIcon: ({color}) => (
                    <MaterialIcons name="person" size={22} color={color} />
                )
            }}/>
            <Drawer.Screen component={MessageScreen} name="Conversas" options={{
                drawerIcon: ({color}) => (
                    <Ionicons name="ios-chatbubbles-sharp" size={22} color={color} />
                ), headerShown: true, headerStyle: {backgroundColor: '#820ad1'}, headerTintColor: '#fff'
            }} />
            <Drawer.Screen component={MomentsScreen} name="Entregas" options={{
                drawerIcon: ({color}) => (
                    <MaterialCommunityIcons name="truck-delivery" size={22} color={color} />
                )
            }}/>
            <Drawer.Screen component={SettingsScreen} name="Configurações" options={{
                drawerIcon: ({color}) => (
                    <MaterialIcons name="settings" size={22} color={color} />
                )
            }}/>
        </Drawer.Navigator>
    );
}

export default AppStackSindico;