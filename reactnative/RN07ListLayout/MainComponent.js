import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';


export default class MainComponent extends Component{

    render(){

        // 앱을 개발하면서 가장 많은 제작 빈도를 가진 리스트형태의 레이아웃 만들기
        // 우선 RN에서 제공하는 ListView용 컴포넌트를 사용하지 않고 리스트형태 만들기

        //1. 실습에서 사용할 const지역변수 : JSX컴포넌트를 변수에 저장[ " "표시하지 않음. 문자열 아님.]
        const aaa=<Text>Nice</Text>;

        //2. 실습에서 사용할 const지역변수
        const bbb= <View style= { {marginTop:16,}  }>
                        <Text>Hello React Native</Text>
                        <Button title="button"></Button>
                    </View>;

        //5. 실습에서 사용할 배열
        const arr= [ bbb, bbb, aaa ];

        //5.1 실습에서 사용할 배열[ 각 요소들이 식별자로 key속성을 가지고 있음.]
        const arr2=[
            <View key="aa"><Text>aaa</Text></View>,
            <View key="bb"><Text>bbb</Text></View>,
            <View key="cc"><Text>ccc</Text></View>,
        ];

        //6.실습에 사용할 대량의 데이터
        let datas=["aaa", "bbb", "ccc", "ddd","aaa", "bbb", "ccc", "ddd","aaa", "bbb", "ccc", "ddd"];
    

        return (
            // 1. 변수에 JSX문법을 사용한 컴포넌트를 저장한 후 사용할 수 있음.
            // <View style={ styles.container }>
            //     <Text style={ styles.title}>List layout test</Text>
            //     {/* 변수에 JSX문법의 컴포넌트 저장 후 사용하기 */}
            //     {/* 이 위치가  JSX문법 내부이므로 지역변수 aaa를 사용하려면 {}가 필요함 */}
            //     { aaa }

            //     {/* 변수값을 여러번 사용할 수 있음. */}
            //     { aaa }
            //     { aaa }
            //     { aaa }
            // </View> 
            
            //2. 변수에 여러개의 컴포넌트을 저장하여 사용하기
            // <View style={ styles.container}>
            //     <Text style={styles.title}>List layout test</Text>

            //     {/* 여러뷰를 가진 변수[bbb]를 사용하기 */}
            //     { bbb }
            //     { bbb }
            // </View>

            //3. 함수(메소드)를 호출하여 JSX컴포넌트를 리턴하여 사용하기
            // <View style={ styles.container}>
            //     <Text style={styles.title}>List layout test</Text>
                
            //     {/* 함수(메소드) 호출 */}
            //     { this.showItemView() }
            //     { this.showItemView() }

            //     {/* 주의! 함수를 호출하는 문법이 아니면 경고 - 함수명만 사용하면 함수객체를 전달하는 것임. JSX는 컴포넌트만 화면에 보여질 수있어서..함수객체는 못 보여주므로..*/}
            //     { this.showItemView }
            // </View>

            // 4. 함수(메소드)에 파라미터 전달하기..
            // <View style={ styles.container}>
            //     <Text style={styles.title}>List layout test</Text>
                
            //     {/* 함수(메소드) 호출 - 파라미터 전달 */}
            //     { this.showItemView2("sam", "first", "indigo") }
            //     { this.showItemView2("robin", "second", "orange") }
            // </View>

            //5. 배열변수에 JSX컴포넌트를 가진 요소를 넣어 사용하기
            // <View style={ styles.container}>
            //     <Text style={styles.title}>List layout test</Text>
                
            //     {/* JSX컴포넌트를 가진 변수들의 배열을 사용하기 */}
            //     { arr[0] }
            //     { arr[1] }
            //     { arr[2] }

            //     {/* 배열의 요소들을 하나씩 출력할 필요 없이 */}
            //     {/* 배열명을 쓰명 자동으로 안에 요소들이 하나씩 출력됨 */}
            //     { arr }

            //     {/* 주의! 경고가 나올 수 있음. 배열명으로 한방에 출력할 때는 각 요소들을 구별할 수 있도록 각 요소컴포넌트들이 [key]라는 프로퍼티를 반드시 가지고 있어야 함. */}
            //     { arr2 }
            // </View>

            //6. 위 배열값 자동 출력형태는 실제 아주 많이 사용함.
            // 단, key지정과 각 컴포넌트의 데이터값들의 차이를 주기위해
            // 좀 다른 방법을 사용함.
            // 5번방법은 컴포넌트를 여러개가지고 있는 것이어서 다소 불편해 보임.

            // 실제 리스트형태는 대량의 데이터를 배열로 가지고 있고 이를 자동으로 리스트형태로 보여주도록!!
            // JS문법에서 배열객체의 map()메소드 이용하기!![forEach와 비슷하게 배열요소값을 순회하나 리턴하는 것이 차이가 있음.]
            <ScrollView style={ styles.container}>
                <Text style={ styles.title }>List layout test</Text>


                {
                    //배열의 개수만큼 반복하면서 컴포넌트를 리턴해줄 것임
                    //배열개수만큼 반복하면서 파라미터로 전달된 콜백함수를 실행
                    datas.map( function( item, index, array ){
                        // 첫번재 파라미터 : 배열의 요소 1개의 값[ 이 예제에서는 "aaa", "bbb", "ccc"...]
                        // 두번재 파라미터 : 반복하는 요소의 인덱스번호
                        return (
                            <View key={index} style={ styles.itemView }>
                                <Text> {item} </Text>
                            </View>
                        );                                                
                    } )
                    //map()메소드는 하나씩 리턴하는 것이 아님.
                    //map()메소드는 배열 1개를 리턴하고 JSX는 배열을 자동으로 요소별로 출력해줌.
                }
            </ScrollView>
        );        
    }//render method..

    //3.실습에서 사용할 멤버메소드
    showItemView(){
        return (
            <View style={ {marginTop:16,}}>
                <Text>Nice world</Text>
                <Button title="press me"></Button>                
            </View>
        );
    }

    //4.실습에서 사용할 멤버변수
    showItemView2(name, btnTitle, btnColor){
        return (
            <View style={ {marginTop:16,}}>
                <Text>Nice {name}</Text>
                <Button title={ btnTitle } color={ btnColor}></Button>                
            </View>
        );
    }

}//MainComponent class..

//스타일객체
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },

    //6.실습에서 사용할 리스트 아이템의 스타일
    itemView:{
        padding:16,
        margin:8,
        borderWidth:1,
        borderRadius:8,
    },

});