import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

export default class Screen3 extends Component{

    // drawer옵션
    static navigationOptions={
        drawerLabel:'screen #3',
        drawerIcon:()=><Image source={ require('../icons/cha04.png') } style={ {width:30, height:30, borderRadius:15,} }></Image>,        
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={ styles.plainText }>SCREEN #3</Text>

                {/* Drawer를 열기위한 버튼 추가 */}
                <View style={ {margin:16,} }>
                    <Button title="open drawer" onPress={ ()=>{ this.props.navigation.openDrawer(); } } ></Button>
                </View>
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