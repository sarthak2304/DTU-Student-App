import { View, Text } from 'react-native'
import React from 'react'
// import { MotiView } from '@notify/Components'
import { MotiView } from 'moti'

const LoadingIndicator = ({ size }) => {
    return (
        <MotiView
            from={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 0,
                shadowOpacity: 0.5
            }}
            animate={{
                width: size + 20,
                height: size + 20,
                borderRadius: (size + 20) / 2,
                borderWidth: size/10,
                shadowOpacity: 1
            }}
            transition={{
                type: 'timing',
                duration: 1000,
                repeat: 3
            }}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 10,
                borderColor: '#fff',
                shadowColor: '#fff',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10
            }}
        />
    )
}

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
        }}>
            <LoadingIndicator size={100} />
        </View>
    )
}

export default LoadingScreen