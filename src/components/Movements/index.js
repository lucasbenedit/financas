    import { useState } from 'react';
    import React       from 'react';
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export default function Movements({data}) {
const [showValue, setshowvalue] = useState(false);

 return (
  <TouchableOpacity style={styles.container} onPress={ () => setshowvalue(!showValue)}>
    <text style={styles.data}>{data.data}</text>
 
   <view style={styles.content}>
    <text style={styles.label}>{data.label}</text>

    {showValue ? (
       <Text style={data.type === 1 ? styles.value : styles.expenses}
       >
         {data.type === 1 ? 'R$ ${data.valeu}' : 'R$ -${data.valeu}'}
         </Text>
    ) : (
      <View style={styles.skeleton}>

      </View>
    )}
   </view>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  marginBottom:24,
  borderBottomWidth: 0.5,
  borderBlockColor: '#DADADA'
  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:2,
    marginBottom:8,
  },
  date:{
    color:'#DADADA',
    fontWeight:'bold'
  },
  label:{
    fontWeight:'bold',
    fontSize:16,
  },
  value:{
    fontSize:16,
    color:'#2ecc71',
    fontWeight:'bold'
  },
  expenses:{
    fontSize:16,
    color:'#e74c3c',
    fontWeight:'bold' 
  },
  skeleton:{
    marginTop:6,
    width:80,
    height:10,
    backgroundColor:'#DADADA',
    borrarRadius:8,
  }
})