import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './Screens/HomeScreen'
import Subject_0 from './Screens/Subjects/Subject_0'
import Subject_1 from './Screens/Subjects/Subject_1'
import Subject_2 from './Screens/Subjects/Subject_2'
import Subject_3 from './Screens/Subjects/Subject_3'
import Subject_4 from './Screens/Subjects/Subject_4'
import Subject_5 from './Screens/Subjects/Subject_5'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown : false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='Subject_0' component={Subject_0}/>
            <Stack.Screen name='Subject_1' component={Subject_1}/>
            <Stack.Screen name='Subject_2' component={Subject_2}/>
            <Stack.Screen name='Subject_3' component={Subject_3}/>
            <Stack.Screen name='Subject_4' component={Subject_4}/>
            <Stack.Screen name='Subject_5' component={Subject_5}/>
        </Stack.Navigator>
    </NavigationContainer>
)


export default SignedInStack