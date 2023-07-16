import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

interface todoProps {
    item: [string, boolean],
    index: number,
    deleteTask: Function,
    updateTask: Function
}

export default function ToDo({item, index, deleteTask, updateTask}: todoProps) {
  return (
    <TouchableOpacity onPress={()=>updateTask(index)}>
        <View style={styles.container}>
            <Text style={item[1]? styles.taskDone: undefined}>{item[0]}</Text>
            <TouchableOpacity onPress={()=>{deleteTask(index)}}>
                <View style={styles.deleteBox}></View>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        height: 53,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 10,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'space-between'
    },

    deleteBox:{
        height: 12,
        width: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#55BCF6',

    },

    taskDone: {
        textDecorationLine: 'line-through',
    }
})
