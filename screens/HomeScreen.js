import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeadersNew from '../components/HeadersNew';
import CardsNew from '../components/CardsNew';
import ButtonNew from '../components/ButtonNew';
import ListNew from '../components/ListNew';

const HomeScreen = () => {
  return (
    <View>
        <ScrollView style={styles.scrollView}>
          <HeadersNew
          user="David Emmanuel Valdez Lopez"/>
          <Text style={styles.titlePoints}>TUS PUNTOS</Text>
          <CardsNew
          month= "Diciembre"
          points= "10,000"/>   
          <Text style={styles.titlePoints}>TUS MOVIMIENTOS</Text>
        <ListNew />
        <View style={styles.content}>
          <ButtonNew
          title={"Ganados"}/>
          <ButtonNew
          title={"Canjeados"}/>
        </View>
      </ScrollView>
    </View>
    
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
    content: {
      padding: 30,
      marginRight:50,
      flexDirection: 'row',
    },
    titlePoints: {
      fontSize: 14,
      color: '#9B9898',
      paddingStart: 40,
    },
    
  });