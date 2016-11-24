// index.android.js - android code goes here

//import libraries to help create component
import React from 'react';
//import ReactNative from 'react-native';
import { View, AppRegistry } from 'react-native'; 
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

//create component
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'Music Albums!'} />
        <AlbumList />
    </View>
);


//render the component on the device

//[learning notes]
//In any ReactNative application, we atleast have to register
//at least one Component to the application
//[learning notes]
AppRegistry.registerComponent('albums', () => App);
