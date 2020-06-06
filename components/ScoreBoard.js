import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {ADD_SCORE, ADD_LIFE, SUB_LIFE, RESTART, END_RESTART} from '../actions/Actions';

class ScoreBoard extends Component {

  constructor(props){
    super(props);
  }



  render(){
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
