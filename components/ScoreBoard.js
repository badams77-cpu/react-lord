import React, {Component} from 'react';
import {Platform, Image, View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {ADD_SCORE, ADD_LIFE, SUB_LIFE, RESTART, END_RESTART} from '../actions/Actions';
import constants from "./Constants";
import spriteData from './SpriteData';
import ImageOverlay from './ImageOverlay';
import spriteGraphics from './SpriteGraphics';
import {AdMobBanner} from 'expo-ads-admob';

class ScoreBoard extends Component {

  constructor(props){
    super(props);
  }

  bannerError = (err)=>{
    console.log(err);
  }

  render(){
    const adUnitID = Platform.select({
      ios: constants.IOS_AD,
      android: constants.ANDROID_AD
    });
//    console.log("adUnitID",adUnitID);
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        flex: 1,
        color: '#ffffff'
      }
    });
    let but = this.props.game_over? (<Button onPress={this.props.onRestart} title='Restart' color='#ff3300'/>):null;
    let pickCount = 0;
    let pickups = [];
    for(var key in  this.props.pickups){
       if (!this.props.pickups.hasOwnProperty(key)) continue;
       let mySpriteData = spriteData[key];
       let src = spriteGraphics[mySpriteData['left'][0]];
       pickups.push( <Image src={src} style={{width: 60, height: 60}} />);
    }

    return (
      <View style={styles.container}>
        <View style={{}}>{pickups}</View>
      <Text style={styles.text}>Score: {this.props.score}</Text>
      <Text style={styles.text}>Life: {this.props.life}</Text>
      {but}
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={this.bannerError} />
      </View>
      );
  }


}

const mapStateToProps = (state)=>{
  return { score : state.score, life: state.player_life, game_over: state.game_over, pickups: state.pickups };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRestart: () => { console.log("Restart Pressed"); dispatch({type: RESTART}); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
