import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { collection, onSnapshot, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";
import { database } from "../../config/firebase.js";
import { StyleSheet } from 'react-native'
import { AuthContext } from "../context/authContext.js";


export default function Task({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const {userInfo} = useContext(AuthContext)

  function deleteTask(id) {
    const taskRef = doc(database, "Pedidos", id);
    deleteDoc(taskRef);
  }

  useEffect( () => {

   console.log(userInfo.bloco)
   console.log(userInfo.num_apart)
    const pedidosRef = collection(database, "Pedidos");
    const consulta = query(pedidosRef, where('bloco','==', userInfo.bloco), where('num_apart','==',userInfo.num_apart))

    //console.log(getDocs(q))
    
    const resposta = async () => await getDocs(consulta);
    resposta().then((respostaPesquisa)=> {
      //console.log(respostaPesquisa.docs)
      const data = [];
      respostaPesquisa.docs.forEach((doc)=>{
        data.push(doc.data())
      })
      setTasks(data)
    }).catch((erro)=>{
      console.log(erro)
    })

    

    // const unsubscribe = onSnapshot(collection(database, "Pedidos"), (snapshot) => {
    //   const taskList = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setTasks(taskList);
    // });

    return () => {
      resposta();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
            return(
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => deleteTask(item.id)}
            >
              <FontAwesome name="trash" size={23} color="#F92e6A" />
            </TouchableOpacity>
            <Text
              style={styles.DescriptionTask}
              onPress={() =>
                navigation.navigate("Details", {
                  id: item.id,
                  description: item.description,
                })
              }
            >
              {item.delivery}
            </Text>
          </View>
            )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      paddingTop: 20
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
   buttonNewTask:{
    width:60,
    height:60,
    position:"absolute",
    bottom: 30,
    right:20,
    backgroundColor:"#F92e6a",
    borderRadius:50,
    justifyContent:"center",
    alignItems: "center"
   },
   iconButton:{
    color:"#ffffff",
    fontSize:25,
    fontWeight:"bold",
   },
  });
