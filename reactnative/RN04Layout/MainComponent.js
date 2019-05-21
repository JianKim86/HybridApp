import React, { Component } from 'react';
import {View} from 'react-native';

// class를 만들면서 export적용하기
export default class MainComponent extends Component{
    render(){
        return (
            // 여러개의 뷰컴포넌트를 넣으려면 일단 가장 큰 뷰가 있어야 함. why? return은 1개의 Component만 가능하므로.

            //1) 3개의 자식뷰 배치하기
            // <View>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} } ></View>
            //     <View style={ {width:100, height:100, backgroundColor:'green'} } ></View>
            //     <View style={ {width:'70%', height:150, backgroundColor:'blue'} }></View>
            //     {/* 뷰의 사이즈는 width,height에 숫자나 %를 사용거나, flex를 이용할 수 있음. */}
            //     {/* 사이즈에 사용하는 숫자의 단위는 기본 dip임. %를 사용할 때는 문자열' '로 지정해야 함. */}
            //     {/* 별도의 부모뷰에 스타일을 주지 않으면 기본적으로 자식뷰들은 세로로 배치됨.  */}
            //     {/* 이런배치가 되는 이유는 web에서의 position속성이 기본으로 flex로 된것임 */}
            //     {/* web과 다르게 flex의 기본 배치 방향(flex-direction)이 세로('column')임 */}
            // </View>

            //2) 위처럼 width, height으로 자식뷰들의 사이즈를 설정하는 것은 해상도에 대응하기 어려운 단점이 있음.
            // RN(react native)에서는 flex 레이아웃을 권장함.
            // flex를 이용해서 자식뷰 3개의 사이즈를 지정[ 수직배치여서...높이를 1:2:4의 비율로]
            // <View style={ { height:350} }>
            //     {/* android의 layout_weight과 비슷한 기법 */}
            //     {/* 기본배치가 수직배치이므로 flex:1을 높이값 height을 지정한 것임 */}
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            //     {/* 자식뷰의 widht는?? 별도의 width의 지정이 없다면 alignItems의 기본설정의 의해 stretch가 되어 match_parent가 됨 */}
            //     {/* 부모뷰의 높이가 지정되어 있지 않으면 flex는 높이값을 계산하지 못하여 화면에 출력되지 못함. */}
            //     {/* 우선 부모뷰의 높이값 350으로 지정해보기 : 350dp를 1:2:4의 비율로 나뉘어 지정*/}
            //     {/* 부모뷰의 높이를 화면만하게 하려면 디바이스마다 다르므로.. 직접 사이즈를 지정하지 않고 flex를 사용함 */}
            // </View>

            //3) 부모뷰의 높이로 flex를 지정하여 화면에 match_parent되도독 하기
            //  부모뷰는 1개뿐이어서 비교대상이 없기에 혼자사 화면을 모두 차지하게 됨.
            // <View style={ { flex:1 } }>
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            // </View>

            // 4) 자식뷰들의 배치방향(direction)을 수평(row)배치 해보기
            // <View style={ { flex:1, flexDirection:'row' } }>
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            //     {/* 수평방향이므로 자식뷰들의 flex는 너비[width]값 지정이 됨 */}
            //     {/* 그럼 자식뷰들의 height은 stretch가 되어 자동 match_parent가 됨 */}
            // </View>

            // 5) 자식뷰들의 정렬[ justifyContent, alignItems ]
            // 먼저 수직배치[column]상황의 정렬
            // <View style={ { flex:1, flexDirection:'column', justifyContent:'space-between', alignItems:'center' } }>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'green'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'blue'} }></View>               
            // </View>

            //5.1) 수평배치에서의 정렬
            // <View style={ { flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center' } }>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'green'} }></View>
            //     <View style={ {width:50, height:50, backgroundColor:'blue'} }></View>               
            // </View>

            // 6) 자식뷰들 중에서 1개만 widht,height있고 나머지는 flex로..
            // <View style={ { flex:1 } }>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>

            //     {/* 1:3의 비율[높이값]계산할때 위 View의 높이50을 뺀 나머지 영역에 대해서만 1:3으로 나눔  */}
            //     <View style={ {flex:1, backgroundColor:'green'} }></View>
            //     <View style={ {flex:3, backgroundColor:'blue'} }></View>               
            // </View>

            // 7) 중첩구조의 배치.. 수직/수평의 중첩...안드로이드의 LinearLayout안에 LinearLayout 구조..
            // <View style={ {flex:1, flexDirection:'column'} }>
            //     {/* 크게 수직으로 2분할 [ 1 : 2 비율 ] */}

            //     {/* 7.1)상단 1의 영역 */}
            //     <View style={ {flex:1, flexDirection:'row'} }>
            //         {/* 좌우 2:1의 비율로 자식뷰배치 */}
            //         <View style= { {flex:2, backgroundColor:'red'} }></View>
            //         <View style= { {flex:1, flexDirection:'column'} }>
            //             <View style={ {flex:1, backgroundColor:'yellow'} }></View>
            //             <View style={ {flex:1, backgroundColor:'green'} }></View>
            //         </View>
            //     </View>

            //     {/* 7.2)하단 2의 영역 */}
            //     <View style={ {flex:2, flexDirection:'row'} }>
            //         {/* 좌우 1:2의 비율로 자식뷰배치 */}
            //         <View style= { {flex:1, backgroundColor:'blue'} }></View>

            //         <View style= { {flex:2, flexDirection:'column'} }>
            //             <View style={ {flex:1, backgroundColor:'gray'} }></View>
            //             <View style={ {flex:1, backgroundColor:'brown'} }></View>
            //         </View>
            //     </View>
            // </View>


            // 8) RelativeLayout처럼 뷰들이 겹치게 배치하려면 position:absolute를 이용
            <View style={ {flex:1, flexDirection:'column'} }>
                {/* 크게 수직으로 2분할 [ 1 : 2 비율 ] */}

                {/* 7.1)상단 1의 영역 */}
                <View style={ {flex:1, flexDirection:'row'} }>
                    {/* 좌우 2:1의 비율로 자식뷰배치 */}
                    <View style= { {flex:2, backgroundColor:'red'} }></View>
                    <View style= { {flex:1, flexDirection:'column'} }>
                        <View style={ {flex:1, backgroundColor:'yellow'} }></View>
                        <View style={ {flex:1, backgroundColor:'green'} }></View>
                    </View>
                </View>

                {/* 7.2)하단 2의 영역 */}
                <View style={ {flex:2, flexDirection:'row'} }>
                    {/* 좌우 1:2의 비율로 자식뷰배치 */}
                    <View style= { {flex:1, backgroundColor:'blue'} }></View>

                    <View style= { {flex:2, flexDirection:'column'} }>
                        <View style={ {flex:1, backgroundColor:'gray'} }></View>
                        <View style={ {flex:1, backgroundColor:'brown'} }></View>

                        {/* 절대위치로 뷰 겹치기 */}
                        <View style={ {width:50, height:50, backgroundColor:'white', right:10, bottom:10, position:'absolute'} }></View>
                        <View style={ {width:50, height:50, backgroundColor:'gray', right:20, bottom:20, position:'absolute'} }></View>
                    </View>
                </View>

                {/* 절대위치지정으로 뷰 겹치기 */}
                <View style={ {width:100, height:100, backgroundColor:'orange', borderRadius:50, position:'absolute', bottom:100, left:90,}  }></View>
            </View>

        );
    }
}