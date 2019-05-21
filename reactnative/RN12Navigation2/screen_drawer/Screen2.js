import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Screen2 extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={ styles.plainText }>SCREEN #2</Text>

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