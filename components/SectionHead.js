import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SectionHead(props) {
    return (
        <View style={styles.bar}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.sub}>{props.sub}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:21,
        fontWeight:'600',
        color:'#fff'
    },
    sub:{
        color:'#777777'
    },
    bar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})