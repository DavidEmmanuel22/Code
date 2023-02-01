import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ButtonNew = ({title}) => {
  return (
    <View>
     <Pressable style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
    </View>
  )
}

export default ButtonNew

const styles = StyleSheet.create({
   
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#334FFA',
        marginRight:80,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})