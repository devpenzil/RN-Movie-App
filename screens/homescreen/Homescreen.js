import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SetRows from './components/SetRows'
import TrendingRow from './components/TrendingRow'
import {originals, ActionMovies, Documentaries, ComedyMovies} from '../../constants/Constants'
import { useNavigation } from '@react-navigation/native'
export default function Homescreen() {
    const navigation = useNavigation()
    const clicked =  () => {
       navigation.navigate('Details')
    }
    return (
        <ScrollView style={styles.container}>
            <TrendingRow />
            <SetRows api={originals} trigger={clicked} label={'Most Popular'} sub={'see more >'} />
            <SetRows api={ActionMovies} trigger={clicked} label={'Action Movies'} sub={'see more >'} />
            <SetRows api={ComedyMovies} trigger={clicked} label={'Comedy Movies'} sub={'see more >'} />
            <SetRows api={Documentaries} trigger={clicked} label={'Documentaries'} sub={'see more >'} />
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