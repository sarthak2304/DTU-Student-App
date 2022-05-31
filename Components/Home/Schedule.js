import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { DAILYSCHEDULE } from '../../Data/DailySchedule'
import { db } from '../../firebase'

const Schedule = () => {
    const [currentDate, setcurrentDate] = useState('')
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        var date = new Date().getDate() //Current Date
        var month = new Date().getMonth()//current month
        var day = new Date().getDay()//current day
        setcurrentDate(
            date + ' ' + monthNames[month] + ', ' + dayNames[day]
        )
    }, [])

    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        db.collectionGroup('schedule').onSnapshot(snapshot => {
            setSchedule(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderRadius: 20 }}>

            <View style={styles.topBar}>
                <Text style={{ color: 'white', fontSize: 30 }}> Your day's Schedule</Text>
                <View style={styles.DateDay}>
                    <TouchableOpacity style={{ marginRight: 5 }}>
                        <Image style={styles.icon} source={require('../../Assets/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#2BFE98', fontSize: 25, fontWeight: 'bold' }}>
                        {currentDate}
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 5, marginTop: 5 }}>
                        <Image style={styles.icon} source={require('../../Assets/rightArrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                {DAILYSCHEDULE.map((subject, index) => (
                    <View key={index} style={styles.bottomBar}>
                        <View style={styles.aligning}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Image style={{ marginTop: 1, marginLeft: 8, borderRadius: 5 }} source={require('../../Assets/class.png')}></Image>
                                </TouchableOpacity>
                                <Text style={{ fontWeight: 'bold', marginLeft: 6, marginTop: -3, backgroundColor: 'black', color: 'white', borderRadius: 5, paddingLeft: 3, paddingRight: 3 }}>{subject.Attendance}</Text>
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                    {subject.Class}
                                </Text>
                                <Text style={{ color: 'black' }}>
                                    {subject.Teacher}
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                                    <Image style={{ height: 20, width: 20 }} source={require('../../Assets/location.png')} />
                                    <Text style={{ color: 'black', marginTop: 2 }}>
                                        {subject.Location}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', right: 15, marginTop: 1 }}>
                                <View style={{ alignItems: 'center', }}>
                                    <TouchableOpacity>
                                        <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={require('../../Assets/clock.png')} />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black' }}>
                                        {subject.Time}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#5C5A59',
        height: 90,
        borderRadius: 20,
        margin: 15,
        alignItems: 'center',
        marginBottom: 2
    },
    icon: {
        height: 40,
        width: 40
    },
    DateDay: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomBar: {
        backgroundColor: '#B7F4EB',
        borderColor: 'black',
        borderWidth: 3,
        color: 'black',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 2,
        height: 75
    },
    aligning: {
        flexDirection: 'row'
    },
    lastIcons: {
        width: 30,
        height: 30,
    }
})

export default Schedule