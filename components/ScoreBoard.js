import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

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
    return (
      <View style={styles.container}><Text style={styles.text}>Score: {this.props.score}</Text></View>
      );
  }


}

const mapStateToProps = (state)=>{
  return { score : state.score};
}

export default connect(mapStateToProps)(ScoreBoard);
