import React, {Component} from 'react';
import {Platform, View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {ADD_SCORE, ADD_LIFE, SUB_LIFE, RESTART, END_RESTART} from '../actions/Actions';
import constants from "./Constants";
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
    return (
      <View style={styles.container}><Text style={styles.text}>Score: {this.props.score}</Text>
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
  return { score : state.score, life: state.player_life, game_over: state.game_over };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRestart: () => { console.log("Restart Pressed"); dispatch({type: RESTART}); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
