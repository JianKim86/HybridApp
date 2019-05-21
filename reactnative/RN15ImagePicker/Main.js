import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

// react-native-image-picker 라이브러리 추가 ///
//  install & link

import ImagePicker from 'react-native-image-picker';
import { isFor } from '@babel/types';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            img: {uri:"https://img.seoul.co.kr/img/upload/2017/10/07/SSI_20171007154542_V.jpg"},
        }
    }

    render(){
        return (
            <View style={ { flex:1, padding:16,} }>
                <Button title="show picker" onPress={ this.showPicker }></Button>
                <Text style={ {margin:8} }> { this.state.img.uri } </Text>
                <Image source={ this.state.img } style={ {marginTop:8, flex:1} }></Image>
            </View>
        );
    }

    //이미지 픽커 보이기
    showPicker=()=>{

        //퍼미션 처리해야 사용할 수 있음.
        //android, ios 각 플랫폼에서 직접 해야함.
        // Android
        // AndroidManifest.xml문서에서 퍼미션

        //ImagePicker클래스의 메소드를 통해 픽커다이얼로그 보이기
        //픽커다이얼로그의 옵션
        const options={
            title:'Select Picker',
            cancelButtonTitle:'취소',
            takePhotoButtonTitle:'카메라',
            chooseFromLibraryButtonTitle:'이미지 선택',
        }

        //첫번재 파라미터 : 다이얼로그 모양 옵션
        //두번재 파라미터 : 선택한 결과에 대한 콜백함수
        ImagePicker.showImagePicker( options , (response)=>{
            //response 파라미터 : 선택에 따른 결과 객체

            if( response.didCancel ){
                alert('user cancel');
            }else if( response.error){
                alert('error');
            }else{
                //이 곳에 왔다면 카메라 or 갤러리앱에서 이미지가 잘 선택되었다는 것임.

                //선택된 이미지의 uri를 response객체로 부터 얻어오기
                const source= { uri: response.uri };

                //화면에 보여주기 위해 state멤버 설정
                this.setState( {img: source} );
            }

        });

        //별외!!. 픽커없이 곧바로 카메라앱 실행
        //ImagePicker.launchCamera( options, (response)=>{});

        //별외!!. 픽커없이 곧바로 갤러리앱 실행
        //ImagePicker.launchImageLibrary( options, (response)=>{});

    }
}