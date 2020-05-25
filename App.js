import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Layouts/home'
import * as font from 'expo-font'
import {AppLoading} from 'expo'
import Navigator from './routes/drawer'

const getFonts = () => {
  return font.loadAsync({
    'roboto-mono-medium':require('./assets/RobotoMono-Medium.ttf'),
    'roboto-mono-light':require('./assets/RobotoMono-Light.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsloaded] = useState(false)
  if(fontsLoaded){  
    return (
      <Navigator />
    );
  }else{
    return(
      <AppLoading startAsync={getFonts}
      onFinish = {() => setFontsloaded(true)}
      />
    )
  }
}
