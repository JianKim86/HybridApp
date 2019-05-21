import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

// LogoTitle 컴포넌트 [ 헤더툴바의 커스텀]
class LogoTitle extends Component{
    render(){
        return (
            <View style={ {flexDirection:'row', paddingLeft:16, alignItems:'center',} }>
                <Image source={ require('../images/logo.png') } style={ {width:30, height:30,} } ></Image>
                <Text style={ {color:'white', fontWeight:'bold', fontSize:20, marginLeft:16} } >HOME</Text>
            </View>
        );
    }
}

export default class HomeComponent extends Component{

    // StackNavigator를 사용하면 네비게이션용 header툴바가 자동으로 생김
    // 이곳에 보통 screen의 title이 표시됨. 기본으로 표시되지 않음. 표시하려면 options설정을 해야함.
    // static 변수 navigationOptions만들면 옵션을 지정할 수 있음.
    // 옵션객체에 적용되는 멤버(프로퍼티)의 키워드가 정해져 있음.
    // static navigationOptions={
    //     title: 'Home',
    //     headerStyle: {backgroundColor:'#f4511e'}, //헤더바 배경색
    //     headerTintColor: '#ffffff', //헤더글씨 색상
    // }

    // header툴바를 좀더 커스터마이즈...
    // 로고 이미지가 있는 툴바
    // HeaderView를 위한 컴포넌트 만들어 적용 .. 저 위에 새로운 Component클래스 설계
    static navigationOptions={
        headerTitle: <LogoTitle/>, //헤더바에 들어갈 컴포넌트
        headerStyle: { backgroundColor:'indigo'},
        title:'Home',// headerTitle프로퍼티에 의해 무시됨
    }

    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.plainText }>Home Screen.</Text>

                {/* 스크린전환용 버튼 */}
                <Button title="Go to the Second screen" onPress={ this.goSecond }></Button>
            </View>
        );
    }//render method..

    //스크린전환 버튼 클릭시 실행할 콜백메소드
    goSecond= ()=>{
        // react-navigation라이브러리에 존재하는 화면전환 코드
        this.props.navigation.navigate('Second'); //StackNavigator에서 지정한 screen의 이름
    }

}//HomeComponent class..

const styles= StyleSheet.create({
    root:{ flex:1, justifyContent:'center', alignItems:'center',},
    plainText:{ padding:8, }
});