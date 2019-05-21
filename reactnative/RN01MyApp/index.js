/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

//처음 실행되는 Component를 등록하는 메소드
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyApp);
