import React, {Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FirstTab from './screen_bottomtab/FirstTab';
import SecondTab from './screen_bottomtab/SecondTab';
import ThirdTab from './screen_bottomtab/ThirdTab';

//1. FirstTab.js, SecondTab, ThirdTab만들고 난 후
// 이를 설정한 BottomTabNavigator 생성
// const bottomTabNav= createBottomTabNavigator({
//     First : {screen:FirstTab},
//     Second : {screen:SecondTab},
//     Third : {screen:ThirdTab, navigationOptions:{ tabBarIcon: ()=><Image source={ require('./icons/cha03.png') } style={ {width:24, height:24} }></Image>, }}
// });

//5. BottomTabNavigator의 탭바설정[configuration]
const bottomTabNav= createBottomTabNavigator({
    First : {screen:FirstTab},
    Second : {screen:SecondTab},
    Third : {screen:ThirdTab, navigationOptions:{ tabBarIcon: ()=><Image source={ require('./icons/cha03.png') } style={ {width:24, height:24} }></Image>, }}
},
//bottomtabnavigator의 설정
{
    initialRouteName:'Second', //처음 시작할 때 선택될 tab지정
    tabBarOptions:{
        activeTintColor:'white',
        labelStyle:{
            fontSize:12,
        },
        style:{
            backgroundColor:'orange',
        },
        activeBackgroundColor:'indigo',
        tabStyle:{
            borderTopWidth:1,
            borderLeftWidth:0.5,
            borderRightWidth:0.5,
            borderColor:'black',
        }
    }
}
);

//2. bottomtabNav객체를 가진 AppContainer객체 새성
const MainContainer= createAppContainer( bottomTabNav );

//3. AppContainer컴포넌트를 화면에 render하기.
export default class MainBottomTab extends Component{
    render(){
        return <MainContainer/>;
    }
}
