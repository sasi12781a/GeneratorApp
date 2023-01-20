import React,{useState,useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import axios from 'axios';

const App=()=>{
  let [data,setData]=useState([])

  const [show, setShow] = useState(false);

  async function Data(url){
    let data= await axios.get(`${url}`)
    setData(data.data.data)
  }
  useEffect(()=>{
    Data('https://reqres.in/api/users')
  })

  

  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      {
        data.map((res,id)=>{
          return(
            <ScrollView key={id}>
              {show ? <Image style={{height:90,width:70}} source={{uri:`${res.avatar}`}}/>:null}
              <TouchableOpacity onPress={()=>setShow(!show)}>
                <Text>
                  {`${res.first_name} ${res.last_name}`}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )
        })
      }
    </View> 
  )
}

export default App;