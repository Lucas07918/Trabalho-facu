import React, { useState } from "react";
import { render } from "react-dom";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import Carousel from "react-native-snap-carousel";
import  Feather  from "react-native-vector-icons/Feather";
import { paidGames, freeGames, sliderData } from "../model/data";
import PropTypes from 'react';
import { auth } from "../../config/firebase";


import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions"
import CustomSwicth from "./CustomSwitch";
import ListItem from "./ListItem";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({navigation}) {
    const [gamesTab, setGamesTab] = useState(1);

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />
    }

    const onSelectedSwitch = (value) => {
        setGamesTab(value);
    }

    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#fff5',
            paddingTop: 0,
            paddingBottom: 0}}>
            <View style={{padding:0, alignItems:'center'}} >
                <View style={{
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                marginBottom:20,
                backgroundColor: '#820ad1',
                width:'100%',
                height: 340,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50}}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{alignItems:'center'}}>
                    <ImageBackground 
                    source={require('../assets/images/user-profile-ted.jpg')} 
                    style={{width:120,height:120, marginBottom: 10}} 
                    imageStyle={{borderRadius:100, borderWidth: 6, borderColor:'#4c0677'}} />
                    <Text style={{fontSize:23, fontWeight: 700, color: 'white'}}>Olá Ted!!!</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection:'column',
                    backgroundColor:'white',
                    top: -80,
                    width: 300,
                    borderRadius: 50,
                    alignItems:'center',
                    padding: 8,
                    position:'relative'
                }}>
                    <TouchableOpacity style={{
                        padding:20,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderBottomWidth: 2,
                        borderColor: '#3333',
                        width: 200
                    }}><Text style={{fontSize: 20, color:'#820ad1'}}>Entregas</Text></TouchableOpacity>

                    <TouchableOpacity style={{
                        padding:20,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderBottomWidth: 2,
                        borderColor: '#3333',
                        width: 200
                    }}><Text style={{fontSize: 20, color:'#820ad1'}}>Contas</Text></TouchableOpacity>

                    <TouchableOpacity style={{
                        padding:20,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderBottomWidth: 2,
                        borderColor: '#3333',
                        width: 200
                    }}><Text style={{fontSize: 20, color:'#820ad1'}}>Agendamentos</Text></TouchableOpacity>

                    <TouchableOpacity style={{
                        padding:20,
                        justifyContent: 'center',
                        alignItems:'center',
                        width: 200
                    }}><Text onPress={() => {}} style={{fontSize: 20, color:'#820ad1'}}>Chamados</Text></TouchableOpacity>
                </View>
                {/* <View style={{
                    flexDirection:'row', 
                    borderColor:'#C6C6C6', 
                    borderWidth:1, 
                    borderRadius: 8, 
                    paddingHorizontal: 10, 
                    paddingVertical: 8, }} >
                    <Feather name="search" size={20} color="#C6C6C6" style={{marginRight:5}} />
                    <TextInput placeholder="Search"/>
                </View>
                <View style={{
                    marginVertical:15,
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <Text style={{fontSize:18, fontWeight: 700}}>Upcoming Games</Text>
                    <TouchableOpacity onPress={() => {}} >
                        <Text style={{color:'#0aada8'}}>See all</Text>
                    </TouchableOpacity>
                </View>
                <Carousel 
                ref={(c) => { this._carousel = c; }}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={windowWidth - 40}
                itemWidth={270}
                loop={true}
                />

                <View style={{
                    marginVertical:20
                }}>
                    <CustomSwicth 
                    selectionMode={1}
                    option1="Free to play"
                    option2="Paid games"
                    onSelectedSwitch={onSelectedSwitch}
                    />
                </View>

                {gamesTab == 1 && 
                freeGames.map(item => (
                    <ListItem 
                    key={item.id} 
                    photo={item.poster} 
                    title={item.title} 
                    subtitle={item.subtitle}
                    isFree={item.isFree}
                    onPress={() => navigation.navigate('GameDetails', {title: item.title, id: item.id})}
                    />
                ))}
                {gamesTab == 2 && 
                paidGames.map(item => (
                    <ListItem 
                    key={item.id} 
                    photo={item.poster} 
                    title={item.title} 
                    subtitle={item.subtitle}
                    isFree={item.isFree}
                    price={item.price}
                    onPress={() => navigation.navigate('GameDetails', {title: item.title, id: item.id})}
                    />
                ))
                } */}
            </View>
        </SafeAreaView>
    );
}