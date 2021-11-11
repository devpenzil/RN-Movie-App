import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, AsyncStorage } from 'react-native'
import SetRows from './components/SetRows'
import TrendingRow from './components/TrendingRow'
import {originals, ActionMovies, Documentaries, ComedyMovies} from '../../constants/Constants'
import { useNavigation } from '@react-navigation/native'
import { AsyncStorageStatic } from 'react-native'
export default function Homescreen() {
    const navigation = useNavigation()
    const clicked =  (id) => {
        alert(id)
       navigation.navigate('Details',{
           filmid:id
       })
    }
    const rows = [
        {
            api: originals,
            trigger:clicked,
            label:'Most Popular',
            sub:'See more >'
        },
        {
            api: ActionMovies,
            trigger:clicked,
            label:'Action movies',
            sub:'See more >'
        },
        {
            api: ComedyMovies,
            trigger:clicked,
            label:'Comedy Movies',
            sub:'See more >'
        },
        {
            api: Documentaries,
            trigger:clicked,
            label:'Documentaries',
            sub:'See more >'
        }
    ]
    const setrows = ({item}) => {
        return(
            <SetRows api={item.api} trigger={item.trigger} label={item.label} sub={item.sub} />
        )
    }
    return (
        <ScrollView style={styles.container}>
            <TrendingRow />
            <FlatList data={rows} renderItem={setrows} />
        </ScrollView>
    )
}
 const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#1C1A29',
        padding:10
    }
})