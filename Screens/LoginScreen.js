import { View, Text, Image, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
// import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import {firebase} from '../firebase'

const LoginScreen = () => {
    const LoginFormSchema = Yup.object().shape({
        password: Yup.string()
            .required()
            .min(8, 'Your Password should have atleast 8 characters')
    })

    const onLogin = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password) 
            console.log('Firebase Login Successful', email, password)
        } catch(error) {
            Alert.alert('Arre baba galat password daale ho')
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', password: '' }}
                onSubmit={values => {
                    onLogin(values.email, values.password)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../Assets/dtu-logo.jpg')} style={styles.logo}></Image>
                            <Text style={{color: 'white', marginBottom: 10, fontSize: 20}}>DelTech Student Login</Text>
                        </View>

                        <View style={[styles.inputField,
                        //   {borderColor: values.email.length > 8 ? '#cccccc' : 'red'}                        
                        ]}>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                autoFocus={true}
                                keyboardType='default'
                                textContentType='emailAddress'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        <View style={[styles.inputField,
                        {borderColor: values.password.length > 7 || Validator.validate(values.password-1) ? '#cccccc' : 'red'}]
                        }>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor='#444'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                color='black'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 20, marginRight: 12 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                        </View>

                        <Pressable onPress={handleSubmit} titleSize={30} style={styles.logIn(isValid)}  >
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Log In</Text>
                        </Pressable>
                    </>
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
        marginBottom: 20,
        marginTop: 55
    },
    inputField: {
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        margin: 10
    },
    wrapper: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 50,
        // alignItems: 'center'
        // alignContent: 'center'
        // justifyContent: 'center'
    },
    logIn: isValid => ({
        borderRadius: 10,
        margin: 10,
        backgroundColor: isValid ? '#0096F6' : '#9ACAf7',
        padding: 12,
        alignItems: 'center'
    })
})

export default LoginScreen