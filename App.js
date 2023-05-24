import React from "react";
import AppStack from "./src/navigation/AppStack";
import AppStackSindico from "./Síndico/navigation/AppStackSindico";
import TypeUser from "./src/navigation/TypeUser";
import Routes from "./src/navigation/Routes"
import RoutesS from "./Síndico/navigation/Routes"
import RoutesP from "./Porteiro/navigation/Routes"
// import Routes from "./src/navigation/Routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import AuthProvider from "./src/context/authContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator  screenOptions={{headerShown: false}} >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="TPUser" component={TypeUser} />
            <Stack.Screen name="RoutesM" component={Routes} />
            <Stack.Screen name="RoutesS" component={RoutesS} />
            <Stack.Screen name="RoutesP" component={RoutesP} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
  );
  // <Routes />
}

export default App;