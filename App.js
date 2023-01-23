import React,{useState,useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native'
const App=()=>{
  const [name, onChangeName] = useState('');
  const [age, onChangeAge] = useState('');
  const [house,onChangeHouse]=useState('');
  const [arr,setArr]=useState([])
  const [show,setShow]=useState(false)
  class DetObj {
    constructor(name,age,house){
      this.name=name
      this.age=age
      this.house=house
    }
    *[Symbol.iterator]() {
      yield this.name;
      yield this.age;
      yield this.house;
    }
  }

  const c=new DetObj(name,age,house)
  
  function onPress(){
    onChangeName('')
    onChangeAge('')
    onChangeHouse('')
    setArr([...arr,c])
  }
  function Press(){
    setShow(!show)
  }

  console.log(arr)
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Age"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeHouse}
        value={house}
        placeholder="House"
      />
      <TouchableOpacity style={{justifyContent:"center",alignSelf:"center",margin:10}} onPress={onPress}>
        <Text>Add</Text>
      </TouchableOpacity>
      {
        arr.map((val,id)=>{
          return(
            <View key={id}>
              {show ? <View><Text>{val.name}</Text></View>:null}
              <TouchableOpacity onPress={Press}>
                <Text style={{justifyContent:'center',alignSelf:'center'}}>
                  {val.name} - {val.age} - {val.house}
                </Text>
              </TouchableOpacity>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;