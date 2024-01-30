import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native"

const myData = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation()
  return (
    <FlatList 
    data={myData}
    keyExtractor={(item) =>item.id}
    horizontal
    renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
         className="p-2 pl-6 pt-4 pb-8 bg-gray-200 m-2 w-40">
        <View>
         <Image 
         style={{width: 120, height: 120, resizeMode: 'contain'}}
         source={{uri: item.image}}
         />   
         <Text className="mt-2 text-lg font-semibold">
            {item.title}
            </Text>
            <Icon className="p-2 bg-black rounded-full w-10 mt-4" 
            name='arrowright'
            color="white"
            type='antdesign'
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