import React, {Component } from 'react';
import {StyleSheet, Image, ImageBackground, View, Dimensions } from 'react-native';
import spriteData from './SpriteData';
import ImageOverlay from './ImageOverlay';
import spriteGraphics from './SpriteGraphics';
import constants from './Constants';


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
            dx: -4,
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
         sprites: sprites,
         interval: null
       };
    }

    componentDidMount(){
        this.state.interval = setInterval( ()=>this.moveSprites(), constants.INTERVAL);
    }

    componentWillUnmount(){
      if (this.state.interval!=null){ clearInterval(this.state.interval); }
    }


    moveSprites(){
//      console.log(constants.INTERVAL);
      let newSprites = this.state.sprites;
      for(i=0;i<newSprites.length; i++){
        let mySprite = newSprites[i];
        mySprite.x += mySprite.dx;
        mySprite.y += mySprite.dy;
        if (mySprite.x<0){ mySprite.dx = 2;}
        if (mySprite.y<0){ mySprite.dy = 2;}
        if (mySprite.x + this.state.tile_width> this.state.window_width ){ mySprite.dx = -2; }
        if (mySprite.y + this.state.tile_height > this.state.window_height){ mySprite.dy = -2; }
      }
      this.setState({ sprites: newSprites});
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
//                      console.log(sourceName);
//                     console.log(source);
//                     console.log(myStyle);
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