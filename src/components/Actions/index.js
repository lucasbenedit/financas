import React from 'react';
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true}  showsHorizontalScrollIndicator={false}>

<TouchableOpacity style={styles.ActionsButton}>
<View style={styles.areaButton}>
   <AntDesign nome="addfolder" size={26} color="#000"/>
</View>
<text style={styles.labelButton}>entradas</text>
</TouchableOpacity>

<TouchableOpacity  styles={styles.actionButton}>
<view style={styles.actionButton}>
  <AntDesign name="tagso" size={26} color="#000"/>
</view>
<text style={styles.labelButton}>compras</text>
</TouchableOpacity>

<TouchableOpacity  styles={styles.actionButton}>
<view style={styles.actionButton}>
  <AntDesign name="creditcard" size={26} color="#000"/>
</view>
<text style={styles.labelButton}>carteira</text>
</TouchableOpacity>

<TouchableOpacity  styles={styles.actionButton}>
<view style={styles.actionButton}>
  <AntDesign name="setting" size={26} color="#000"/>
</view>
<text style={styles.labelButton}>Conta</text>
</TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet({
container:{
  maxHeight: 84,
  marginBottom:14,
  marginTop:18,
  paddingEnd:14,
  paddingStart:14,
},
actionButton:{
    alignItems:'center',
   marginRight:32,
},
areaButton:{
    backgroundColor:'#ecf0f1',
    height:60,
    width:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
},
labelButton:{
    marginTop:4,
    textAlign:'center',
    fontWeight:'bold',
}
})