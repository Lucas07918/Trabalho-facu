import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, Button, StyleSheet } from 'react-native';


import Onboarding from "react-native-onboarding-swiper";
  
const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return(
        


        <View style={{width: 5, height: 5, marginHorizontal: 3, backgroundColor}}></View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
      
      
    }
  });

const Skip = ({...props}) => (
    <TouchableOpacity style={{marginLeft: 10}} {...props}>
        <Text>Pular</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity style={{marginRight: 10}} {...props}>
        <Text>Próximo</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity style={{marginRight: 10}} {...props}>
        <Text>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("TPUser")}
        onDone={() => navigation.navigate("TPUser")}
        pages={[
        {
            backgroundColor: '#a6d4e0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Conect to the World',
            subtitle: 'A New Way To Conect With the World',
        },
        {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
        }
        ]}
        />
    );
    //     <SafeAreaView style={{
    //         flex:1,
    //         justifyContent:'center',
    //         alignItems:'center',
    //         backgroundColor: '#fff',
    //         paddingTop: 30,
    //         paddingBottom: 10}}>
    //           <View>
    //             <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f', marginTop: 20}}>GAMEON</Text>
    //           </View>
    //           <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
    //             <Image style={{width:250, height:170, transform: [{rotate:'-15deg'}] }} source={require('../assets/gamingcopiar.png')} />
    //           </View>
    //           <TouchableOpacity 
    //           onPress={ () => navigation.navigate('HomeScreen')}
    //           style={{backgroundColor:'#AD40AF', padding:20,width:'90%', borderRadius:5,flexDirection:'row',justifyContent:'space-between', marginBottom: 50}}>
    //             {/* <Text style={{fontWeight:'bold',fontSize:18,color:'#fff', fontFamily:'Roboto-MediumItalic'}}>Let's Begin!</Text> */}
    //             <Text style={{fontWeight:'bold',fontSize:18,color:'#fff'}}>Let's Begin!</Text>
    //             <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
    //           </TouchableOpacity>
    //         </SafeAreaView>
    // );
}

export default OnboardingScreen;