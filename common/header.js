import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation, title}){

    const pressHandler = () => {
        navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={pressHandler} style={styles.icon} />
            <View style={styles.headeric}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headertext}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headertext:{
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 1,
        fontFamily: 'roboto-mono-medium',
    },
    icon: {
        position:'absolute',
        left: 16,

    },
    headerImage:{
        width: 26,
        height: 26,
        marginTop: 5,
        marginHorizontal: 5,
    },
    headeric:{
        flexDirection: 'row'
    }
})