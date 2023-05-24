import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../config/firebase.js";
import { StyleSheet } from 'react-native'

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const idTask = route.params.id;

  useEffect(()=>{
    console.log(route.params)
  },[])

  async function editTask(description, id) {
    try {
      const taskRef = doc(database, "Pedidos", id);
      await updateDoc(taskRef, { description: description });
      navigation.navigate("Task");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pedido</Text>
      <Text style={styles.label}>{route.params.delivery}</Text>

      <Text style={styles.label}>Apartamento</Text>
      <Text style={styles.label}>{ `${route.params.bloco} - Ap ${route.params.num_apart}`}</Text>
      
      {
        /*
          <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(descriptionEdit, idTask);
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
        */
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex:1,
      backgroundColor:'#fff'
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
