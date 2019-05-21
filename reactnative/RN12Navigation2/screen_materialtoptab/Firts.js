import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class First extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={ styles.plainText }>FIRST!!!</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    plainText:{
        padding:8,
    }
});