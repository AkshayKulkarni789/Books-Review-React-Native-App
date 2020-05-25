import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../assets/global'

export default function About() {
    return (
        <View style={globalStyles.home}>
            <Text style={globalStyles.title}>Hey there! I'm Akshay, a Computer Science student. I made this app using ReactNative in my pursuit to learn more about App Development among other things.</Text>
        </View>
    )
}