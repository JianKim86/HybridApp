import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class MyComponent4 extends Component{

    //컴포넌트 클래스에 props가 전달되지 않았을 때를 대비하기 위한 특별한 static멤버가 존재함.
    static defaultProps={
        name: 'no name',
        title: 'untitled',
        onPress: ()=>{},
    }

    render(){
        return (
            <View style={ {margin:16} }>
                <Text>Hello {this.props.name}!</Text>
                <Button title={ this.props.title} onPress={ this.props.onPress}></Button>                
            </View>
        );
    }
}