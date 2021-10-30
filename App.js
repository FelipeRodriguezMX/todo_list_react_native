import React, {useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./components/task";

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tareas de hoy</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Escribir tarea'} value={task} onChangeText={text =>setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0', 
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText:{},
});
export default App;
