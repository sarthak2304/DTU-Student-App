import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react'
import SafeAreaView from '../SafeAreaView';
import Position from 'react-native/Libraries/Components/Touchable/Position';
// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { firebase, db } from '../../firebase'


const handleSignOut = async () => {
  try {
    firebase.auth().signOut()
    console.log('Signing out')
  } catch (error) {
    console.log(error)
  }
}

const Header = () => {

  const getUserName = () => {
    const user = firebase.auth().currentUser
    const unsubscribe = db.collection('users').where('owner_uid', '===', user.uid).limit(1).onSnapshot(
      snapshot => snapshot.docs.map(doc => {
        setCurrentLoggedInUser({
          username: doc.data().username
        })
      })
    )
    return unsubscribe
  }

  useEffect(() => {
    getUserName()
  },[])

  return (
    <SafeAreaView >
      <View style={styles.conatiner}>
        <TouchableOpacity onPress={handleSignOut}>
          <Image style={styles.logo} source={require('../../Assets/dtu-logo.jpg')} />
        </TouchableOpacity>

        <Text style={styles.name}>Test User 1</Text>

        <View style={styles.iconsConatiner}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../Assets/icons8-assignment-return-50.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../Assets/exams.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image style={styles.icon} source={require('../../Assets/bell.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 7
  },
  iconsConatiner: {
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: -0,
    resizeMode: 'contain',
  },
  name: {
    color: 'white',
    marginLeft: -100,
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 25,
    bottom: 15,
    width: 25,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    zIndex: 100,
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '900'
  }
})

export default Header