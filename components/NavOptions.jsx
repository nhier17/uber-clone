import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const myData = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Get a ride",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
];

const NavOptions = () => {
  return (
    <FlatList 
    data={myData}
    keyExtractor={(item) =>item.id}
    horizontal
    renderItem={({item}) => (
        <TouchableOpacity>
        <View>
         <Image 
         style={{width: 120, height: 120, resizeMode: 'contain'}}
         source={{uri: item.image}}
         />   
        </View>
        </TouchableOpacity>
    ) 
    }
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})