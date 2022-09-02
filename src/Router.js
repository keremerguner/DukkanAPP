import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from './pages/Products/Products'
import Detail from './pages/Detail/Detail'

const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name='ProductPage' component={Products} options={{
          title: 'Dükkan',
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'}
        }} />
        <Stack.Screen name='DetailPage' component={Detail} options={{
          title: 'Detay',
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white'
        }}/> 
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default Router;