import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const AddIcon = ({name,size,color,onPress}) => {
  return (
    <Pressable onPress={onPress} style={{paddingHorizontal:15, }}>
     <AntDesign name={name} size={size} color={color}/>
    </Pressable>
  )
}

export default AddIcon