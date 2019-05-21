import React, {Component} from 'react';
import {View, Text} from'react-native';

export default class Main extends Component{

    //1.생성자
    constructor(){
        super();
        console.log('constructor');
    }

    //2.화면에 보여지기 전(render전)이 호출되는 메소드
    componentWillMount(){
        console.log('component will mount');
    }

    //3.화면에 그려내기
    render(){
        console.log('render');
        return (
            <View style={ { padding:16 }}>
                <Text>Hello</Text>
            </View>
        );
    }

    //4. 화면에 그려낸 후 컴포넌트가 디바이스 안착되었을 때 호출
    componentDidMount(){
        //보통 이곳에서 서버나 DB에서 데이터를 읽어오는 등의 비동기적인 작업을 수행함.
        //사용자들은 화면에 내용물은 없더라도 레이아웃을 보여졌을 때 느리지 않다고 느낌.
        // render()메소드의 return에 의해 컴포넌트들이 존재한다는 것이 확정된 상태임.
        console.log('component did mount');
    }

    //5. 컴포넌트가 종료될 때 ..호출되는 메소드
    componentWillUnmount(){
        console.log('component will unmount');
    }

}