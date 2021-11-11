/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './tabs/Tab';
import {globalid} from './context/context'
const App = () => {
  const stack = createNativeStackNavigator()
  return (
    <>
    <globalid.Provider value={{id: 796499}}>
    <NavigationContainer >
      <stack.Navigator initialRouteName='Home' 
      screenOptions={{
        headerShown: false
      }}>
        <stack.Screen name='tab' component={Tab} />
      </stack.Navigator>
    </NavigationContainer>

    {/* <Homescreen /> */}
    </globalid.Provider>
    </>
  );
};


export default App;
