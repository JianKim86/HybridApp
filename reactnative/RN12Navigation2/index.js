/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainBottomTab from './MainBottomTab';
import MainMaterialTopTab from './MainMaterialTopTab';
import MainDrawer from './MainDrawer';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => MainBottomTab);
// AppRegistry.registerComponent(appName, () => MainMaterialTopTab);
AppRegistry.registerComponent(appName, () => MainDrawer);
