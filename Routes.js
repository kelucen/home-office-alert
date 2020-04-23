import React from 'react';
import { createAppContainer } from 'react-navigation';
import App from './App';
import Bluetooth from './Bluetooth';
import SendToWpp from './SendtoWhatsapp';
import  Warning from './Warning';
import {createStackNavigator} from 'react-navigation-stack';



const Routes = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerShown: false,
    }
   
  },
  Bluetooth: {
    screen: Bluetooth,
    navigationOptions: {
        headerShown: false,
      }
  
  },
 
  
   SendToWpp: {
      screen: SendToWpp,
    navigationOptions: {
      headerShown: false,
    }
  },
  Warning: {
    screen: Warning,
  navigationOptions: {
    headerShown: false,
  }
},
  
},

);


export default createAppContainer(Routes);