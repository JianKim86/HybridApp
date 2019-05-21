import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class MyComponent3 extends Component{
    render(){
        return (
            // 1)우선 간단한 텍스트 출력
            // <View>
            //     <Text>Component 3</Text>
            // </View>

            // 2)버튼
            <View style={ {margin:16} }>
                <Text> {this.props.text} </Text>
                <Button onPress={ this.props.onPress } title= {this.props.btnTitle} ></Button>
            </View> 
        );
    }
}

// MyComponent3를 다른 .js문서에서 사용하려면..
export default MyComponent3;