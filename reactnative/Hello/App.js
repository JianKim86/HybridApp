/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>

          {/* 새로운 Component를 추가해보기 */}
          <Text style={ styles.instructions }> { new Date().getFullYear() }년 </Text>

          {/* 버튼 Component 추가해보기 */}
          <Button title="button"></Button>

          {/* 이미지 Component 추가해보기 */}
          {/* 이미지의 경로는 index.js가 있는 폴더를 시작점으로 경로지정 */}
          <Image style={ styles.img } source={ require('./images/moana01.jpg') } ></Image>
          <Image style={ styles.img } source={ require('./images/moana02.jpg') } ></Image>
        </View>        
      </ScrollView>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img:{
    width:300,
    height:400,
    marginTop:16,
    borderWidth:3,
    borderColor:'#000000',
    resizeMode:'cover'
  }
});
