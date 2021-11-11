import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { styles } from './style'
export default function SplashScreen() {
    
    return (
       <>
       <ImageBackground style={styles.imagehero} source={require('../../assets/cover.png')} >
       <View style={styles.cover}>
           <View>
               <Image style={styles.logo} source={require('../../assets/logo.png')} />
           </View>
        </View>
        </ImageBackground>
       </>
    )
}
