import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 66,
        "paddingTop": 310,
        "flex": 1
      }
    } >
    <Text style = {
      {
        "fontFamily": "Agency FB",
        "fontSize": 35,
        "textTransform": "uppercase",
        "color": "rgba(255, 215, 0, 255)",
        "marginStart": 47
      }
    } > Njala University </Text>
    <Text style = {
      {
        "fontFamily": "OCR A",
        "fontSize": 35,
        "textTransform": "uppercase",
        "textAlign": "center",
        "color": "rgba(255, 215, 0, 255)",
        "marginTop": 16
      }
    } > Attendance App </Text>
    <Text style = {
      {
        "fontFamily": "Agency FB",
        "fontSize": 35,
        "textTransform": "lowercase",
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 179)",
        "marginStart": 147,
        "marginTop": 373
      }
    } > by </Text>
    <Text style = {
      {
        "fontFamily": "Boston Traffic",
        "fontSize": 25,
        "textTransform": "uppercase",
        "textAlign": "center",
        "color": "rgba(253, 255, 251, 204)",
        "marginStart": 38,
        "marginTop": 16
      }
    } > Emmanuel.m.koroma </Text>
    </View>

  );
};