import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class FirstTab extends Component{

    //4. 탭버튼에 아이콘 넣기위한 설정[configuration]
    static navigationOptions={
        tabBarIcon: ()=><Image source={ require('../icons/cha01.png') } style={ {width:24, height:24} }></Image>,
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.plainText}>FIRST TAB</Text>
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