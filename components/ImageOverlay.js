import React, { Component } from "react";
import PropTypes from "prop-types";
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
            justifyContent: 'center'
          }
        }
      >
      </ImageBackground>
    );
  }
}


ImageOverlay.propTypes = {
  rounded: PropTypes.number,
  source: Image.propTypes.source,
  height: PropTypes.number,
  width: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  children: PropTypes.element
};

ImageOverlay.defaultProps = {
  height: 300,
  width: 300,
  top: 200,
  left: 200,
};