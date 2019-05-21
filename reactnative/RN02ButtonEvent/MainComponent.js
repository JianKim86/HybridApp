import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native';

class MainComponent extends Component{

    //4)실습에서 사용할 멤버변수[프로퍼티]
    //let text="sam";//Error - class안에서 멤버변수는 반드시 생성자(constructor)안에서 만들어야 함
    constructor(){
        //상속받았을때는 반드시 부모 클래스의 생성자를 호출하는 super()을 명시적으로 작성해야 만 함.[생략하면 ERROR]
        super();

        //멤버변수 선언
        //let text;//이건 지역변수임
        this.text= "Hello";

        //5)실습에서 사용할 state 키워드 
        // Component클래스 안에서 멤버변수를 만들때는 가급적 이 state를 이용한다고 생각하는 것이 편함.
        // state객체 생성
        this.state= {
            text:"Hello",
            // 6)실습에서 사용할 이미지 경로 변수
            img: require('./images/moana01.jpg'),
        };
    }



    render(){

        return (
            // 1)기본적인 버튼 클릭이벤트 반응하기
            // <View style={ styles.root }>
            //     {/* 버튼에 들어가는 글씨는 반드시 title속성을 사용해야함. text node로 넣을 수 없음:error */}
            //     {/* 버튼클릭이벤트 처리 속성[onPress] 추가 */}
            //     {/* onPress의 속성값은 콜백함수지정 */}
            //     {/* 우선. 전역함수로 만들어보기-class밖에 함수생성 */}
            //     <Button title="button" onPress={ clickBtnFunction }></Button>
            //     {/* onPress속성의 값에 clickBtnFunction() 이렇게 ()까지 넣으면 콜백함수를 등록한 것이 아니라 함수호출문을 쓴것임. */}
            //     {/* 그렇기에 처음실행될 때 자동 함수가 호출되어 버림. 그리고 그 이후 콜백함수로 동작되지 못함. */}

            //     {/* 화살표함수에 대한 실습 후 작업해보기 */}
            //     <Button title="button2" onPress={ ()=>Alert.alert('clicked') } ></Button>
            // </View>

            // 2) 앞으로의 웹코딩과정에서 1)방법처럼 전역함수를 사용하는 것은 권장하지 않음.
            // 가급적 콜백함수들이 멤버함수(메소드)로 만들기를 권장함.
            // <View style={ styles.root }>
            //     {/* JS에서 멤버를 다룰때는 반드시 this. 키워드가 있어야함. 변수든, 메소드든... */}
            //     <Button title="button" onPress= { this.clickBtn  }></Button>
            // </View>

            //3) 버튼을 클릭하여 Text컴포넌트의 글씨 변경해보기!!
            // 기존의 android나 웹에서 사용하던 기법과 완전 다름. - Text컴포넌트를 요소를 제어하지 않음.
            // 사용원리 : 요소를 제어하는 것이 아니라.. 요소의 값을 가진 변수의 값을 변경할 것임.
            // <View style= { styles.root }>
            //     <Button title="button" onPress={ this.changeTextByClickBtn }></Button>
                
            //     {/* 버튼 클릭으로 변경할 글씨를 보여주는 Text */}
            //     {/* Text가 보여주는 글씨를 변수에 저장하고 그 값을 보여주도록!! */}
            //     {/* 우선. 전역변수로 만들어보기- class밖에 변수가 선언 */}
            //     <Text style={ styles.plainText }> { name } </Text>
            // </View>

            //4) 멤버변수를 보여주는 TextComponent
            // <View style= { styles.root }>
            //     <Button title="button" onPress={ this.changeMemberTextByClickBtn }></Button>

            //     {/* this.키워드에 대한 문제 해결  */}
            //     {/* 방법1. bind()메소드 이용하기 */}
            //     <Button title="button" onPress={ this.changeMemberTextByClickBtn.bind(this) } color="indigo"></Button>

            //     {/* 방법2. 화살표함수 이용하기 */}
            //     <Button title="button" onPress={ this.changeMemberTextByClickBtnArrow } color="orange"></Button>
               
            //     <Text style={ styles.plainText }> { this.text } </Text>
            // </View>

            //5) 결국 일반변수들의 값을 바꿔도 화면은 갱신되지 않음.
            // 화면갱시되려면 React의 특별한 멤버변수 사용기법을 알아야 함.
            // Component클래스의 state 라는 이름을 가진 멤버가 있음. 이 state의 값이 바뀔때만 render()를 다시함.
            // <View style={ styles.root }>
            //     <Button title="button" onPress= { this.changeTextByState }></Button>
                
            //     {/* Text컴포넌트가 state라는 특별한 멤버를 이용하여 글씨 표시 */}
            //     <Text style={ styles.plainText} > { this.state.text }  </Text>
            // </View>

            //6) 승택이가 화냈지만..마지막으로 이미지 변경해보기
            <View style= { styles.root }>

                <Button title="button" onPress= { this.changeTextByState }></Button>
                <Text style={ styles.plainText} > { this.state.text }  </Text>

                <Button title="button" onPress={ this.changeImageByState } color="orange"></Button>
                <Image source={ this.state.img } style= { styles.img }></Image>

            </View>
        );
    }//render method...

