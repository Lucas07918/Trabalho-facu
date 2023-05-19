import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ChatScreen from "../screens/ChatScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'

import GameDetailsScreen from "../screens/GameDetailsScreen";
import MessageScreen from "../screens/MessageScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            component={HomeScreen} 
            name="Home"
            options={{headerShown: false}} 
            />
            <Stack.Screen 
            component={GameDetailsScreen} 
            name="GameDetails"
            options={({route}) => ({
                title: route.params?.title,
            })} 
            />
        </Stack.Navigator>
    );
}
const MessageStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen name="Messages" component={MessageScreen} 
        options={{headerStyle: {backgroundColor: '#820ad1'}, headerTintColor: '#fff'}}/>
        <Stack.Screen 
        name="Chat" 
        component={ChatScreen}
        options={({route}) => ({
            title: route.params.userName,
            headerStyle: {backgroundColor: '#820ad1'},
            headerTintColor: '#fff'
        })}
        />
    </Stack.Navigator>
)

const TabNavigator = () => {
    return(
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#555',
        tabBarActiveTintColor: '#820ad1'
    }}>
        <Tab.Screen name="Home2" component={HomeStack} 
         options={({route}) => ({
            tabBarStyle: {display: getTabBarVisibility(route), backgroundColor: '#fff', borderRadius: 90, position: 'absolute', marginHorizontal: 25, marginBottom: 15, height: 60},
            tabBarIcon: ({color, size}) => (
                <Entypo name="home" size={40} color={color} />
            )
        })}/>
        
        <Tab.Screen name="Message" component={MessageStack} options={({route}) => ({
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: '#820ad1', color: '#fff'},
            tabBarStyle: {display: getTabBarVisibility(route), backgroundColor: '#fff', borderRadius: 90, position: 'absolute', marginHorizontal: 25, marginBottom: 15, height: 60},
            tabBarIcon: ({color, size}) => (
                <Ionicons name="chatbubble-outline" size={40} color={color} />
            )
        })}/>

        <Tab.Screen 
        name="Menu" 
        component={CartScreen} 
        listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.openDrawer();
            }
          })}
        options={{
            tabBarStyle: { backgroundColor: '#fff', borderRadius: 90, position: 'absolute', marginHorizontal: 25, marginBottom: 15, height: 60},
            tabBarIcon: ({color, size}) => (
                <Feather name="menu" size={40} color={color}  />
            )
        }}/>
    </Tab.Navigator>
    );

}
const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'

    if( routeName == 'GameDetails' || routeName == 'Chat'){
        return 'none'
    }
    return 'flex';
};

export default TabNavigator;