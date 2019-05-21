import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class DoneScreen extends Component{

    //네비게이션 헤더툴바 옵션
    static navigationOptions={
        title:"DONE LIST",
        headerStyle:{backgroundColor:'#4f51e4'},
        headerTintColor:'white',
    }

    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.title }>DONE LIST</Text>

                {/* Main.js에 있는 done리스트배열을 표시하기 */}
                {/* 먼저, 배열개수부터. */}
                <Text style={ {margin:8}}> Done list number : { this.props.screenProps.done.length } </Text>
                {/* 배열개수만큼 Text컴포넌트 출력 .map()메소드 */}
                {
                    this.props.screenProps.done.map( (item, index)=>
                        <TouchableOpacity key={ index }>
                            <Text style={ {color:'green'} }>{item}</Text>
                        </TouchableOpacity>
                    )
                }


                {/* 스크린 전환 텍스트 버튼 */}
                <TouchableOpacity onPress={ ()=>{ this.props.navigation.navigate('Todo'); } }>
                    <Text style={ {color:'blue', marginTop:30} } >Back to Todo List</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//스타일 객체
const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        margin:16,
    }
});