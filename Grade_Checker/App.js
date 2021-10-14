/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    <View
      style={{
        alignItems: 'flex-start',
        paddingStart: 66,
        paddingTop: 200,
        paddingEnd: 66,
        flex: 1,
        backgroundColor: 'rgba(2, 62, 192, 1)',
      }}>
      <Text
        style={{
          fontFamily: 'Agency FB',
          fontSize: 25,
          textTransform: 'uppercase',
          color: 'rgba(255, 215, 0, 255)',
          marginStart: 15,
          marginEnd: 15,
        }}>
        Njala University
      </Text>
      <Text
        style={{
          fontFamily: 'OCR A',
          fontSize: 30,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: 'rgba(255, 215, 0, 255)',
          marginTop: 16,
          marginStart: 2,
          marginEnd: 2,
        }}>
        Attendance App
      </Text>
      <Text
        style={{
          fontFamily: 'Agency FB',
          fontSize: 25,
          textTransform: 'lowercase',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 179)',
          marginStart: 115,
          marginTop: 350,
        }}>
        by
      </Text>
      <Text
        style={{
          fontFamily: 'Boston Traffic',
          fontSize: 20,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: 'rgba(253, 255, 251, 204)',
          marginStart: 38,
          marginTop: 5,
        }}>
        Emmanuel.m.koroma
      </Text>
    </View>
  );
};

export default App;
