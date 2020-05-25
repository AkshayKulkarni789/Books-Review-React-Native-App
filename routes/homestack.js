import {createStackNavigator} from 'react-navigation-stack'
import Home from '../Layouts/home'
import Details from '../Layouts/details'
import React from 'react';
import Header from '../common/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title='Review Time!'/>,
            }
        }
    },
    Details: {
        screen: Details,
        navigationOptions:{
            title:''
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {backgroundColor: 'coral' }
    }
})

export default HomeStack