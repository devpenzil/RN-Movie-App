/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Homescreen from './screens/homescreen/Homescreen';
import MovieDetails from './screens/moviedetails/MovieDetails';
import SplashScreen from './screens/splashscreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './tabs/Tab';

const App = () => {
  const stack = createNativeStackNavigator()
  return (
    <>
    <NavigationContainer >
      <stack.Navigator initialRouteName='Home' 
      screenOptions={{
        headerShown: false
      }}>
        {/* <stack.Screen name='Home' component={Homescreen} />
        <stack.Screen name='Details' component={MovieDetails} /> */}
        <stack.Screen name='tab' component={Tab} />
      </stack.Navigator>
    </NavigationContainer>

    {/* <Homescreen /> */}
    </>
  );
};


export default App;
