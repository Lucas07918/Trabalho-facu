import React, {useEffect, useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.navigate('AppStackPort');
            }
        })
        return unsubscribe;
    }, []);

    const signin = async () => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    return(
        <View style={styles.container}>
            {/* <Image 
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            /> */}
            <Text style={styles.text}>Login</Text>
            <Text style={styles.text}>Bem-vindo de volta!</Text>
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

            <FormButton 
                buttonTitle="Entrar"
                onPress={signin}
                // style={{backgroundColor: '#000', width: 200}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Esqueci Minha Senha</Text>
            </TouchableOpacity>

            {/* <SocialButton 
                buttonTitle="Sign In With Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton 
                buttonTitle="Sign In With Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            /> */}

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Não tem um conta? Crie aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 30,
        color: '#3e92d1',
        fontWeight: 700
    },
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#3e92d1',
    }
})