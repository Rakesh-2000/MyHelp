import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width:"50%", }}>
        <View style={{backgroundColor:"#fff", marginHorizontal:10, paddingVertical:10, borderRadius:10, elevation:3}}>
            <Text style={{color:"#000", textAlign:'center', fontWeight:'600', fontSize:18}}>{children}</Text>
        </View>      
    </TouchableOpacity>
  )
}

export default Button