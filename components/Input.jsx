import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'; 
import { hp, wp } from '../helpers/common'; 
import Input from '../components/Input'; 


const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles]}>
        {
            props.icon && props.icon
        }
      <TextInput
      style={{flex: 1}}
      placeholderTextColor={theme.colors.textLight}
      ref={props.inputref && props.inputref}
      {...props}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: hp(7.2), 
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.4,
            borderColor: theme.colors.text, 
            borderRadius: theme.radius.xxl, 
            paddingHorizontal: 18,
            gap: 12,
        }
    })
