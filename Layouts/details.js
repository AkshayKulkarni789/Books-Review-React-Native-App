import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {globalStyles, rimages} from '../assets/global'
import Card from '../common/card';

export default function Details({navigation}) {

    const rating = navigation.getParam('rating')

    return (
        <View style={globalStyles.home}>
            <Card>
                <Text style={globalStyles.title}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.normal}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text style={globalStyles.title}>Rating: </Text>
                    <Image source={rimages.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        padding:24,
        flex:1,
    },
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
})