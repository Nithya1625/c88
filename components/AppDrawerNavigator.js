import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import  {AppTabNavigator}  from './AppTabNavigator'
import CustomSideBarMenu  from './CustomerSideBarMenu';
import SettingScreen from '../Screens/SettingScreen'
import MyDonationScreen from '../Screens/MyDonations';
import NotificationScreen from '../Screens/NotificationScreen';
import MyReceivedBooksScreen from '../Screens/MyReceivedBooksScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    MyDonations : {
      screen : MyDonationScreen
    },
    Notification : {
      screen : NotificationScreen
    },
    MyReceivedBooks :{
      screen: MyReceivedBooksScreen
    },
    Setting:{
      screen:SettingScreen
    }
  },
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })