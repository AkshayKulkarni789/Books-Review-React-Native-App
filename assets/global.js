import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    home:{
        padding:20,
        flex:1,
    },
    title:{
        fontFamily:'roboto-mono-medium',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    normal:{
        fontFamily: 'roboto-mono-light',
        fontSize:15,
        marginVertical: 8,
        lineHeight: 20,
    },
    input:{
        borderWidth: 1,
        padding: 10,
        borderColor: '#ddd',
        fontFamily: 'roboto-mono-medium',
        fontSize: 18,
        borderRadius: 6,
    },
    err:{
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})

export const rimages = {
    ratings : {
        '1' : require('./rating-1.png'),
        '2' : require('./rating-2.png'),
        '3' : require('./rating-3.png'),
        '4' : require('./rating-4.png'),
        '5' : require('./rating-5.png'),
    }
}