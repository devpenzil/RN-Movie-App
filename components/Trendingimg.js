import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'

export default function Trendingimg(props) {
    const image = {uri : props.url}
    return (
        <View>
            <ImageBackground style={styles.img} resizeMode={'cover'} source={image} />
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width:290,
        height:220,
        backgroundColor:'#1C1A29',
        marginHorizontal:5,
        borderRadius:20,
        overflow:'hidden'
    }
})
