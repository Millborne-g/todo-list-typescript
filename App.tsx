import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  const [task, setTask] = useState('');
  const [taskComplete, setTaskComplete] = useState(false);
  const [taskList, setTaskList] = useState<[string, boolean][]>([]);

  const addTask = () =>{
    if(task){
      setTaskList([...taskList, [task, taskComplete]]);
      setTask('');
      Keyboard.dismiss();
    } else{
      alert('Task Empty!')
    }
  }

  const deleteTask = (index:number) =>{
    let listCopy = [...taskList];
    listCopy.splice(index, 1);
    setTaskList(listCopy);
  }

  const updateTask = (index:number) =>{
    let listCopy = [...taskList];
    listCopy[index][1] = true;
    setTaskList(listCopy)
  }
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.headerContainer}>
          <Text style={styles.headerTxt}>ToDo List</Text>
        </View>

        <View style={styles.listView}>
          <ScrollView>
            <ToDoList taskList={taskList} deleteTask={deleteTask} updateTask={updateTask}/>
          </ScrollView>
        </View>
      </View>

      <KeyboardAvoidingView>
        <View style={styles.inputToDoContainer}>
          <TextInput style={styles.inputTodo} placeholder='Enter Task here!' value={task} onChangeText={(e)=>setTask(e)} />
          <TouchableOpacity style={styles.addBtn} onPress={() => addTask()}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },

  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 10
  },

  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  listView: {
    height: '80%'
  },

  inputToDoContainer:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },

  inputTodo:{
    width: 246,
    height: 53,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20
  },

  addBtn:{
    height: 60,
    width: 60,
    borderRadius: 60,
    elevation: 10,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  }
});
