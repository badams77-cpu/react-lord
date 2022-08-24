import React, {Component} from "react";
import {Text, View} from 'react-native';

type Props = {
  children: Node;
  onError?: Function;
};

type State = { error: Error | null };

class ErrorBoundary extends React.Component {

  constructor(props){
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { error: error, hasError: true };
  }

     componentDidCatch(error, info) {
      console.warn('error caught in boundary ', error);
      console.warn('error info  caught in boundary ', info);
            console.warn('error info  caught in boundary ', info);
            console.warn('error '+error.stack.split("\n")[0]);
      this.setState({ ...this.state, hasError: true, error: error });
    }


  render() {
//    console.log(this.props.children);
    return this.state.error ? (
    <View>
    <Text>Caught an error.</Text>
      { __DEV__ ? this.state.error.stack.split("\n").map( x => (<Text>{x}</Text>)) : ''}
    </View>
    )

    : this.props.children;
  }
}


export default ErrorBoundary;