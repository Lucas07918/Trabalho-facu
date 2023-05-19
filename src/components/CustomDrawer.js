import React, { useEffect } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { auth } from "../../config/firebase";

import { Ionicons } from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

const CustomDrawer = (props) => {

    const navigation = useNavigation();

    const signout = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        })
       }

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView 
        {...props}
        contentContainerStyle={{backgroundColor: '#38e374'}}
        >
            <ImageBackground source={require('../assets/images/menu-bg-verde.jpg')} style={{padding:20}}>
                <Image source={require('../assets/images/user-profile-ted.jpg')} 
                style={{height:80,width:80,borderRadius:40, borderWidth: 5, borderColor: '#18a051',marginBottom:10}} />
                <Text style={{color:'#fff', fontSize:18, fontWeight:500}}>Ted Mosby</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'#fff', fontWeight:400}}>280 Coins</Text>
                <MaterialIcons name="toll" size={14} color="#fff" style={{marginLeft:3}} />
            </View>
            </ImageBackground>
            <View style={{flex:1, backgroundColor:'#fff', paddingTop: 10}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons name="share" size={22} />
                    <Text style={{fontSize:15, marginLeft:5}}>Tell a Friend</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={signout} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons name="logout" size={22} />
                    <Text style={{fontSize:15, marginLeft:5}}>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    );
}


export default CustomDrawer;