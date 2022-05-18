import { View, Text, Image, StyleSheet, TouchableOpacity, useState } from 'react-native'
import React from 'react'
import SafeAreaView from '../../Components/SafeAreaView'
import { SUBJECTS } from '../../Data/Subjects'
import BottomTab, { bottomTabIcons } from '../../Components/Home/BottomTab'

const Header = ({navigation}) => (
    <SafeAreaView >
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/double-left.png' }} style={styles.icon} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', flex: .9 }}>
                <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>{SUBJECTS[1].Code}</Text>
            </View>
        </View>
    </SafeAreaView>
)

const Subject = () => (
    <View style={{ margin: 10, flexDirection: 'row' }}>
        <Text style={{ color: '#45A29E', fontSize: 20 }}>Subject: </Text>
        <Text style={styles.basic}>{SUBJECTS[1].subject}</Text>
    </View>
)

const TeacherName = () => (
    <View style={{ margin: 10, flexDirection: 'row' }}>
        <Text style={{ color: '#45A29E', fontSize: 20 }}>Professor: </Text>
        <Text style={styles.basic}>{SUBJECTS[1].professor}</Text>
    </View>
)

const AAS = () => (
    <View style={{ backgroundColor: '#0B0C10', borderRadius: 10, margin: 14 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10, marginBottom: 20 }}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/dotty/240/000000/task.png' }} style={styles.images} />
                <Text style={{ color: '#C5C6C7' }}>Assignments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/external-outline-wichaiwi/256/000000/external-assessment-customer-validation-outline-wichaiwi-3.png' }} style={styles.images} />
                <Text style={{ color: '#C5C6C7' }}>Assessment</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/ios-filled/250/000000/books.png' }} style={styles.images} />
                <Text style={{ color: '#C5C6C7' }}>Study Material</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/ios/250/000000/google-classroom.png' }} style={styles.images} />
                <Text style={{ color: '#C5C6C7' }}>Classroom</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const ADQP = () => (
    <View style={{ backgroundColor: '#0B0C10', borderRadius: 10, margin: 14, marginTop: 0, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/250/000000/external-announcement-business-and-education-flatart-icons-outline-flatarticons.png' }} style={styles.bottomImages} />
                {/* <Text style={{ color: '#C5C6C7' }}>Announcements</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/ios/250/000000/questions.png' }} style={styles.bottomImages} />
                {/* <Text style={{ color: '#C5C6C7' }}>Doubts</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://img.icons8.com/dotty/240/000000/poll-topic.png' }} style={styles.bottomImages} />
                {/* <Text style={{ color: '#C5C6C7' }}>Poll</Text> */}
            </TouchableOpacity>
        </View>
    </View>
)

const Subject_0 = ({navigation}) => {
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ backgroundColor: '#1F2833', borderBottomLeftRadius: 20, borderBottomRightRadius: 20,  flexGrow: .5 }}>
                <Header navigation ={navigation}/>
                <Subject />
                <TeacherName />
                <AAS />
                <ADQP />
            </View>
            
            <View style={styles.bottomBar} >
                    <BottomTab icons={bottomTabIcons} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        tintColor: 'white',
        margin: 10
    },
    code: {
        fontSize: 30,
        color: 'white',
        marginTop: 3,
        marginLeft: 8,
        textAlign: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    basic: {
        color: '#C5C6C7',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#0B0C10',
        flex: 1,
        borderRadius: 10,
        textAlign: 'center'
    },
    images: {
        width: 150,
        height: 150,
        tintColor: '#66FCF1'
    },
    bottomImages: {
        width: 50,
        height: 50,
        tintColor: '#66FCF1'
    },
    bottomBar: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-end',
    }
})

export default Subject_0