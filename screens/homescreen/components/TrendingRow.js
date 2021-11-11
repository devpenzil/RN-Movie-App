import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet,ScrollView, FlatList } from 'react-native'
import Trendingimg from '../../../components/Trendingimg'
import {apiBaseUrl,trending, imageUrl} from '../../../constants/Constants'
export default function TrendingRow() {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`${apiBaseUrl}${trending}`).then((Response)=>{
            setData(Response.data.results)
            // alert('success')
        }).catch((Error)=>{
            alert('Error')
        })
    }, [])

    const render = ({item}) => {
        return(
            <Trendingimg url={`${imageUrl}${item.backdrop_path}`} />
        )
    }
    return (
        <View>
            <FlatList data={data} horizontal={true} renderItem={render} />  
        </View>
    )
}