    //2)실습에서 사용할 메소드..
    // function clickBtn(){} //error: class안에서 function키워드 불가
    clickBtn(){
        Alert.alert('clicked!!');
    }

    // 3)실습에서 사용할 메소드...[Text컴포넌트 변경하기]
    changeTextByClickBtn(){
        //Text컴포넌트가 보여주던 전역변수 name의 값 변경
        name= "Nice to meet you.";
        Alert.alert( name );

        //변수의 값을 바뀌지만.. 화면은 갱신되지 않죠.
        //전역변수라서?? 멤버변수로 만들어볼까요?
    }

    //4)실습에서 사용할 메소드..[멤버변수값 변경하기]
    changeMemberTextByClickBtn(){
        //Text컴포넌트가 보여주는 멤버변수 this.text의 값 변경하기
        this.text="Good React Natvie";
        //멤버변수를 변경해도 화면은 자동으로 갱신하지 않음.        
        //해결책은 state라는 Component클래스의 특별한 멤버를 사용해야함
        //그전에 멤버변수의 값을 정말 바뀌어졌는가??
        Alert.alert("changed text : "+ this.text);
        //결과가 undefined로 나옴. why??
        // this. 키워드가 누구냐라는 문제임.
        // 함수도 일종의 객체임. 
        // 즉, 함수안에서 this. 을 사용하면 함수객체의 this라고 생각함. 다시말해, 우리가 원하는 MainComponent클래스의 this가 아니라는 것임.

        // 해결하려면..
        //방법1. bind()라는 함수 이용
        //방법2. 화살표함수를 사용하는 방법
    }

    //4)실습문제의 해결방법2. Arrow Function
    changeMemberTextByClickBtnArrow= ()=>{
        this.text="Good Arrow Function";
        Alert.alert("changed text : "+ this.text);        
    }

    //5)실습에서 사용할 state값을 변경하는 메소드
    //this.키워드 문제때문에 ArrowFunction으로 제작
    changeTextByState= ()=>{
        //this.state.text="Nice";
        // state의 값변경은 직접 변수에 대입연사자 = 을 사용하면 화면갱신이 되지 않음.
        // Component클래스에 state를 변경하기 위한 메소드가 존재함.
        this.setState( {text:"Nice State Object!!!"} );
        // 이 setState()메소드를 사용해야함 화면이 갱신됨.
    }

    //6)실습에서 사용할 이미지변경 메소드
    changeImageByState= ()=>{
        this.setState( {img: require('./images/moana02.jpg')} );
    }


}//MainComponent class...

//3)실습에서 사용할 전역변수
let name= "sam";

//1.실습에서 사용할 전역함수
// function clickBtnFunction(){
//     //경고창 보이기
//     //Alert.alert();//파라미터 없으면 'ok'버튼만 있음.
//     Alert.alert('clicked button!');
// }

//1.1) JS에서 함수를 만드는 다른 방법
// let clickBtnFunction= function(){
//     Alert.alert('clicked button by 익명함수');
// };

//1.2) ES6버전에 새로 생긴 화살표함수
let clickBtnFunction= ()=>{
    Alert.alert('clicked button by arrow function');
};


//스타일 객체
const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },

    // 3)실습에서 사용할 스타일
    plainText:{
        marginTop:16,
        fontWeight:'bold',
        paddingLeft: 10,
        paddingRight: 10,

        marginBottom: 16,
    },

    //6)실습
    img:{
        marginTop:16,
        width:'100%',
    }
});


// MainComponent를 다른문서에서 import하려면 이곳에서 export를 해야만 함.
export default MainComponent;