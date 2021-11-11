import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

export default function ImgBasic(props) {
    const image = {uri : props.url ? props.url : ""}
    let call = props.trigger
    return (
        <View style={styles.container}>
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
        backgroundColor:'#434051',
        borderRadius:20,
        overflow:'hidden',
        marginHorizontal:5
    },
    container : {
        height:200
    }
})