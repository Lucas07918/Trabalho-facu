import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomSwicth({
    selectionMode,
    option1,
    option2,
    onSelectedSwitch
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectedSwitch(value);
    }

    return(
        <View style={{
            height:44,
            width:'100%',
            backgroundColor:'#e4e4e4',
            borderRadius:10,
            borderColor:'#AD40AF',
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    flex:1,
                    backgroundColor: getSelectionMode == 1 ? '#3e92d1' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{
                    color: getSelectionMode == 1 ? 'white' : '#3e92d1',
                    fontSize: 14,
                    fontWeight: 700
                }}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    flex:1,
                    backgroundColor: getSelectionMode == 2 ? '#3e92d1' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{
                    color: getSelectionMode == 2 ? 'white' : '#3e92d1',
                    fontSize: 14,
                    fontWeight: 700
                }}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}