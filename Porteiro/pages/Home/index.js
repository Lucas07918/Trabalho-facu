import React from "react";
import { View, Text } from "react-native";
import 'setimmediate';


export default function Home({navigation}){
    return(
        <View>
            <Text>Joao</Text>
            <Text 
            onPress={()=> navigation.navigate('Information')}
            >Information...</Text>
        </View>
    );
}