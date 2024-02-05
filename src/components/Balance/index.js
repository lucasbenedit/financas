import React from 'react';
import {
    View,
    text,
    StyleSheet,
} from 'react-native';

export default function Balance({saldo, gastos}) {
 return (
   <View style={styles.container}>

    <view style={styles.itens}>
      <text style={styles.itensTitle}>Gastos</text>
      <View style={styles.content}>
     <text style={styles.currencysymbol}>R$</text>
     <text style={styles.balance}>{saldo}</text>
      </View>
    </view>

    <view style={styles.itens}>
      <text style={styles.itemtitle}>saldo</text>
      <View style={styles.content}>
     <text style={styles.currencysymbol}>R$</text>
     <text style={styles.expenses}>{gastos}</text>
      </View>
    </view>

   </View>
  );
}


const styles = StyleSheet.create({
      container:{
        backgroundColor:'#FFF',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingStart:18,
        paddingEnd:18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex:99,
      },
      itemtitle:{
        fontSize:20,
        color:'#DADADA'
      },
      content:{
        flexDirection:'row',
        alignItems:'center'
      },
      currencysymbol:{
        color:'#DADADA',
        marginRight: 6,
      },
      balance:{
        fontSize:22,
        color:'#2ecc71'
      },
      expenses:{
        fontSize:22,
        color:'#e74c3c'
      }
      })