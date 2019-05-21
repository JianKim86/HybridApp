import React, {Component} from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Screen1 from './screen_drawer/Screen1';
import Screen2 from './screen_drawer/Screen2';
import Screen3 from './screen_drawer/Screen3';

//1. DrawerNavigator객체 생성 및 스크린지정
const DrawerNav= createDrawerNavigator(
    {
        one: {screen:Screen1},
        two: {screen:Screen2},
        three: {screen:Screen3},
    }
);

//2. AppContainer객체 생성
const AppContainer= createAppContainer( DrawerNav ); 

//3. AppContainer컴포넌트 랜더링
export default class MainDrawer extends Component{
    render(){
        return <AppContainer/>
    }
}