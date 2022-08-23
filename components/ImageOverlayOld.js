import React, { Component } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPropTypes
} from "react-native";


export default class ImageOverlay extends Component {
  render() {
    const {
      height,
      width,
      top,
      left,
      overlayAlpha,
      source,
      ...props
    } = this.props;

//    console.log(top, left, width, height);
    return (
      <ImageBackground
        source={source}
        style={
          {
            alignItems: 'center',
            height: height,
            width: width,
            left: left,
            top: top,
            position: 'absolute',
            justifyContent: 'center',
              resizeMode: "cover",
          }
        }
      >
      </ImageBackground>
    );
  }
}



ImageOverlay.defaultProps = {
  height: 300,
  width: 300,
  top: 200,
  left: 200,
};