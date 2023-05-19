import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TypeUser = ({navigation}) => {
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{
        fontSize: 28,
        marginBottom: 10,
        top: -20,
        color: '#000',
        fontWeight: 700}}>Escolha qual usuário</Text>
        <Text style={{
        fontSize: 28,
        marginBottom: 30,
        top: -20,
        color: '#000',
        fontWeight: 700}}>Você será</Text>
        <TouchableOpacity style={{marginTop: 10,
        width: '70%',
        height: 50,
        backgroundColor: '#1abe69',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10
        }} onPress={() => navigation.navigate('RoutesM')}>
                <Text style={{color: "#fff",fontSize: 18, fontWeight: 'bold'}}>Morador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10,
        width: '70%',
        height: 50,
        backgroundColor: '#b528c6',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        }} onPress={() => navigation.navigate('RoutesS')}>
                <Text style={{color: "#fff",fontSize: 18, fontWeight: 'bold',}}>Sindico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10,
        width: '70%',
        height: 50,
        backgroundColor: '#3e92d1',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        }} onPress={() => navigation.navigate('RoutesP')}>
                <Text style={{color: "#fff",fontSize: 18, fontWeight: 'bold',}}>Porteiro</Text>
        </TouchableOpacity>
        </View>
    );
}


export default TypeUser;