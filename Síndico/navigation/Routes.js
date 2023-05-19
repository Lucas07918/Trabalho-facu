import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../../config/firebase";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import AppStackSindico from "./AppStackSindico";



const RoutesS = () => {
    // const {user, setUser} = useContext(AuthContext);
    // const [initializing, setInitializing] = useState(true);

    // const onAuthStateChanged = (user) => {
    //     setUser(user);
    //     if(initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber;
    // }, []);

    // if(initializing) return null;

    return(
    <AuthStack />
    )
}

export default RoutesS;