import React, { Component } from 'react';
import {View, Image, ScrollView, Text, ImageBackground, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export default class MainComponent extends Component{

    // 5.실습에서 사용할 state변수
    constructor(){
        super();//상속받았을 때 명시적으로 부모생성자호출

        // this.state={            
        //     img: require('./images/moana01.jpg'),
        // }

        //5.1실습에서 사용할 멤버변수 : 이미지번호
        this.num=1;

        //5.2실습에서 사용할 배열 멤버
        this.imgs= [
            require('./images/moana01.jpg'),
            require('./images/moana02.jpg'),
            require('./images/moana03.jpg'),
            require('./images/moana04.jpg'),
            require('./images/moana05.jpg'),
        ];
        this.index=0;//이미지 배열 인덱스 번호

        this.state={
            img: this.imgs[this.index],
        }
        
    }

    render(){

        return (
            // 1. 그림이미지는 JS의 require()함수 이용 : 별도의 스타일이 없다면 이미지는 원본사이즈
            // <View style={ {flex:1} }>
            //     {/* 경로는 상대경로.. 이 js문서를 기준으로의 상대적 경로 */}
            //     <Image source={ require('./images/moana01.jpg') } ></Image>
            // </View>

            // 2. 스타일을 통해 이미지의 사이즈 지정
            // <View style={ {flex:1} }>
            //     <Image 
            //         style={ {width:200, height:200} }
            //         source={ require('./images/moana01.jpg') } ></Image>
            // </View>

            // 3. 네트워크의 이미지 : 네트워크이미지는 객체의 uri프로퍼티를 통해 설정
            // 주의!! 네크워크 이미지는 반드시 width,height을 명시적으로 주어야함.[둘다], 안주면 화면에 보이지 않음.
            // <View style={ {flext:1} }>            
            //     <Image
            //         style={ {width:'100%', height:200, resizeMode:'contain'} }
            //         source={ {uri: 'https://png.pngtree.com/element_origin_min_pic/17/07/09/c34648fb7771da1ba45782380a116dd7.jpg'} }></Image>
            // </View>

            //4. 이미지에 클릭이벤트 처리 : Image컴포넌트에 onPress속성을 통해 처리할 수 없음.
            // 안드로이드와 다르게 컴포넌트에 이벤를 주는 것이 아니라.. 클릭이벤트에 반응하는 TouchableXXXX 컴포넌트로 감싸야 함.

            //4.1 TouchableHighlight 터치할 때 터치효과가 보여지는 컴포넌트
            // <View style={  {flex:1} }>            
            //     {/* TouchableXXX 컴포넌트도 뷰이기에 사이즈 있음. 부모뷰의 배치방향(flexDirection이 'column'세로방향이므로 자식뷰들의 가로사이즈는 stretch되어 match_parent가 됨) */}
            //     <TouchableHighlight onPress={ this.clickImage } style={ {padding:4, width:200}}>
            //         <Image style={ {width:'100%', height:200} } source={ require('./images/moana01.jpg') } ></Image>
            //     </TouchableHighlight>
            // </View>

            //4.2 TouchableOpacity
            // <View style={  {flex:1} }>            
            //     {/* TouchableXXX 컴포넌트도 뷰이기에 사이즈 있음. 부모뷰의 배치방향(flexDirection이 'column'세로방향이므로 자식뷰들의 가로사이즈는 stretch되어 match_parent가 됨) */}
            //     <TouchableOpacity onPress={ this.clickImage } style={ {padding:4, width:200}}>
            //         <Image style={ {width:'100%', height:200} } source={ require('./images/moana01.jpg') } ></Image>
            //     </TouchableOpacity>
            // </View>

            //4.3 TouchableNativeFeeback
            // <View style={ {flex:1, justifyContent:'center', alignItems:'center'} }>
            //     <TouchableNativeFeedback
            //         onPress={ this.clickImage} >
            //         {/* 뷰를 한개만 넣을 수 있기에 여러뷰를 넣으려면 View로 감싸서 제작 */}
            //         <View style={ {width:200, height:200, backgroundColor:'lightblue', borderRadius:8, justifyContent:'center', alignItems:'center'} }>
            //             <Text>text</Text>
            //             <Image source={ require('./images/moana02.jpg')} style={ {width:200,height:150} }></Image>
            //         </View>
            //     </TouchableNativeFeedback>
            // </View>

            //4.4 TouchableWithoutFeedback도 있음.

            //5. 터치할 때 이미지 변경
            // source속성에  this.state를 이용해야만 함.
            // <View style={ {flex:1, justifyContent:'center', alignItems:'center'} }>
            //     <TouchableWithoutFeedback onPress={ this.clickImage2 }>
            //         <Image source={ this.state.img } style={ {width:200, height:200} } ></Image>
            //     </TouchableWithoutFeedback>
            // </View>

            //6. 이미지가 많으면 스크롤 필요함. 스크롤 뷰 알아보기
            // <ScrollView>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana01.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana02.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana03.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana04.jpg') } style={ imgStyle } ></Image>
            //     <Image source={ require('./images/moana05.jpg') } style={ imgStyle } ></Image>
            // </ScrollView>

            //7. 배경이미지 적용하기 - css에서의 backgroun-image와 같음.
            // RN에서 사용하는 스타일객체에서는 backgroundImage속성이 없음.
            // ImageBackground컴포넌트를 사용해야함.
            <View style={ {flex:1} }>                
                <ImageBackground source={ require('./images/moana01.jpg')} style={ {width:'100%', height:'100%'} }>
                    <Text style={ {color:'white', fontSize:32, fontWeight:'bold', margin:16} } >Title</Text>
                    <Text style={ {color:'yellow', fontSize:24, margin:8} }>This is background image component.</Text>
                </ImageBackground>
            </View>
            

        );

    }//render method...

    //4.실습에서 사용하는 클릭 콜백 메소드
    clickImage= ()=>{
        alert('clicked image');
    }

    //5.실습에서 사용하는 클릭 콜백 메소드
    clickImage2= ()=>{
        //state객체의 img프로퍼티 변경
        // this.setState( {img: require('./images/moana02.jpg')} );

        //5.1실습 : 버튼클릭시마다 여러 이미지 순차적으로 변경하기
        // moana01 -> 02 -> 03 -> 04 ->05 ->01 ->02 ->.....
        // 멤버변수 num이용하기..
        // this.num++;
        // if(this.num>5) this.num=1;        
        // this.setState( {img: require('./images/moana0'+ this.num +'.jpg')}  );
        // 이미지에 경로를 넣을 때 문자열 덧셈(결합)  ''+ num + '.jpp'으로 지정하는 것을 RN에서는 권장하지 않으며..이때, 사용한 num변수가 상수가 아니면 에러임
        // 문자열 경로를 변수로 지정하여 변경하는 방식은 RN에는 안됨.!!!

        // 이미지의 변경은 문자열경로변경이 아닌, require()함수를 통채로 변경해야 함.
        // 순차적으로 변경하려면..require()함수를 가진 객체를 배열로 만들어서 처리함.

        // 5.2실습
        this.index++;
        if(this.index>4) this.index=0;

        this.setState( { img: this.imgs[this.index]} );

    }


}//


//6.실습에서 사용할 스타일 객체
const imgStyle={  width:350, height:300, margin:16, alignSelf:'center', borderRadius:8 };