import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import First from './screen_materialtoptab/Firts';
import Second from './screen_materialtoptab/Second';
import Third from './screen_materialtoptab/Third';

//1. 네이게이터 생성 및 스크린 설정
const MaterialTopTabNav= createMaterialTopTabNavigator({
    First: {screen:First},
    Second: {screen:Second},
    Third: {screen:Third},
},
{
    tabBarPosition:'top',
    swipeEnabled: true, //페이지 스와이핑이 안됨. 탭으로만 변경
    animationEnabled: true, //탭전환시 슬라이딩 애니메이션 없음.
    tabBarOptions:{
        activeTintColor:'white', //선택된 탭 글씨색상
        inactiveTintColor:'yellow', //선택안된 탭 글씨색상
        style:{ backgroundColor:'#633689'},//탭바 배경색
        indicatorStyle:{//인디케이터 : 탭바 밑에있는 선택 막대바
            borderBottomColor:'white',
            borderBottomWidth: 2,
        }
    }
});

//2. AppContainer객체 생성 및 네이게이터 설정
const MainContainer= createAppContainer( MaterialTopTabNav );

//3. AppContainer화면에 render하기
export default class MainMaterialTopTab extends Component{
    render(){
        return <MainContainer/>;
    }
}