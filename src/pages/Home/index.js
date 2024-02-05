import {StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
const list = [
  {
    id:1,
    label:'Boleto conta luz',
    value:'300,90',
    Date:'17/01/2024',
    type:0 //despesas
  },
  {
    id:2,
    label:'Pix Cliente X',
    value:'2.500,00',
    Date:'20/01/2024',
    type:1 //despesas / entradas
  },
  {
    id:3,
    label:'Salario',
    value:'7.200,00',
    Date:'22/01/2024',
    type:1 //despesas / entradas
  },
]

export default function Home() {
    return (
      <View style={styles.container}>
        <Header name="Lucas Pinto"/>
        
        <Balance salto="9.250.00" gastos="-527,00"/>


        <Actions/>
        
       <text style={styles.title}>útimas movimentações</text>

      <FlatList
      style={styles.list}
      data={list}
      reyExtractor={ (item) => String(otem.id)}
      showsHorizontalScrollIndicator={false}
      renderItem={ (item) => <Movements data={item}/>}
      />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    title:{
      fontSize: 18,
      fontWeight:'bold',
     margin:14,
    },
    list:{
      marginStart:14,
      marginEnd:14,
    }
  });
  
