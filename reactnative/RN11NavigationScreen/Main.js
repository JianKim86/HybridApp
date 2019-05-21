import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeComponent from './screen/HomeComponent';
import SecondComponent from './screen/SecondComponent';

//### react-navigation라이브러리 설치 ##################################
// 2개의 라이브러리 추가 [react-navigation, react-native-gesture-handler]
// 1) 해당프로젝트 폴더의 CLI환경에서[cmd창 or 터미널]
//     npm install --save react-navigation react-native-gesture-handler
// 2) 안드로이드와 ios에 라이브러리 연결 (build.gradle작업)
//     react-native link react-native-gesture-handler

// ** 잘 되었다면 package.json문서의 dependencies에 2개의 라이브러리가 보임
//#####################################################################

//## react-navigation에서 제공하는 Navigator의 종류 ####
// 1) StackNavigator
// 2) BottomTabNavigator
// 3) MaterialTopTabNavigator
// 4) DrawerNavigator

// 이밖에도.. MaterialBottomTabNavigator, SwitchNavigator

// 0) AppContainer[필수] <- 이 AppContainer안에 위 Navigator를 넣어서 배치해야만 함.
// ##################################################

//1. 먼저 StackNavigator 만들기 [안드로이의 액티비티 백스택의 개념과 유사한 screen 네비게이터]
// StackNavigator에서 관리할 Screen(Component)을 먼저 제작
// HomeComponent.js, SecondComponent.js 2개 만들어보기 [screen폴더에 별도로 제작]

// StackNavigator생성 및 스크린(Component) 설정해주는 함수호출
// createStackNavigator()함수는 react-navigation라이브러리 것이라서 import를 해줘야 사용할 수 있음.
const StackNav= createStackNavigator( {
    Home : {screen: HomeComponent},
    Second : {screen: SecondComponent }
} );

// 만들면서 툴바없애기
// const StackNav= createStackNavigator( {
//     Home : {screen: HomeComponent, navigationOptions:{header:null}},
//     Second : {screen: SecondComponent, navigationOptions:{header:null} }
// } );

// 위에서 만든 StackNavigator를 가진 AppContainer객체 생성[ 이 객체가 navigation의 최상위 컴포넌트객체 ]
const MainContainer= createAppContainer( StackNav );

// AppContainer객체인 MainContainer를 화면에 보여주기
export default class Main extends Component{
    render(){
        return <MainContainer></MainContainer>;
    }
}


// 해볼 Navigator들..

// 2) BottomTabNavigator

////////////////////////////////////////////

// 3) MaterialTopTabNavigator

/////////////////////////////////////////////

// 4) DrawerNavigator

///////////////////////////////////////////////








