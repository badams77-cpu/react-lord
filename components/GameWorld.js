import React, {Component } from 'react';
import {StyleSheet, Image, View, Dimensions } from 'react-native';
import background from './Background.js';
import map from './Maps.js';

class GameWorld extends Component {

    constructor(props){
       super(props);
       this.state = { room: 'room0'};
    }

    render(){
        const TILE_STYLE = "tileStyle_";
        const window = Dimensions.get('window');
        let window_width = window.width;
        let window_height = window.height;
        if (window_width<window_height){
          window_height = window_width;
        } else {
          window_width = window_height;
        }
        const myMap = map[this.state.room];
        const TILES_HEIGHT = Math.floor(window_height/myMap.length);
        const TILES_WIDTH = Math.floor(window_width/myMap[0].length);
        let styles = {};
        let tiles = [];
        let style_counter = 0;
        for(y=0; y<myMap.length;y++){
            for(x=0; x< myMap[y].length;x++){
                styles[TILE_STYLE+style_counter++] = {
                  position: 'absolute',
                  width: TILES_WIDTH,
                  height: TILES_HEIGHT,
                  left: x*TILES_WIDTH,
                  top: y*TILES_HEIGHT
                };
            }
        }
        const style = StyleSheet.create(styles);
        style_counter =0;
        for(y=0; y<myMap.length;y++){
            for(x=0; x< myMap[y].length;x++){
               tiles.push( <Image style={style[TILE_STYLE+style_counter]} source={background[myMap[y][x]]} key={style_counter/> );
               style_counter++;
            }
        }
        return (
           <View>
             {tiles}
           </View>
        );
    }

}

export default GameWorld;