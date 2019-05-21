import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent5 extends Component{
    render(){
        return (
            <View style={ {margin:16} }>
                {/* 아래처럼 일일이 속성들을 지정하는 작업이 매우 불편함. */}
                {/* 전달받은 props을 한방에 적용하는 기법 */}
                {/* <Button title={this.props.aaa} color={this.props.color} onPress="" ></Button> */}
                {/* ... : 매개변수의 다중 argument기법임 */}
                {/* Spread[펼치다, 벌리다] property */}
                <Button {...this.props}></Button>
            </View>
        );
    }
}