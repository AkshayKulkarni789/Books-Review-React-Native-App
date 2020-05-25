import React from 'react';
import {StyleSheet, Button, View, TextInput, Text} from 'react-native'
import {globalStyles} from '../assets/global'
import {Formik} from 'formik'
import * as yup from 'yup'
import NButton from '../common/button'

const reviewschema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('isnum1-5','Rating must be a number between 1 and 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.home}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={reviewschema}
                onSubmit={(values, actions) => {
                    addReview(values)
                    actions.resetForm()
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.err}>{props.touched.title && props.errors.title}</Text>
                        <TextInput 
                            multiline minHeight={200}
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.err}>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                            keyboardType='numeric'
                            style={globalStyles.input}
                            placeholder='Rating (Between 1 and 5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.err}>{props.touched.rating && props.errors.rating}</Text>

                        <NButton text='Submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}