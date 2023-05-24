import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList,  } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../config/firebase.js";
import { StyleSheet } from 'react-native';
import { Picker } from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";



export default function NewTask({ navigation }) {
  const [delivery, setDelivery] = useState("");
  const [apartamento, setApartamento] = useState(undefined);
  const [users, setUsers] = useState([]);

  async function addTask() {
    try {
      console.log(apartamento)
      await addDoc(collection(database, "Pedidos"), {
        delivery: delivery,
        bloco: apartamento.bloco,
        num_apart: apartamento.num_apart
      });
      navigation.navigate("Task");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Encomenda</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ex: tipo da encomenda"
        onChangeText={setDelivery}
        value={delivery}
      />
      <View style={{height:350}}>
      <Text style={styles.label}>Moradores</Text>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={users}
        style={{ backgroundColor:'gray'}}
       
        renderItem={({ item }) => {
            return(
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => null}
            >
              <FontAwesome name="trash" size={23} color="#F92e6A" />
            </TouchableOpacity>
            <Text
              style={styles.DescriptionTask}
              onPress={() =>
                 setApartamento({bloco: item.bloco, num_apart: item.num_apart})
              }
            >
              {`${item.nome} - Bloco: ${item.bloco} ${item.num_apart}`}
            </Text>
          </View>
            )
        }}
      />
      </View>
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask();
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex:1,
      backgroundColor:'#fff'
    },
    Tasks:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:5
     },
     deleteTask:{
      justifyContent:"center",
      paddingLeft:15,
    },
    DescriptionTask:{
     width:"75%",
     alignContent:"flex-start",
     backgroundColor:"#f5f5f5cf",
     padding:12,
     paddingHorizontal: 20,
     borderRadius:50,
     marginBottom: 5,
     marginRight:15,
     color:"#282b2db5",
    },
    label:{
      width:"90%",
      marginTop: 20,
      fontSize:16,
      marginLeft: 20,
      color:"#F92E6A"
    },
    input:{
     width:"90%",
     marginTop:10,
     padding:10,
     height:50,
     borderBottomWidth: 1,
     borderBottomColor:"#F92E6A",
     marginLeft:"auto",
     marginRight:"auto"
    },
    buttonNewTask:{
     width:60,
     height:60,
     position:"absolute",
     bottom: 30,
     left:20,
     backgroundColor:"#F92e6a",
     borderRadius:50,
     justifyContent:"center",
     alignItems: "center"
    },
    iconButton:{
     color:"#ffffff",
     fontSize:16,
     fontWeight:"bold",
    }
    
   });
