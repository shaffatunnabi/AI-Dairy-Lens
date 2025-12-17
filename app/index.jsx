

import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Logo from '../assets/img/dairy.png';
const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'#006D5B'}}>
        <Image source={Logo} style={{width:150, height:150,marginTop:200}} />
      <Text style={{fontSize:30,marginTop:30,color:'#fff', fontWeight: 'bold'}}>AI DairyLens</Text>
      <TouchableOpacity style={{marginTop:200, padding:10, backgroundColor:'#40B5AD', borderRadius:15,width:'60%', alignItems:'center'}}>
        <Link href="/Authentication">
          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Get Started</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};
export default App;






