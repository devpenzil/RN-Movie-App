import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImgBasic from '../../../components/ImgBasic';
import SectionHead from '../../../components/SectionHead';
import {imageUrl} from '../../../constants/Constants'
export default function  SetRows(props) {
  const [data, setData] = useState()
  const api = props.api
  useEffect(() => {
    axios.get(`${api}`).then((Response)=>{
      setData(Response.data.results)
    }).catch((Error)=>{
      alert('Error')
    })
  }, [])
  const clicked = () => {
    alert('Hello')
  }
  const render = ({item}) => {
    return(
      <ImgBasic trigger={props.trigger} url={`${imageUrl}${item.poster_path}`} />
    )
  }
  return (
    <View>
      <View style={styles.bar} >
        <SectionHead label={props.label} sub={props.sub} />
      </View>
      {data ? 
      <FlatList data={data} horizontal={true} renderItem={render} />
      : <Text style={styles.loadder}>Loading...</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
    bar:{
        marginVertical:15
    },
    loadder:{
      color:'#fff'
    }
})
