import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import {API_KEY, imageUrl, Documentaries} from '../../constants/Constants';
import SetRows from '../homescreen/components/SetRows';
export default function MovieDetails() {
  const movieid = 796499;
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&language=en-US`,
      )
      .then(Response => {
        setData(Response.data);
      })
      .catch(Error => {
        alert('Error');
      });
  }, []);
  return (
    <>
      {data ? (
        <ScrollView style={styles.container}>
          <Image
            style={styles.hero}
            source={{
              uri: `${imageUrl}${data.backdrop_path}`,
            }}
          />
          <View style={styles.basecontent}>
            <View style={styles.boxes}>
              <View>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.others}>{data.release_date}</Text>
              <TouchableOpacity><View style={styles.button}><Text style={styles.buttontext}>Play Now</Text></View></TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxes}>
              <Image
                style={styles.poster}
                source={{
                  uri: `${imageUrl}${data.poster_path}`,
                }}
              />
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={styles.overview_head}>Synopsis</Text>
            <Text style={styles.overview_content}>{data.overview}</Text>
          </View>
    
        </ScrollView>
      ) : (
        <Text></Text>
      )}
      
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1C1A29',
    // padding: 10,
  },
  hero: {
    width: '100%',
    height: 360,
    zIndex: 10,
    opacity: 0.3,
  },
  basecontent: {
    marginTop: -180,
    // height: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 999,
    paddingHorizontal: 10,
  },
  poster: {
    width: 140,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
  },
  title:{
      fontSize:21,
      fontWeight: '600',
      color:'#fff',
  },
  boxes:{
    width:'50%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  button:{
    backgroundColor:'#E82626',
    width:160,
    paddingVertical:5,
    borderRadius:8,
    marginVertical:10
  },
  buttontext: {
    textAlign:'center',
    fontSize:14,
    color:'#fff',
    fontWeight:'500'
  },
  others:{
    color:'#fff',
    fontSize:13,
    fontWeight:'400'
  },
  overview:{
    padding:20
  },
  overview_head:{
    fontSize:21,
    color:'#fff',
    marginBottom:5
  },
  overview_content: {
    color:'#fff',
    fontSize:12,
    lineHeight:21
  }
});
