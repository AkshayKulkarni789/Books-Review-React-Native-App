import {createStackNavigator} from 'react-navigation-stack'
import About from '../Layouts/about'
import React from 'react';
import Header from '../common/header'

const screens = {
    About: {
        screen: About,
        navigationOptions:({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} title= 'About Us'/>,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {backgroundColor: 'coral' }
    }
})

export default AboutStack