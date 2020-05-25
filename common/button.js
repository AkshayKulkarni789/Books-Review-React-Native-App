import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'

export default function NButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.btext}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    btext:{
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'roboto-mono-medium',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign:'center',
    }
})