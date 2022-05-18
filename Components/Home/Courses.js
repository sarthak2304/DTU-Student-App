import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SUBJECTS } from '../../Data/Subjects'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const Courses = ({ navigation }) => {
    return (
        // <View style={{ marginBottom: 13 }}>
        //     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        //         {SUBJECTS.map((story, index) => (
        //             <View key={index} style={{ alignItems: 'center' }}>
        //                 <TouchableOpacity onPress={() => navigation.push('Subject_0')}>
        //                     <Image source={{ uri: story.image }} style={styles.story}  />
        //                 </TouchableOpacity>
        //                 <Text style={styles.code}>
        //                     {story.Code}
        //                 </Text>
        //             </View>
        //         ))}
        //     </ScrollView>
        // </View>
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.push('Subject_0')}>
                            <Image source={{ uri: SUBJECTS[0].image }} style={styles.story}  />
                        </TouchableOpacity>
                        <Text style={styles.code}>
                            {SUBJECTS[0].Code}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.push('Subject_1')}>
                            <Image source={{ uri: SUBJECTS[1].image }} style={styles.story}  />
                        </TouchableOpacity>
                        <Text style={styles.code}>
                            {SUBJECTS[1].Code}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.push('Subject_2')}>
                            <Image source={{ uri: SUBJECTS[2].image }} style={styles.story}  />
                        </TouchableOpacity>
                        <Text style={styles.code}>
                            {SUBJECTS[2].Code}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.push('Subject_3')}>
                            <Image source={{ uri: SUBJECTS[3].image }} style={styles.story}  />
                        </TouchableOpacity>
                        <Text style={styles.code}>
                            {SUBJECTS[3].Code}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.push('Subject_4')}>
                            <Image source={{ uri: SUBJECTS[4].image }} style={styles.story}  />
                        </TouchableOpacity>
                        <Text style={styles.code}>
                            {SUBJECTS[4].Code}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.push('Subject_5')}>
                            <Image source={{ uri: SUBJECTS[5].image }} style={styles.story}  />
                        </TouchableOpacity>
                        <Text style={styles.code}>
                            {SUBJECTS[5].Code}
                        </Text>
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 8,
        borderWidth: 3,
        borderColor: '#FF5733',
    },
    code: {
        color: 'white',
        marginTop: 3,
        marginLeft: 8
    }
})

export default Courses