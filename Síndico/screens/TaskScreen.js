import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { database } from "../../config/firebase.js";
import { StyleSheet } from 'react-native'

export default function Task({ navigation }) {
  const [tasks, setTasks] = useState([]);

  function deleteTask(id) {
    const taskRef = doc(database, "Pedidos", id);
    deleteDoc(taskRef);
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, "Pedidos"), (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
    });

    return () => {
      unsubscribe();
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
              <FontAwesome name="star" size={23} color="#F92e6A" />
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
              {item.description}
            </Text>
          </View>
            )
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
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
