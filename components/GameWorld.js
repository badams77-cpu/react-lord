import React, {Component } from 'react';
import {StyleSheet, Image, View, Dimensions } from 'react-native';
import background from './Background.js';
import map from './Maps.js';
import SpriteEngine from './SpriteEngine.js'

class GameWorld extends Component {

    constructor(props){
       super(props);
       this.state = { room: 'room0', playerStart: { x: 8, y: 8}};
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
        const room = map[this.state.room];
        const myMap = room['map'];
        const base = room['base'];
        const myBackground = background[base];
        const TILES_HEIGHT = Math.floor(window_height/myMap.length);
        const TILES_WIDTH = Math.floor(window_width/myMap[0].length);
        let styles = {};
        let tiles = [];
        let style_counter = 0;
        let initialSprites = room['sprites'];
        for(y=0; y<myMap.length;y++){
            for(x=0; x< myMap[y].length;x++){
                styles[TILE_STYLE+style_counter++] = {
                  position: 'absolute',
                  width: TILES_WIDTH,
                  height: TILES_HEIGHT,
                  left: x*TILES_WIDTH,
                  top: y*TILES_HEIGHT,
                  opacity: 1,
                  backgroundColor: '#000000',
                  zIndex: 0,
                };
            }
        }
        const style = StyleSheet.create(styles);
        style_counter =0;
        for(y=0; y<myMap.length;y++){
            for(x=0; x< myMap[y].length;x++){
               tiles.push( <Image style={style[TILE_STYLE+style_counter]} source={myBackground[myMap[y][x]]} key={style_counter}/> );
               style_counter++;
            }
        }
        return (
           <View>
             {tiles}
                          <SpriteEngine
                            window_width={window_width}
                            window_height={window_height}
                            tile_width={TILES_WIDTH}
                            tile_height={TILES_HEIGHT}
                            initial_sprites={initialSprites}
                            player_start={this.state.playerStart}
                          />
           </View>
        );
    }

}

export default GameWorld;