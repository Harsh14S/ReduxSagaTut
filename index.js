/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ClassLifeCycleMethods from './SRC/Components/LifeCycle/ClassLifeCycleMethods';
import FuncLifeCycleMethods from './SRC/Components/LifeCycle/FuncLifeCycleMethods';
import Rough from './SRC/Components/Rough';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => ClassLifeCycleMethods);
// AppRegistry.registerComponent(appName, () => FuncLifeCycleMethods);
