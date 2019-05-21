import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';

export default class MainComponent extends Component{
    render(){

        //render()메소드의 지역변수
        let titles= ["first", "second", "third"];
        let colors= ["indigo", "orange", "green"];

        //title과 color를 가진 객체들의 배열변수
        let datas= [
            {title:"first", color:"yellow"},
            {title:"second", color:"aqua"},
            {title:"thrid", color:"red"},
        ];

        return (
            // 1. 나만의 Component만들어서 사용하기 [android MyView같은]
            // <View style={ styles.rootContainer }>
            //     <Text>Hello world</Text>

            //     {/* MyComponent사용하기 */}
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            // 이런식으로 header, body, nav등을 영역별로 나누어 작성할 수 있음.(웹에서는)

            // 2. 가만보면 글씨가 똑같음. "Hello sam님!"
            // MyComponent를 사용할 때 값을 전달 해 줄 수 있는 방법이 있음.
            // <View style={ styles.rootContainer }>
            //     <Text>Hello world</Text>

            //     {/* MyComponent사용하기 : 컴포넌트의 속성 [property] 이용하기 */}
            //     <MyComponent2 name="sam"></MyComponent2>
            //     <MyComponent2 name="robin"></MyComponent2>
            //     <MyComponent2 name="hong"></MyComponent2>
            // </View>

            //3. 커스텀컴포넌트를 별도의 .js에 만들어서 사용할 수 있음.
            // MyComponent3.js만들어 보기..[주의!!, 별도의 js문서이므로 사용하려면 import해야하고, 그 class는 export가 되어 있어야함.]
            // <View style= { styles.rootContainer }>
            //     <Text>Hello world</Text>

            //     {/* 다른 문서인 MyComponent.js의 컴포넌트 사용하기 */}
            //     {/* 다른 문서이므로 위에서 import해야함. */}
            //     <MyComponent3 text="Hello" btnTitle="first"></MyComponent3>
            //     <MyComponent3 text="Nice" btnTitle="second"></MyComponent3>
            //     <MyComponent3 text="Good" btnTitle="third"></MyComponent3>

            // </View>

            //3.1 버튼에 onPress이벤트 처리 - 콜백함수를 props로 넘겨주기
            // <View style= { styles.rootContainer }>
            //     <Text>Hello world</Text>

            //     {/* 다른 문서인 MyComponent.js의 컴포넌트 사용하기 */}
            //     {/* 다른 문서이므로 위에서 import해야함. */}
            //     <MyComponent3 onPress={this.clickBtn} text="Hello" btnTitle="first"></MyComponent3>
            //     <MyComponent3 onPress={this.clickBtn} text="Nice" btnTitle="second"></MyComponent3>
            //     <MyComponent3 onPress={this.clickBtn} text="Good" btnTitle="third"></MyComponent3>
            // </View>

            //3.2 혹시 props를 전달받지 못하면??
            // <View style= { styles.rootContainer }>
            //     <Text>Hello world</Text>
               
            //     {/*1) text만 전달하지 않기 : 에러안남 : 텍스트만 표시되지 못함 */}
            //     <MyComponent3 onPress={this.clickBtn} btnTitle="first"></MyComponent3>
            //     {/*2) onPress로 콜백함수를 전달하지 않기 : 에러안남, 단, 콜백이벤트만 처리안됨*/}
            //     <MyComponent3 btnTitle="first"></MyComponent3>
            //     {/* 3) btnTitle을 안주면 : ERROR*/}
            //     {/* Button컴포넌트는 title속성이 없으면 에러인 컴포넌트여서..오해하지 말것!! 속성이 하나도 없어서가 아님. */}
            //     <MyComponent3 ></MyComponent3>
            // </View>

            //4. 이렇게 속성이 전달되지 않았을때 대비하여 기본 props를 가질 수 있음.
            // MyComponent4.js를 만들어 보기..기본(defalut) props를 가진 컴포넌트 설계
            // <View style={ styles.rootContainer }>
            //     {/* 커스텀 컴포넌트 */}

            //     {/* 1)property들을 전달하지 않으면 defaultProps의 값들이 적용됨. */}
            //     <MyComponent4></MyComponent4>
            //     {/* 2) 버튼의 타이틀만 전달해보기 */}
            //     <MyComponent4 title="first"></MyComponent4>
            //     {/* 3) 속성모두 전달해보기 */}
            //     <MyComponent4 title="second" name="sam" onPress={ this.clickBtn }></MyComponent4>
            // </View>

            //5. 전달한 속성이 많으면 컴스텀컴포넌트에서도 속성을 일일이 지정하는 작업이 다소 불편함.
            // <View style={ styles.rootContainer} >
            //     <MyComponent5 title="first" color="green" onPress={ this.clickBtn}></MyComponent5>
            //     <MyComponent5 title="second" color="indigo"></MyComponent5>
            // </View>

            //6. title에 들어갈 글씨를 배열데이터로 전달하기
            // title배열을 지역변수로 만들어 사용해보기.. render()메소드 안에..
            <View style={ styles.rootContainer }>
                <MyComponent5 title={ titles[0] }></MyComponent5>
                <MyComponent5 title={ titles[1] }></MyComponent5>
                <MyComponent5 title={ titles[2] }></MyComponent5>

                {/* title과 color도 배열데이터로 전달 가능하겠죠. */}
                <MyComponent5 title={ titles[0] } color={ colors[0]}></MyComponent5>
                <MyComponent5 title={ titles[1] } color={ colors[1]}></MyComponent5>
                <MyComponent5 title={ titles[2] } color={ colors[2]}></MyComponent5>

                {/* title과 color를 가진 객체배열데이터를 이용하기 */}
                <MyComponent5 title={ datas[0].title } color={ datas[0].color}></MyComponent5>
                <MyComponent5 title={ datas[1].title } color={ datas[1].color}></MyComponent5>
                <MyComponent5 title={ datas[2].title } color={ datas[2].color}></MyComponent5>
            </View>
            // 이런식으로 대량의 데이터를 배열로 가지고 있으면...
            // 인덱스번호만 바꾸면 다른 데이터가 보여질 수 있음.
            // 데이터가 여러개 있을때 반복문을 이용하여 출력이 가능하지 않을 까??

            // 이런 반복문 사용기법을 이용하여 리스트 뷰 형태 만들기 가능!!
            // RN07ListLayout이라는 프로젝트를 통해서 이 구조를 실습해보기

        );
    }//render method..

    //3.1실습에서 사용할 버튼 콜백메소드
    clickBtn=()=>{
        alert('clicked button');
    }

}//MainComponent class...

//1.실습에서 사용할 MyComponent클래스 설계
class MyComponent extends Component{
    render(){
        return (
            <View style={ {margin:16,} }>
                <Text>Hello sam님!</Text>
                <Button title="click me"></Button>
            </View>
        );
    }
}

//2. 실습에서 사용할 MyComponent2클래스 설계
class MyComponent2 extends Component{
    render(){
        return (
            <View style={ {margin:16,} }>
                {/* 표시될 이름을 JS의 변수를 사용하기 */}
                {/* 이때, 특별한 변수사용하기 : this.props */}
                {/* 모든 Component클래스는 기본적으로 2개의 특별한 변수를 보유하고 있음. [ this.state / this.props ] */}
                {/* this.props : 이 컴포넌트클래스가 사용될 때 전달받은 속성들을 가지고 있는 멤버 객체임. */}
                <Text>Hello { this.props.name } 님!</Text>
                <Button title="click me"></Button>
            </View>
        );
    }
}


//스타일객체
const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:16,
    },
});