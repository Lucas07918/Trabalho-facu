import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

import AsyncStorage from "@react-native-community/async-storage";
import HomeScreen from "../screens/HomeScreen";
import AppStackSindico from "../../Síndico/navigation/AppStackSindico";



const Stack = createNativeStackNavigator();


const AuthStack = () => {

    return(
      <Stack.Navigator  screenOptions={{headerShown: false}} >
        {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            options={({navigation}) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                },
            })}
            />
        <Stack.Screen name="AppStackSin" component={AppStackSindico} />
      </Stack.Navigator>
    );
};

export default AuthStack;