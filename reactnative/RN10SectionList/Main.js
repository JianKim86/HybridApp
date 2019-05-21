import React, { Component } from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    //생성자
    constructor(){
        super();//명시적으로 부모생성자 호출

        //리스트로 보여줄 섹션별 데이터들[ 데이터변경시 화면갱신이 되도록 this.state 멤버에 저장]
        // SectionList에 보여주려며 데이터들은 title과 data프로퍼티를 가진 객체들이어야 함.
        this.state= {
            sectionDatas:[
                {title:'한식', data:["백반", "고기산적", '비빔밥']},
                {title:'중식', data:['짜장면','짬뽕','탕수육']},
                {title:'일식', data:['초밥', '회', '덮밥']},                
            ],
        }        
    }

    render(){

        //1.실습에서 발생한 key프로퍼티문제 해결코드
        this.state.sectionDatas.forEach( (item, index)=> { item.key= index+""; } );
        
        return (
            // 1.간단히 섹션별로 string들을 가진 리스트
            // <View style={ styles.root }>
            //     {/* SectionList의 필수기본 속성 3가지 */}
            //     {/* 1) sections - 섹션 title과 섹션별 data들을 가진 배열데이터 */}
            //     {/* 2) renderItem - 리스트에 보여지는 data들의 보여지는 컴포넌트를 만들어 리턴하는 콜백함수 설정 */}
            //     {/* 3) renderSectionHeader - 섹션별 title영역에 그려질 컴포넌트를 리턴하는 콜백함수 설정 */}
            //     <SectionList
            //         sections={ this.state.sectionDatas }
            //         renderSectionHeader={ ( {section} )=>{ 
            //             //이 콜백함수는 sectionDatas에 설정함 배열의 개수만큼 실행됨.
            //             //파라미터 : 위 sections속성으로 지정한 sectionDatas의 배열요소
            //             return (
            //                 <View style={ styles.sectionHeader }>
            //                     <Text style={ styles.sectionTitle}> {section.title} </Text>
            //                 </View>
            //             );
            //          }  }
            //         renderItem={ ( {item, index, section} )=>{
            //             //이 콜백함수는 섹션별 data항목배열개수만큼 실행됨.
            //             //파라미터 : 각 섹션별 data항목배열의 요소
            //             return (
            //                 <View style={ styles.sectionItem }>
            //                     <Text>{ item }</Text>
            //                 </View>
            //             );
            //         } }
                    
            //         //위에서 각 아이템배열 데이터에 key프로퍼티가 지정되어 있지 않으면..경고임
            //         //해결방법1. 데이터배열에 key프로퍼티를 추가하는 코드를 작성- 현재 문제 있음.

            //         //해결방법2.
            //         // 일일이 key프로퍼티를 추가하기 불편하므로..
            //         // 데이터가 가지고 있는 값중에서 하나[index]를 key로 대체하기
            //         keyExtractor= { (item, index)=>{ return index; } }
                    
            //         ></SectionList>
            // </View>

            //2. 아이템들이 클릭되도록..
            <View style={ styles.root }>
                <SectionList
                    sections={ this.state.sectionDatas }
                    renderSectionHeader={ ( {section} )=>{ 
                        return (
                            <View style={ styles.sectionHeader }>
                                <Text style={ styles.sectionTitle}> {section.title} </Text>
                            </View>
                        );
                     }  }
                    renderItem={ ( {item, index, section} )=>{
                        return (
                            <TouchableOpacity onPress={ ()=>{ alert(item+index); }  } style={ styles.sectionItem }>
                                <Text>{ item }</Text>
                            </TouchableOpacity>
                        );
                    } }
                    keyExtractor= { (item, index)=>{ return index; } }
                    ></SectionList>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{ flex:1, padding:16,},
    sectionHeader:{padding:4, backgroundColor:'#eeeeee',},
    sectionTitle:{ fontSize:14, fontWeight:'bold'},
    sectionItem:{padding:8,}
});