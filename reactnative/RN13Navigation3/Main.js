import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TodoScreen from './screen/TodoScreen';
import DoneScreen from './screen/DoneScreen';

//1. StackNavigator 생성 및 스크린 설정
const stackNav= createStackNavigator({
    Todo : {screen: TodoScreen},
    Done : {screen: DoneScreen}
});

//2. StackNavigator를 가진 AppContainer컴포넌트 생성
const AppContainer= createAppContainer( stackNav );

//3. AppContainer컴포넌트 렌더링
export default class Main extends Component{

    //4. 스크린간에 데이터 공유를 위해서는 Navigator를 가지고 있는 이 클래스에 데이터가 존재해야함.
    // 데이터 변경시 화면이 갱신되야 하므로 this.state멤버 사용
    constructor(){
        super();

        this.state={
            todo: ['study Android', 'study React Native', 'make hybridapp project', 'travel', 'health'],
            done: [],
        }
    }

    render(){
        // 1.
        // return <AppContainer></AppContainer>;

        // 2. this.state의 데이터배열을 각 스크린컴포넌트에 프로퍼티로 전달 
        //    이렇게 전달된 프로퍼티는 각 스크린컴포넌트에서 this.props라는 특별한 멤버에 의해 사용됨
        // return <AppContainer screenProps={ 
        //     { 
        //         todo: this.state.todo,
        //         done: this.state.done, 
        //     }
        //   }></AppContainer>

        // 4.각 스크린에 addDone()메소드를 props전달 
        return <AppContainer screenProps={ 
            { 
                todo: this.state.todo,
                done: this.state.done, 
                addDone : this.addDone
            }
          }></AppContainer>

    }//render method..

    //3. Todo리스트배열 항목을 done리스트배열로 이동시키는 작업 메소드
    addDone=( index )=>{

        //todo배열에서 index번호에 해당하는 요소를 1개 빼오기-즉, 그요소가 제거되야 함.
        //let item= this.state.todo.splice(index, 1);// index번에서부터 1개 빼와! [slice()메소드와 다른것임]

        //빼온 요소를 done리스트로 추가
        //this.state.done.push(item); //배열의 뒤에 요소 붙이기

        //이렇게 하면 todo와 done배열의 값을 변경되지만 화면은 갱신되지 않음.
        // 그래서 코드를 좀 변경
        // let todoArr= this.state.todo;
        // let doneArr= this.state.done;

        // let item= todoArr.splice(index, 1);
        // doneArr.push(item);

        // //화면갱신을 위해 setState()
        // this.setState( {
        //     todo: todoArr,
        //     done: doneArr
        // } );

        //위 코드를 ES6에서 추가된 [비구조화 할당] 문법으로 변경
        const {todo, done} = this.state;
        done.push( todo.splice(index, 1) );
        this.setState( {todo, done} );

        // 추가.. ES6에서 추가된 '비구조화 할당'
        // let obj= {name:"sam", age:20};
        // // let name= obj.name;
        // // let age= obj.name;
        // //비구조화할당 문법
        // let {name, age} = obj;
        // alert(name);

        // // import문에서 많이 사용함.
        // // import React from 'react';
        // // const Component= React.Component; 

        // //비구조화 할당 문법
        // import React, { Component } from 'react';
        
    }

}