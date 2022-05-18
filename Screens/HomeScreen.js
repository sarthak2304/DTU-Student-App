import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import Courses from '../Components/Home/Courses'
import Schedule from '../Components/Home/Schedule'
import BottomTab, { bottomTabIcons } from '../Components/Home/BottomTab'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <Courses navigation={navigation}></Courses>
      <Schedule></Schedule>
      <BottomTab icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'black',
        flex: 1, 
    },
})

export default HomeScreen