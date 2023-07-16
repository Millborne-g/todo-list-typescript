import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import ToDo from './ToDo';

interface taskProps{
  taskList: [string, boolean][],
  deleteTask: Function,
  updateTask: Function
}

export default function ToDoList({taskList, deleteTask, updateTask}: taskProps) {
  return (
    <View style={styles.container}>
        {taskList.map((item, index) =>(
            <ToDo key={index} item={item} index={index} deleteTask={deleteTask} updateTask={updateTask}/>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
})
