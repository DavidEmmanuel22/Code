import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardsNew = ({ month, points }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titleCard}>{month}</Text>
      <Text style={styles.pointCard}>{points} Pts</Text>
    </View>
  )
}

export default CardsNew

const styles = StyleSheet.create({
  card: {
    width: 370,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 8,
    backgroundColor: '#334FFA',
    padding: 20,
    borderRadius: 30,
    margin: 30,
  },
  titleCard: {
    color: 'white',
    fontSize: 16,
  },
  pointCard: {
    color: 'white',
    fontSize: 32,
    paddingLeft: 70,
    paddingVertical: 30,

  }
})