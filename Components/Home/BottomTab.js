import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'

export const bottomTabIcons =[
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/48/000000/home.png' ,
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/000000/home.png',
    },
    {
        name: 'Exam&Results',
        active: 'https://img.icons8.com/external-bartama-glyph-64-bartama-graphic/64/000000/external-Exam-education-and-school-glyph-bartama-glyph-64-bartama-graphic.png',
        inactive: 'https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/000000/external-Exam-education-and-school-outline-bartama-outline-64-bartama-graphic.png' ,
    },
    {
        name: 'Payment&Dues',
        active: 'https://img.icons8.com/ios-filled/50/000000/rupee.png' ,
        inactive: 'https://img.icons8.com/ios/50/000000/rupee.png',
    },
    {
        name: 'PlacementNews',
        active: 'https://img.icons8.com/ios-filled/50/000000/permanent-job.png',
        inactive: 'https://img.icons8.com/ios/50/000000/permanent-job.png',
    },
    {
        name: 'PersonalInfo',
        active: 'https://lh3.googleusercontent.com/KL7ivSWK3nX_8LqHtD5WmsC81gx_NsX0RQIxKA_Xvn_i_yp7DAlz9bsnCeuDGVvTC4DaSvZC90uShH7fF9ahcfoK9qEGfJIWy140GHtKPHZiiQOa-VsQHE8N4ny6t70qsZaO916wTg=w2400',
        inactive: 'https://lh3.googleusercontent.com/KL7ivSWK3nX_8LqHtD5WmsC81gx_NsX0RQIxKA_Xvn_i_yp7DAlz9bsnCeuDGVvTC4DaSvZC90uShH7fF9ahcfoK9qEGfJIWy140GHtKPHZiiQOa-VsQHE8N4ny6t70qsZaO916wTg=w2400',
    },
]

const BottomTab = ({icons}) => {
    const [activeTab, setactiveTab] = useState('Home')

    // const Icon = ({icon}) => {
    //     <TouchableOpacity onPress={() => setactiveTab(icon.name)}>
    //         <Image source={{uri : icon.inactive}} style={styles.icon}/>
    //     </TouchableOpacity>
    // }
  return (
    <View style={styles.container}>
      {icons.map((icon,index) => (
        //   <Icon key={index} icon={icon}/>
          <TouchableOpacity key={index} onPress={() => setactiveTab(icon.name)}>
            <Image source={{uri : activeTab === icon.name ? icon.active: icon.inactive}} style={icon.name !== 'PersonalInfo' ?styles.icon : styles.myphoto} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    icon : {
        width: 35,
        height: 35,
        margin: 5,
        tintColor: 'white'
    },
    myphoto : {
        width: 35,
        height: 35,
        margin: 5,
        marginRight: 8,
        borderRadius: 25,
    }, 
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: '#E9BFFD',
        marginTop: 5,
        borderRadius: 20,
        margin: 3        
    }
})

export default BottomTab