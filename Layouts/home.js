import React,{useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from '../assets/global'
import Card from '../common/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './newreview'
import uuid from 'uuid/v1'

export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        {title: "Book1", rating:5, body: "Lorem ipsum dolor sit amet", key:'1'},
        {title: "Book2", rating:3, body: "Lorem ipsum dolor sit amet", key:'2'},
        {title: "Book3", rating:2, body: "Lorem ipsum dolor sit amet", key:'3'},
        {title: "Book4", rating:5, body: "Lorem ipsum dolor sit amet", key:'4'},
        {title: "Book5", rating:1, body: "Lorem ipsum dolor sit amet", key:'5'},
    ])

    const addReview = (review) => {
        review.key = uuid()
        setReviews((currReviews) => {
            return[review, ...currReviews]
        })
        setmodal(false)
    }

    const [modal, setmodal] = useState(false)

    return (
        <View style={globalStyles.home}>
            <Modal visible={modal} animationType='slide'>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.modalcontent}>
                    <MaterialIcons
                            name='close'
                            size={24}
                            onPress={()=> setmodal(false)}
                            style={{...styles.modaltoggle,...styles.modalclose}}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                onPress={()=> setmodal(true)}
                style={styles.modaltoggle}
            />
            <FlatList
               data={reviews}
               renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Card>
                        <Text style={globalStyles.title}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
               )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalcontent:{
        flex: 1,
    },
    modaltoggle:{
        marginBottom: 10,
        borderWidth:1,
        borderColor: '#f2f2f2',
        padding:10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalclose:{
        margin: 20,
    }
})