// 리액트 라이브러리 추가
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

class MainComponent extends Component{

    // 2.실습에서 사용하는 state 멤버변수 선언
    // 생성자에서만 멤버변수생성이 가능함
    constructor(){
        //상속을 받은 클래스는 반드시 부모의 생성자를 호출하는 super()를 명시적으로 작성해야만 함.
        super();

        //state 객체를 통해 멤버변수 선언
        this.state= {
            text: "Hello",                        
        };

        //4.실습에서 사용할 일반 멤버변수
        this.inputValue="";
    }

    render(){
        return (
            // 1. 글씨를 입력받을 수 있는 기본 TextInput사용
            // <View style={ styles.root }>
            //     {/* 아무 스타일도 안주면 화면에 영역도 인지할 수 없어서 스타일 적용 */}
            //     <TextInput style={ styles.textInput}></TextInput>
            //     {/* 기본적인 TextInput은 한줄 입력컴포넌트임 */}
            // </View>

            // 2. TextInput을 이용하여 입력한 글씨를 Text컴포넌트에 보이기!
            // TextInput컴포넌트에 글씨가 변경될때 마다 발동하는 콜백함수를 onPress하듯이 onChangeText속성으로 지정하면됨
            // <View style= { styles.root }>
            //     <TextInput style= { styles.textInput } onChangeText= { this.changeText } ></TextInput>
            //     {/* 위 TextInput에서 입력하는 글씨를 실시간 보여주는 Text컴포넌트 */}
            //     {/* 기법이 기존 프로그래임언어와 완전히 다름- 요소를 제어하지 않음. */}
            //     {/* Text요소를 제어하는 것이아니라 Text요소가 보여주는 값을 가진 변수의 값을 변경해서 적용함 */}
            //     {/* Component클래스의 state라는 특별한 멤버변수를 사용해야함. 이 변수의 값이 변경되면 화면이 갱신됨  */}
            //     <Text style= { styles.plainText } > { this.state.text } </Text>
            // </View>

            //3. TextInput컴포넌트의 글씨를 변경할때 마다 Text를 변경하지 말고 TextInput의 작성을 완료(submit)하면 Text를 변경해보기!
            // onSubmitEditing속성 사용 : [완료]키를 눌렀을 때 실행
            // <View style={styles.root}>
            //     <TextInput style={ styles.textInput} onSubmitEditing={ this.submitText }></TextInput>
            //     <Text style={ styles.plainText}> { this.state.text } </Text>
            // </View>

            //4. 버튼을 클릭했을 때 TextInput에 입력된 값을 얻어와서 Text컴포넌트에 보여주기
            // <View style={styles.root}>
            //     <TextInput style={ styles.textInput} onChangeText={ this.changeText2 }></TextInput>
            //     <Text style={ styles.plainText}> { this.state.text } </Text>
            //     <Button title="button" onPress={ this.clickBtn }></Button>
            // </View>

            //5. 여러줄 입력 : TextInput은 기본 한줄 입력컴포넌트임
            <View style= { styles.root} >
                <TextInput multiline={true} numberOfLines={4} style={ styles.textInput2 } onChangeText={ value=>this.inputValue=value }></TextInput>
                <Text style={ styles.plainText}> {this.state.text} </Text>
                <Button title="button" onPress={this.clickBtn}></Button>
            </View>
        );
    }//render method..

    //2실습에서 사용할 멤버메소드[ this. 키워드 문제를 해결하기위해 화살표함수로 메소드를 만들기 ]
    // 이 메소드의 파라미터 value: TextInput에 입력되는 글씨
    changeText= (value)=>{
        //입력하는 글씨가 변경될 때 마다마다 이 메소드가 호출됨
        //이 메소드안에서 Text컴포넌트가 보여주는 this.state.text의 값을 변경하면 화면이 자동으로 갱신됨.
        this.setState( {text: value} );
    }

    //3.실습에서 사용할 멤버메소드
    //파라미터.. submitEvent객체가 옴. 즉, 글씨가 아님. 글씨를 가진 객체
    submitText= (submitEvent)=>{
        //전달된 submitEvent객체에게 입력된 글씨를 얻어오기
        let value= submitEvent.nativeEvent.text;
        this.setState( {text:value} );
    }

    //4.실습에서 사용한 메소드
    clickBtn= ()=>{
        //TextInput에 입력된 글씨를 얻어와??? 이 기법을 사용하지 않고..
        //TextInput에 글씨가 입력될때 마다 그 글씨를 저장한 변수의 값을 가져와서 state.text에 설정
        this.setState( {text: this.inputValue} );
    }

    //4.1 TextInput에 글씨가 입력될때 마다 호출된 콜백메소드
    changeText2= (value)=>{
        //this.state가 아닌 일반 멤버변수에 입력값 저장
        this.inputValue=value;
    }

}//MainComponent class...


//스타일 객체
const styles= StyleSheet.create( {
    root:{
        padding:16,
        backgroundColor:'aqua',
        flex:1,
    },
    textInput:{
        borderWidth:2,
        borderColor:'green',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,
        height:40,
    },

    //2.실습에서 사용할 스타일
    plainText:{
        marginTop:16,
        fontWeight:'bold',
        padding: 8,
    },

    //5. 실습에서 사용할 스타일
    textInput2:{
        borderWidth:2,
        borderColor:'green',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,

    }
} );



export default MainComponent;

