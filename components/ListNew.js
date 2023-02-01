import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const staticImage = require('../assets/img-generic.png');
const BASEURL = "https://6222994f666291106a29f999.mockapi.io/api/v1/products"

  const Item = ({title, subTitle, points, redemption, img}) => (
    <View style={styles.item}>
        <Image
            style={styles.imageGeneric}
            source={{uri: img}}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.points}> {redemption ? '+' : '-'} {points}  </Text>
  </View>  
);
const ListNew = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const datos = await axios.get(BASEURL)
      .then((json) =>{ 
        setData(json.data)})
      .catch()
      .finally(() => setLoading(false));

    }

    fetchData()
    .catch(console.error);
    return () => {
    }
}, [])
  return (
    <View >
      <FlatList
        data={data}
        renderItem={({item}) =>
         <Item title={item.product}
          subTitle={item.createdAt}
          points = {item.points}
          img = {item.image}
          redemption = {item.is_redemption}

         />}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default ListNew

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 19,
        marginLeft: 60,
        marginTop: -50
      },
      subTitle: {
        marginLeft: 60,
      },
      points:{
        marginLeft: 300,
        marginTop: -30
      },
      imageGeneric:{
        borderRadius: 5,
        width: 50,
        height: 50.
      }
})