import React, {Component } from 'react';
import {StyleSheet, Image, ImageBackground, View, Dimensions } from 'react-native';
import spriteData from './SpriteData.js';
import ImageOverlay from './ImageOverlay.js';
import spriteGraphics from './SpriteGraphics.js';

class SpriteEngine extends Component {

    constructor(props){
       super(props);
       let sprites = [];
       let initial_sprites = props['initial_sprites'];
       for(let i=0; i<initial_sprites.length; i++){
          sprites.push({
            spriteName: initial_sprites[i]['spriteName'],
            x: initial_sprites[i].xpos*props.tile_width,
            y: initial_sprites[i].ypos*props.tile_height,
            dx: -2,
            dy: 0,
            anim_counter: 0,
            direction: 'left',
            anim_delay_frames: 1
          });
       }
       this.state = {
         window_width: props.window_width,
         window_height: props.window_height,
         tile_width: props.tile_width,
         tile_height: props.tile_height,
         sprites: sprites
       };
    }

    render(){
              const SPRITE_STYLE="sprites_";
              const TILES_WIDTH = this.state.tile_width;
              const TILES_HEIGHT = this.state.tile_height;
              let styles = {};
              let spriteRender = [];
              let style_counter = 0;
              let sprites = this.state.sprites;
              for(i=0; i<this.state.sprites.length;i++){
                      styles[SPRITE_STYLE+style_counter++] = {
                        position: 'absolute',
                        width: TILES_WIDTH,
                        height: TILES_HEIGHT,
                        left: sprites[i].x,
                        top: sprites[i].y,
                        zIndex: 2,
                      };
              }
              const style = StyleSheet.create(styles);
              style_counter =0;
              for(i=0; i<sprites.length;i++){
                     let mySpriteData = spriteData[sprites[i].spriteName];
                     let sourceNames = mySpriteData[sprites[i].direction];
                     let sourceName = sourceNames[sprites[i].anim_counter];
                     let source = spriteGraphics[sourceName];
                     let myStyle= style[SPRITE_STYLE+style_counter];
                     spriteRender.push(
                      <ImageOverlay
                        style={myStyle}
                        source = {source}
                        height={TILES_HEIGHT}
                        width={TILES_WIDTH}
                        left={sprites[i].x}
                        overlayAlpha={0.5}
                         top={sprites[i].y}
                        key={style_counter}
                      /> );
                      console.log(sourceName);
                     console.log(source);
                     console.log(myStyle);
                     style_counter++;
              }
              return (
                 <View style={ { opacity: 0.5, backgroundColor: '#000000' }}>
                    {spriteRender}
                 </View>
              );
    }

}

export default SpriteEngine;