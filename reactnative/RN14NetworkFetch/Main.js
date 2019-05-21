import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            text:"",

            //5.2실습에서 사용할 movies배열 변수
            movies:[],
        }
    }

    render(){
        return (
            <View style={ styles.root }>
                <Button title="fetch data from network" onPress={ this.fetchData }></Button>

                {/* 네트워크에서 읽어들인 데이터를 보여줄 Text컴포넌트 */}
                {/* 내용이 길수도 있어서 ScrollView사용 */}
                {/* ScrollView의 기본 height은 flex:1 로 되어 있음. */}
                <View style={ {marginTop:16,}}>
                    <ScrollView style={ {backgroundColor:'gray'}}>
                        <Text style={ {padding:8, color:'white'} }> { this.state.text } </Text>
                    </ScrollView>
                </View>

                <View style={ {marginTop:16,}}>
                    <ScrollView style={ {backgroundColor:'gray'}} horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={ {padding:8, color:'white'} }> { this.state.text } </Text>
                        <Text style={ {padding:8, color:'white'} }> { this.state.text } </Text>
                        <Text style={ {padding:8, color:'white'} }> { this.state.text } </Text>
                        <Text style={ {padding:8, color:'white'} }> { this.state.text } </Text>
                    </ScrollView>
                </View>
                

                {/* 5.2실습에서 사용할 json파싱한 movies배열의 데이터를 출력하는 코드 */}
                {
                    this.state.movies.map( (value, index)=>{
                        return (
                            <View key={ index } style={ {flexDirection:'row'} }>
                                <Text> {value.id} </Text>
                                <Text> {value.title} </Text>
                                <Text> {value.releaseYear} </Text>
                            </View>                            
                        );
                    })
                }

            </View>
        );
    }

    //네트워크 작업 메소드
    fetchData= ()=>{
        //1. Javascript의 XMLHttpRequest객체 사용하기
        // let xhr= new XMLHttpRequest();

        // // send()메소드를 이용한 요청에따라 서버가 응답한 결과를 받는 콜백함수
        // // 반드시 send()보다 먼저 작성되어 있어야함.
        // xhr.onreadystatechange= ()=>{
        //     if( xhr.readyState==4 && xhr.status==200 ){
        //         //alert( xhr.responseText );
        //         //Text컴포넌트가 보여주는 Data변경
        //         this.setState( {text: xhr.responseText } );
            
        //     }
        // }

        // // 서버URL과의 연결(무지개로드)
        // xhr.open('GET', 'http://mrhi2019.dothome.co.kr/index.html');
        // // 서버에게 요청(Request)하기
        // xhr.send();

        // 위 방법은 onreadystatechange()메소드의 작성위치가 send()보다 먼저 있어야함. 그래서 코드의 시퀀셜을 분석하기 어려움.
        // 비동기식 방식은 대부분 코드의 가독성 좋지않음.
        // 또한, 콜백지옥이라고 해서 콜백함수안에서 또 다른 비동기함수를 실행시키는 코드가 반복되는 작업을 필요할 때 매우 힘듦.

        // 이를 개선하기 위한 기법/ Jquery의 ajax()가 있으며.
        // 요즘은 Jquery가 한물갔음.
        // 새로등장한 네트워크 비동기식 함수인 fetch() API를 사용

        //2. fecth()함수 
        // 프로미티(Promiss : 약속) 문법사용- 비동기처리시에 처리가 끝났을때 해야하는 작업을 할 때 유용함
        // .then()메소드 : 비동기 처리가 끝나면 자동으로 파라미터로 전달된 함수를 실행하도록 약속(promiss)하는 개념

        //fetch('http://mrhi2019.dothome.co.kr/index.html').then( (response)=>{ alert( response.status ); } ); //statue 200면 OK임

        //2.1 fetch()의 결과를 문자열로 받아보기
        // fetch('http://mrhi2019.dothome.co.kr/index.html')
        // .then( (response)=>{
        //     //response파라미터 : 서버로 부터 응답한 결과를 가진 객체
        //     //response객체에게 응답결과물을 string으로 변환하도록 요청하여 결과를 리턴하면 다음 .then()에서 실행하도록 약속하여 콜백함수 실행
        //     return response.text();// 비동기식 함수[프로미스 리턴]
        // })
        // .then( (responseText)=>{
        //     //responseText파라미터 : 위 response.text()의 변환결과 string을 가진 변수
        //     //Text에 보여주기
        //     this.setState({text:responseText});            
        // });

        //2.2 promiss .then()를 통해 비동기식 작업 처리 중 에러가 발생하면? 이를 캐치하고자 할 때 .catch()메소드 사용
        // fetch('http://mrhi2019.dothome.co.kr/index.html')
        // .then( (response)=>{
        //     //일부러 에러 발생 : 존재하지 않는 함수 호출
        //     aaa();//ERROR

        //     return response.text();
        // })
        // .then( (responseText)=>{
        //     this.setState({text:responseText});            
        // })
        // .catch( (error)=>{ //.then()작업 중 에러가 발생하면 이 콜백함수 호출
        //     alert(error);
        // });

        //3. html이 아닌 다른 텍스트 문서도 읽어옴.
        // fetch('http://mrhi2019.dothome.co.kr/test.txt')
        // .then( (response)=>{
        //     return response.text();
        // })
        // .then( (responseText)=>{
        //     this.setState({text:responseText});
        // });

        //4. 코드를 좀더 간결하게.. {}와 return키워드 제거
        // fetch('http://mrhi2019.dothome.co.kr/test.txt')
        // .then(response=>response.text())
        // .then((responseText)=>{this.setState({text:responseText});        });

        //5. JSON문서 파싱하기 [open API]
        // 공공 open API들은 html or txt문서보다는 XML or JSON 문서가 많음. 요즘은 json이 대세고, xml파싱은 별도 라이브러리를 추가해야함. 그래서 json파싱실습

        //5.1 우선 facebook사이트에서 샘플로 제공하는 json문서 이용해 보기 [ https://facebook.github.io/react-native/movies.json ]
        // 우선 json문서을 텍스트로 읽어오기
        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then( (response)=> response.text() )
        // .then( (responseText)=>{
        //     this.setState( {text:responseText} );
        // })
        // .catch( (error)=>{alert(error);});

        //글씨로 변환했기에 그 안에 데이터들을 분석(parse)가 어려움.
        // json문자열을 JSONObject로 변환하여 파싱하는 것이 필요함. fetch()에 이 기능 메소드가 있음.
        // response.text() --> response.json()
        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then( (response)=> response.json() )
        // .then( (responseJson)=>{
        //     //responseJson파라미터 : json객체
        //     let title= responseJson.title;
        //     this.setState({text:title});

        //     //이런식으로 movies데이터들을 가져오기
        //     // 이 배열 데이터를 화면에 보여주기 위해 state변수에 저장
        //     this.setState( {movies:responseJson.movies} );          
        // })
        // .catch( (error)=>{alert(error);});

        //6. 서버스크립트인 php와 HTTP Request하기
        
        //6.1 [GET]방식- 특별하지 않음. 주소 뒤에 ? 하고 보내고자 하는 데이터를 전달[key/value]쌍으로
        // php폴더만들고 getMethod.php문서 스크립트
        // let name= "sam";
        // let msg= "Hello";
        // fetch(`http://mrhi2019.dothome.co.kr/getMethod.php?name=${name}&msg=${msg}`)
        // .then( (response) => response.text() )
        // .then( (responseText)=>{ this.setState({text:responseText}); })
        // .catch((error)=>{alert(error);});

        //6.2 [POST방식] , fetch()메소드의 파라미터로 url과 추가로 옵션을 지정
        // let name="robin";
        // let msg="Nice fetch API";
        // //보낼데이터의 문자열 형식[키=값]
        // let data="name="+name+"&"+"msg="+msg;

        // fetch('http://mrhi2019.dothome.co.kr/postMethod.php',{
        //     method:'POST',
        //     headers:{"Content-Type":"application/x-www-form-urlencoded"},
        //     body:data,
        // })
        // .then( (response) => response.text() )
        // .then( (responseText)=>{ this.setState({text:responseText}); })
        // .catch((error)=>{alert(error);});

        //7. HTTP통신을 할 때 서버로부터의 응답 데이터를 json을 받으면 데이터 항목별처리가 더 수월함.
        // 이렇듯이 post로 서버에 데이터를 보내는 것도 json으로 만들고 json으로 결과응답을 받는 형태가 요즘은 더 기본적임

        // 대부분의 앱에서 서버로 보낼 데이터가 변수별로 분리되어 있지 않고 객체로 존해하는 경우가 많음.
        let dataObj={name:"son", msg:"Hello world", age:20};

        fetch('http://mrhi2019.dothome.co.kr/jsonRequest.php',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(dataObj),//객체를 json문자열로 변환
        })
        .then( response=>response.text() )
        .then( (responseText)=>{ this.setState({text:responseText});});
        // .then( res=>res.json())
        // .then( (json)=>{
        //     let name= json.name;
        //     let msg= json.msg;
        //     let age= json.age;
        //     this.setState({text: name+" , "+ msg+" , "+age});
        // })









        
        

    }
}

const styles= StyleSheet.create({
    root:{flex:1, padding:16,},
});