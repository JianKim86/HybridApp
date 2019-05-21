import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class TodoScreen extends Component{

    //네비게이션 헤더툴바 옵션
    static navigationOptions={
        title:"TODO LIST",
        headerStyle:{backgroundColor:'#4f51e4'},
        headerTintColor:'white',
    }

    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.title }>TODO LIST</Text>

                {/* 할일목록(todo list) 데이터배열을 보여주는 작업 */}
                {/* 데이터배열을 DoneScreen과 같은 사용되어야 하므로. 이 클래스에 존재하는 것이아니라.. */}
                {/* StackNavigatior를 생성한 곳(Main.js)에 존재해야 함. */}
                {/* Main.js로 부터 전달받은 프로퍼티[ screenProps.todo배열 ] 사용 */}

                {/* 먼저 전달받은 할일목록데이터배열의 개수출력 */}
                <Text style={ {margin:8} }> Todo list number : { this.props.screenProps.todo.length }</Text>

                {/* 배열의 개수만큼 Text컴포넌트를 출력 .map()메소드 이용  */}
                {
                    this.props.screenProps.todo.map( (item, index, array)=>{
                        return <TouchableOpacity key={ index } onPress={ ()=>{ this.props.screenProps.addDone(index); } }>
                                    <Text style={ {color:'indigo'} }> {item} </Text>
                                </TouchableOpacity>
                    } )
                }                


                {/* 스크린 전환 텍스트 버튼 */}
                <TouchableOpacity onPress={ ()=>{ this.props.navigation.navigate('Done'); } }>
                    <Text style={ {color:'blue', marginTop:30} } >Go to Done List</Text>
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