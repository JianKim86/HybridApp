//리액트 라이브러리 사용 / 그중에서 Component클래스를 import하기
import React, { Component } from 'react';
//리액트 네이티브 라이브러리의 클래스들 import
import { Text, View, Button, StyleSheet, Image } from 'react-native';

//리액트 네이티브에서는 Component를 상속받은 클래스들이
//화면에 보여질 수 있음.(마치 java의 swing)
class MyApp extends Component{
    //리액트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드(android의 onDraw()메소드와 비슷)
    //이 메소드안에서 JSX(Javascript XML)언어로 뷰를 설계하고 이를 return해 주면 됨.
    //이 메소드는 MyApp컴포넌트가 보여질 때 자동 실행됨
    render(){

        //4)실습에서 사용할 지역변수
        let name= "sam";
        let btnTitle= "click me";//버튼에 보여질 글씨

        //화면에 보여질 뷰(component)를 return하기
        // return <Text>Hello world!</Text>;

        //1) 여러개줄로 JSX를 작성하려면.. ()묶음처리해야함
        return (
            //2)여러개의 컴포넌트리턴하기
            // ERROR:ruturn에는 1개의 컴포넌트만 가능함
            // <Text>Hello world!</Text>
            // <Text>Nice world</Text>

            //3)2개이상을 리턴하려면 ViewGroup역할을 수행하는 Component가 필요함
            //안드로이드에서의 Layout같은...역할을 수행하는 View Component사용
            // View컴포넌트도 import해야만 함.
            // <View>
            //     <Text>Hello world!</Text>
            //     <Text>Nice to meet you.</Text>
            //     <Button title="press me"></Button>
            // </View>
            
            //4) JSX언어의 특징은 <>태그문들 중간에 Javascript문법의 변수사용이 가능하다는 것임.
            // XML언어안에서 {}사용하면 JS의 변수를 사용할 수 있음.
            // {}는 속성(property)의 값으로도 사용 가능함
            // <View>
            //     <Text>Hello { name } 님</Text>
            //     <Button title={ btnTitle } ></Button>
            // </View>

            //5) 화면에 보이기는 하는데 이뻐요???
            // 안이쁘니까 스타일 작업 하기..
            // style속성(property)을 통해 스타일 적용[마치 html의 style와 속성과 같음]
            // 속성의 값은 Javascript의 객체로 만들어서 설정해 주어야 함.
            // 가급적 스타일객체를 전역객체로 만드는 것을 권장[class밖에 만들기]
            // <View style={ rootContainerStyle }>
            //     <Text style={ textStyle }>Hello world.</Text>
            //     <Text style={ plainTextStyle }>Nice to meet you.</Text>

            //     <Button title={ btnTitle }></Button>

            //     {/* Button컴포넌트는 style속성(property)가 없음. */}
            //     {/* <Button title="button" style={ btnStyle}></Button> */}

            //     {/* 그럼 Button컴포넌트에 스타일은  how??  */}
            //     {/* 일단 margin은 다른 View가 필요함 */}
            //     <View style={ {marginTop:16, width:100,} }>
            //         <Button title="button" color="indigo"></Button>
            //     </View>
            // </View>

            //6) StyleSheet라는 클래스를 이용해서 한번에 스타일객체를 관리하고 사용하기
            // 위 5)방법은 너무 스타일 전역객체가 많고 산재되어 있어서 유지보수작업이 불편함.
            // <View style= { styles.rootContainer }>
            //     <Text style={ styles.mainText }>Hello world.</Text>
            //     <Text style={ styles.plainText }>Nice to meet you.</Text>

            //     <View style={ styles.btnView }>
            //         <Button title={btnTitle}></Button>
            //     </View>
            // </View>

            //7) 이미지 컴포넌트 사용해보기
            <View style= { styles.rootContainer }>
                <Text style={ styles.mainText }>Hello world.</Text>
                <Text style={ styles.plainText }>Nice to meet you.</Text>

                <View style={ styles.btnView }>
                    <Button title={btnTitle}></Button>
                </View>

                {/* 이미지 컴포넌트 사용하기 */}
                {/* 이미지의 경로는 index.js가 있는 root폴더를 시작점으로한 상대경로 */}
                {/* 이미지경로는 source속성(property)에 지정 */}
                {/* source속성값은 require()라는 메소드를 이용함  */}
                <Image source={ require('./images/moana01.jpg') } style= { styles.img }></Image>
            </View>
        );
    }//render method..

}//MyApp class....


//5)실습에서 사용할 스타일 객체 [ 가급적 const로 ]
//1. 텍스트의 스타일작업(css와 비슷하지만 약간 다름)
const textStyle= {
    color:"blue",
    fontSize:20, //기본단위:dp
    fontWeight: 'bold',
};

//2. 전체 View의 스타일작업
const rootContainerStyle={
    padding: 16,    
    backgroundColor:'#AAFFCC',
    //View의 세로 사이즈는 기본적으로 wrap_content임.
    //height:300,//이렇게 수치값을 주면 화면해상도에 대응할 수 없음.
    //안드로이드의 layout_weight같은 속성
    flex:1,
};

//3. 중간 글씨 스타일
const plainTextStyle={
    margin:8,
    color:'#FF8800',
};

//4. 버튼의 스타일링
const btnStyle={
    color:'indigo',
    margin: 8,
}


//6)실습에서 사용할 StyleSheet클래스 객체
const styles= StyleSheet.create({
    rootContainer: {
        flex:1,
        backgroundColor:'#AAFFCC',
        padding:16,
    },
    mainText:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
    },
    plainText:{
        margin:8,
        color:'#333333',
    },
    btnView:{
        marginTop:16,
    },

    //7)실습에서 사용할 스타일
    img:{
        margin:8,
        flex:1,
        width:null,

        // 이미지의 resizeMode [ cover / contain ]
        // default가 cover
        resizeMode:'contain',
    }
});



//MyApp클래스를 다른 문서에서 사용하려면 반드시 export를 해야함.
//index.js에서 처음 실행되는 Component로 등록하고자 함.
export default MyApp;