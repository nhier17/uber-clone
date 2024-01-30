import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const StyledSafeAreaView =styled.SafeAreaView
const StyledText = styled.Text

const HomeScreen = () => {
  return (
    <StyledSafeAreaView className="text-red-500 p-10">
      <Text >Welcome my world</Text>
    </StyledSafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})