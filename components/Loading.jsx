import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { theme } from '../constants/theme'

const Loading = ({size="large", Color=theme.colors.primary}) => {
  return (
    <View styel={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})