import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

export default function ImgBasic(props) {
    const image = {uri : props.url}
    let call = props.trigger
    return (
        <View>
            <TouchableOpacity onPress={()=>call(props.id)}>
            <ImageBackground style={styles.image} resizeMode='cover' source={image} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:150,
        height:200,
        backgroundColor:'#1C1A29',
        borderRadius:20,
        overflow:'hidden',
        marginHorizontal:5
    }
})