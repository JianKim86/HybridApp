import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainComponent extends Component{

    //대량의 데이터를 state멤버변수로 만들기.[ name, message, img를 property(속성:멤버변수)로 가진 객체들 배열]
    //생성자
    constructor(){
        super();//상속받은 클래스는 명시적으로 부모생성자 호출

        //대량의 데이터
        this.state={
            datas: [
                {name:"sam", message:"Hello world", img: require('./images/img01.jpg')},
                {name:"robin", message:"Hello RN", img: require('./images/img02.png')},
                {name:"hong", message:"Hello react", img: require('./images/img03.jpg')},
                {name:"kim", message:"Hello hybrid", img: require('./images/img04.jpg')},
                {name:"rosa", message:"Hello ios", img: require('./images/img05.jpg')},
                {name:"moana", message:"Hello movie", img: require('./images/img06.jpg')},
                {name:"jack", message:"Hello tom", img: require('./images/img07.jpg')},
                {name:"hong", message:"Hello aaa", img: require('./images/img08.jpg')},
                {name:"moana", message:"Hello bbb", img: require('./images/img09.png')},
                {name:"kim", message:"Hello ccc", img: require('./images/img10.jpg')},
                {name:"robin", message:"Hello ddd", img: require('./images/img11.jpg')},
                {name:"rosa", message:"Hello eee", img: require('./images/img12.jpg')},
            ],
        }
    }
    
    render(){
        return (
            // 대량의 데이터여서 화면사이즈를 벗어날 수 있어서 ScrollView로 시작
            <ScrollView style={ styles.container }>
                {/* 대량의 데이터 배열의 요소개수 만큼 Component를 리턴하는 map()메소드 사용 */}
                {
                    this.state.datas.map( ( item, index )=>{
                        //리스트로 보여질 리스트아이템 1개의 모양 및 설정
                        //주의!! 배열을 자동 출력시킬때는 식별자로 사용될 key속성이 반드시 있어야 함.
                        return (
                            //1. 배열요소들 리스트형태로 보여주기
                            // <View key={ index } style={ styles.item }>
                            //     <Image source={ item.img } style={ styles.itemImg }></Image>
                            //     <View style={ {flexDirection:'column'} }>
                            //         <Text style={ styles.itemName}> {item.name} </Text>
                            //         <Text style={ styles.itemMessage}> {item.message} </Text>
                            //     </View>                                
                            // </View>

                            //2. 아이템뷰 클릭이벤트 반응하기
                            // <TouchableOpacity key={ index } style={ styles.item } onPress={ this.clickItem }>
                            //     <Image source={ item.img } style={ styles.itemImg }></Image>
                            //     <View style={ {flexDirection:'column'} }>
                            //         <Text style={ styles.itemName}> {item.name} </Text>
                            //         <Text style={ styles.itemMessage}> {item.message} </Text>
                            //     </View>                                
                            // </TouchableOpacity>

                            //3. 아이템뷰 클릭했을 때 - 클릭한 아이템의 name값 출력해보기
                            // 몇번째 아이템인지 알아야 처리 할 수 있음.
                            <TouchableOpacity key={ index } style={ styles.item } onPress={ ()=>{ this.clickItem2(index) } }>
                                <Image source={ item.img } style={ styles.itemImg }></Image>
                                <View style={ {flexDirection:'column'} }>
                                    <Text style={ styles.itemName}> {item.name} </Text>
                                    <Text style={ styles.itemMessage}> {item.message} </Text>
                                </View>                                
                            </TouchableOpacity>
                        );
                    } )
                }
            </ScrollView>            
        );
    }//render method..
    
    //2.실습에서 사용할 메소드
    clickItem=()=>{
        alert();
    }

    //3.실습에서 사용할 메소드. 클릭한 아이템의 index번호를 받아오기
    clickItem2=(index)=>{
        // alert("index : " + index );
        // alert( "name : "+ this.state.datas[index].name +" 입니다." );

        //문자열결합이 불편할 때...
        // `[백틱문자] : PHP의 "이름 $name 입니다."와 비슷한 기능
        //  ``안에 ${변수명} 으로 일반 문자와 구분
        alert( `name : ${this.state.datas[index].name} 입니다.` );
    }

    //ListView컴포넌트 없이 리스트뷰형태를 잘 만들것 같지만, 데이터가 많을 때는 문제가 생김.
    //데이터(배열)의 개수가 매우 많을 때 화면에 보이지도 않는 컴포넌트들이 무조건 만들어져 있음.
    //즉, 뷰의 재활용 기능이 없음.
    //android의 ListView나 RecyclerView같은 아답터뷰들 처럼 뷰 재활용이 자동으로 이루어지는 컴포넌트가 RN에 존재함.
    //RN09ListView예제 실습하기!!!    


}//MainComponent class


//스타일 객체
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMessage:{
        fontStyle:'italic',
    }
});