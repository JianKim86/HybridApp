import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default class MainComponent extends Component{

    //React Native에서 ListView의 역할을 하는 Component는 2가지 종류가 있음.
    //1. FlatList : 모든 아이템들이 같은 모양일 때 많이 사용 - 일반적인 리스트뷰
    //2. SectionList : 섹션에 따라 구분 지어서 리스트할 때 사용 / diver의 모양 지정할 수 있음.

    //먼저 1. FlatList에서 사용할 대량의 데이터 배열-  데이터변경에 실시간 대응하려면 state 멤버 사용
    //생성자
    constructor(){
        super();

        this.state={
            //1. 일단 간단히 string 배열
            datas : ["aaa","bbb","ccc","ddd"],

            //2. 실습에서 사용할 [key]프로퍼티를 가진 대량의 데이터배열
            datas2 : [
                {key:"0", data:"aaa"},
                {key:"1", data:"bbb"},
                {key:"2", data:"ccc"},
                {key:"3", data:"ddd"},

                //개수가 많으면 자동으로 스크롤 됨.
                {key:"4", data:"aaa"},
                {key:"5", data:"bbb"},
                {key:"6", data:"ccc"},
                {key:"7", data:"ddd"},
                {key:"8", data:"aaa"},
                {key:"9", data:"bbb"},
                {key:"10", data:"ccc"},
                {key:"11", data:"ddd"},
            ],

            //4.실습에서 사용할 객체[img, string2개]들의 배열
            datas3 : [
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

        };
    }

    render(){

        //5. 실습에서 사용하는 this.state.datas3의 배열요소마다 key프로퍼티를 추가하는 코드
        // this.state.datas3.forEach( (item, index)=>{
        //     //배열의 각 요소마다 key값으로 index를 넣기
        //     item.key= index+""; //JS에서는 객체의 멤버를 나중에 추가하는 것이 가능함.
        // } );
        //위 방법은 원본 객체 배열에 변경이 생기는 것임.
        //대량의 데이터 원본은 변경하고 싶지 않아함. 단지, ListView에 보여지기 위한 key프로퍼티만 필요함.
        //5.1 위 forEach()대신에 map()사용
        // 새로운 배열이 리턴됨.
        // let arr= this.state.datas3.map( (item, index)=> {
        //     let a= item;
        //     a.key= index+"";
        //     return a;
        // });


        return (
            // 1. 기본적인 FlatList사용하기 : 일단 단순한 string배열 데이터들
            // <View style={ styles.root} >
            //     <Text style={ styles.title} >FlatList exam</Text>

            //     {/* FlatList : RN의 기본 리스트뷰 컴포넌트 */}
            //     {/* 필수 2개의 속성(props) - data, renderItem */}
            //     {/* 1) data - FlatList가 보여줄 대량의 데이터들[배열]을 지정 */}
            //     {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어내는 콜백함수(아답터객체 같은 역할[그 중에서도 getView() ]) 지정 */}
            //     {/*               - renderItem에 전달한 콜백함수는 화면에 보여질 개수만큼 자동 호출됨.  */}
            //     <FlatList 
            //         data={ this.state.datas }                    
            //         renderItem={ ( {item} )=>{
            //             //전달받은 콜백함수의 파라미터 : 현재 보여질 번째의 배열 데이터요소[이 예제에서는 string]
            //             // 반드시 파라미터명에 {}를 감싸도록 // ES6문법 - 비구조화 할당 문법
            //             return <Text> {item} </Text>
            //         } }>
            //     </FlatList>
            //     {/* 위 1실습은 경고문구가 보여짐. why? FlatList는 대량의 데이터들에 각각 key속성이 존재해야만 함. [ Component에 있는게 아니라.. 데이터들에 존재해야함.] */}             
            // </View>

            //2. [key]프로퍼티와 데이터를 가진 객체들을 가진 대량의 데이터배열
            // <View style={ styles.root} >
            //     <Text style={ styles.title} >FlatList exam</Text>

            //     <FlatList 
            //         data={ this.state.datas2 }                    
            //         renderItem={ ( {item} )=>{
            //             return (
            //                 <View style={ styles.itemView }>
            //                     <Text> KEY : { item.key} </Text>
            //                     <Text> DATA : { item.data} </Text>
            //                 </View>
            //             );
            //         } }>
            //     </FlatList>                
            // </View>

            //3. 아이템 클릭 이벤트 
            // <View style={ styles.root} >
            //     <Text style={ styles.title} >FlatList exam</Text>

            //     <FlatList 
            //         data={ this.state.datas2 }                    
            //         renderItem={ ( {item} )=>{
            //             return (
            //                 <TouchableOpacity style={ styles.itemView } onPress={ ()=>{ alert( item.data )} }>
            //                     <Text> KEY : { item.key} </Text>
            //                     <Text> DATA : { item.data} </Text>
            //                 </TouchableOpacity>
            //             );
            //         } }>
            //     </FlatList>                
            // </View>

            //3.1 renderItem속성의 콜백함수의 코드를 조금 다르게 만들어보기.[ 이 방식 많이 사용됨 - return생략코드!]
            // <View style={ styles.root} >
            //     <Text style={ styles.title} >FlatList exam</Text>

            //     <FlatList 
            //         data={ this.state.datas2 }                    
            //         renderItem={ ( {item} )=>                        
            //                 <TouchableOpacity style={ styles.itemView } onPress={ ()=>{ alert( item.data )} }>
            //                     <Text> KEY : { item.key} </Text>
            //                     <Text> DATA : { item.data} </Text>
            //                 </TouchableOpacity>                        
            //             }>
            //     </FlatList>                
            // </View>

            //4. RN08ListLayout2예제 [image 1개, string 2개 짜리 아이템] FlatList로 만들어보기
            // <View style={ styles.root }>
            //     <Text style={ styles.title }>FlatList TEST</Text>

            //     <FlatList 
            //         data={ this.state.datas3 }
            //         renderItem={ ( {item} )=> 
            //             <TouchableOpacity style={ styles.item } onPress={ ()=> alert(item.message) }>
            //                 <Image source={ item.img } style={ styles.itemImg }></Image>
            //                 <View>
            //                     <Text style={ styles.itemName }> {item.name} </Text>
            //                     <Text style={ styles.itemMessage }> {item.message} </Text>
            //                 </View>
            //             </TouchableOpacity>
            //         }></FlatList>
            // </View>
            // 대량의 데이터에 key프로퍼티가 없어서 경고문구 보여짐.

            //5. 배열 요소객체 마다마다 key프로퍼티 추가
            //  배열 원본객체들에 key 프로퍼티를 일일이 기입하는 것은 비효율적임.
            // 또한, 서버나 DB에서 불러들인 데이터에는 대부분 [key]프로퍼티가 없겠죠.

            // this.state.datas3배열의 각 요소객체들에 key를 자동으로 추가해주는 코드 작성 // render메소드의 지역변수위치에서.. 
            // <View style={ styles.root }>
            //     <Text style={ styles.title }>FlatList TEST</Text>

            //     <FlatList 
            //         data={ arr }
            //         renderItem={ ( {item} )=> 
            //             <TouchableOpacity style={ styles.item } onPress={ ()=> alert(item.message) }>
            //                 <Image source={ item.img } style={ styles.itemImg }></Image>
            //                 <View>
            //                     <Text style={ styles.itemName }> {item.name} </Text>
            //                     <Text style={ styles.itemMessage }> {item.message} </Text>
            //                 </View>
            //             </TouchableOpacity>
            //         }></FlatList>
            // </View>

            //6. 위 방법은 다 짜증임..왜? 무조건 배열의 개수만큼 일단 반복하면서 key프로퍼티를 추가하다 보니 성능에도 영향이 있음.
            // 원본 데이터객체의 멤버중에서 key프로퍼티를 대체할 대상을 지정하는 방법
            <View style={ styles.root }>
                <Text style={ styles.title }>FlatList TEST</Text>

                {/* FlatList에게 key프로퍼티를 대신할 멤버를 설정 */}
                <FlatList 
                    // 아이템의 멤버중 message를 key속성으로 대체하도록 설정
                    // keyExtractor= { (item)=>{return item.message;} }
                    // 위 코드를 줄여서..
                    keyExtractor= { item=>item.message }

                    data={ this.state.datas3 }
                    renderItem={ ( {item} )=> 
                        <TouchableOpacity style={ styles.item } onPress={ ()=> alert(item.name) }>
                            <Image source={ item.img } style={ styles.itemImg }></Image>
                            <View>
                                <Text style={ styles.itemName }> {item.name} </Text>
                                <Text style={ styles.itemMessage }> {item.message} </Text>
                            </View>
                        </TouchableOpacity>
                    }></FlatList>
            </View>




        );
    }//render method..

}//MainComponent class.

//스타일 객체
const styles= StyleSheet.create({
    root:{ flex:1, padding:16,},
    title: {fontSize:24, fontWeight:'bold'},
    itemView:{ borderWidth:1, borderRadius:8, margin:8, padding:8, },

    // 4.실습 스타일
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:8,
        margin:8,
    },
    itemImg:{
        width:120,
        height:100,
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        margin:8,
    },
    itemMessage:{
        fontStyle:'italic',
        margin:8,
    }

});