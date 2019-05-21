import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SecondTab extends Component{

    static navigationOptions={
        tabBarIcon: ()=><Image source={ require('../icons/cha02.png') } style={ {width:24, height:24} }></Image>,
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.plainText}>SECOND TAB</Text>
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