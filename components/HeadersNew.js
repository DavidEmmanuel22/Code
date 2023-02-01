import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadersNew = ({ user }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.subTitle}>{user}</Text>

    </View>
  )
}

export default HeadersNew

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  titleContainer: {
    padding: 40,
  },
  subTitle: {
    fontSize: 16,
  },
})