import React, {useContext, useEffect, useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, Button, StyleSheet } from "react-native";

import  AntDesign  from "react-native-vector-icons/AntDesign";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
// import { AuthContext } from "../navigation/AuthProvider";

import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.navigate('AppStackPort');
            }
        })
        return unsubscribe;
    }, []);

    const signup = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    // const {register} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Crie uma conta</Text>
            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Senha"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput 
                labelValue={confirmPassword}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                placeholderText="Confirmar Senha"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Cadastrar"
                onPress={signup}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>Ao registrar, você confirma que aceita nossos</Text>
                <TouchableOpacity onPress={() => alert('Nossos Termos')}>
                    <Text style={[styles.color_textPrivate, {color: '#3e92d1'}]}>Termos de serviço</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> e </Text>
                <TouchableOpacity onPress={() => alert('Nossos Termos')}>
                    <Text style={[styles.color_textPrivate, {color: '#3e92d1'}]}>Política de Privacidade</Text>
                </TouchableOpacity>
            </View>

            {/* <SocialButton 
                buttonTitle="Sign Up With Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton 
                buttonTitle="Sign Up With Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            /> */}

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Já tem uma conta? Faça o login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#3e92d1',
        marginBottom: 30,
        fontWeight: 600
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#3e92d1',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    }
})