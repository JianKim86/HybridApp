import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class SecondComponent extends Component{

    // StackNavigator를 사용하면 네비게이션용 header툴바가 자동으로 생김
    // 이곳에 보통 screen의 title이 표시됨. 기본으로 표시되지 않음. 표시하려면 options설정을 해야함.
    // static 변수 navigationOptions만들면 옵션을 지정할 수 있음.
    // 옵션객체에 적용되는 멤버(프로퍼티)의 키워드가 정해져 있음.
    // static navigationOptions={
    //     title: 'Second',
    //     headerStyle: {backgroundColor:'#f4511e'},
    //     headerTintColor: '#ffffff', //헤더글씨 색상
    // }

    // 네비게이션용 툴바를 아예 없애기..
    static navigationOptions={
        header: null,
    }
    // 이 네이게이션 옵션은 createStackNavigator를 할 때 설정할 수 도 있음.

    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.plainText }>Second Screen.</Text>

                {/* HomeComponent로 돌아가는 버튼 */}
                <Button title="Back to Home screen" color="indigo" onPress={ ()=> this.props.navigation.navigate('Home') }></Button>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{ flex:1, justifyContent:'center', alignItems:'center',},
    plainText:{ padding:8, }
});