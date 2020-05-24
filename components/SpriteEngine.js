import React, {Component } from 'react';
import {StyleSheet, View, Dimensions } from 'react-native';
import spriteData from './SpriteData';
import ImageOverlay from './ImageOverlay';
import spriteGraphics from './SpriteGraphics';
import constants from './Constants';


class SpriteEngine extends Component {

    _panResponder = {};

    constructor(props){
       super(props);
       props.setHandlersCallback({ onPressIn: this.onPressInHandler, onPressOut: this.onPressOutHandler});
       let sprites = [];
       let initial_sprites = props['initial_sprites'];
       // Start player
       sprites.push({
         spriteName: 'player',
         x: props.player_start.x*props.tile_width,
         y: props.player_start.y*props.tile_height,
         dx: 0,
         dy: 0,
         anim_counter: 0,
         direction: 'right',
         anim_delay_frames: 1,
         delay_counter: 0
       })
        // Start Sprites
       for(let i=0; i<initial_sprites.length; i++){
          let speed = spriteData['player'].speed;
          let angle = Math.random()*2.0*Math.PI;
          let dx = speed*Math.sin(angle);
          let dy = speed*Math.cos(angle);
          sprites.push({
            spriteName: initial_sprites[i]['spriteName'],
            x: initial_sprites[i].xpos*props.tile_width,
            y: initial_sprites[i].ypos*props.tile_height,
            dx: dx,
            dy: dy,
            anim_counter: 0,
            direction: 'left',
            anim_delay_frames: 1,
            delay_counter: 0
          });
       }
       this.state = {
         window_width: props.window_width,
         window_height: props.window_height,
         tile_width: props.tile_width,
         tile_height: props.tile_height,
         sprites: sprites,
         interval: null,
         pressStartX: 0,
         pressStartY: 0,
       };
    }

   fire = (x,y)=>{
     console.log("Fire ",x ,y);
   }

    onPressInHandler = (event) => {
      if (!this.isOnPlayer(event.nativeEvent.locationX, event.nativeEvent.locationY)){
         this.fire(event.nativeEvent.locationX, event.nativeEvent.locationY);
      } else {
        this.setState({pressStartX: event.nativeEvent.locationX, pressStartY: event.nativeEvent.locationY});
      }
    }




   isOnPlayer = (x,y)=> {
     return (x>this.state.sprites[0].x && x<this.state.sprites[0].x+this.state.tile_width)
       && (y>this.state.sprites[0].y && y<this.state.sprites[1].y+this.state.tile_height);
   }

   onPressOutHandler = (event)=>{
      let x= event.nativeEvent.locationX;
      let y = event.nativeEvent.locationY;
      let dx=x-this.state.pressStartX;
      let dy=y-this.state.pressStartY;
      let newSprites = [... this.state.sprites];
           let speed = spriteData['player'].speed;
           if (Math.abs(dx) > Math.abs(dy)){
             if (dx<0){
               newSprites[0].dx = -speed;
               newSprites[0].dy= 0;
               newSprites[0].direction='left';
               newSprites[0].anim_counter = 0;
               newSprites[0].delay_counter = 0;
             } else if (dx>0){
               newSprites[0].dx = speed;
               newSprites[1].dy = 0;
               newSprites[0].direction='right';
               newSprites[0].anim_counter = 0;
               newSprites[0].delay_counter = 0;
             }
           } else {
             if (dy<0){
               newSprites[0].dy = -speed;
               newSprites[0].dx=0;
               newSprites[0].direction = 'up';
               newSprites[0].anim_counter = 0;
               newSprites[0].delay_counter= 0;
             } else if (dy>0){
               newSprites[0].dy = speed;
               newSprites[1].dx=0;
               newSprites[0].direction = 'down';
               newSprites[0].anim_counter = 0;
               newSprites[0].delay_counter= 0;
             }
           }
           console.log(newSprites[0]);
           this.setState({ sprites: newSprites});
           return true;
   }



    componentDidMount(){
        this.state.interval = setInterval( ()=>this.moveSprites(), constants.INTERVAL);
    }

    componentWillUnmount(){
      if (this.state.interval!=null){ clearInterval(this.state.interval); }
    }


    moveSprites(){
//      console.log(constants.INTERVAL);
      let newSprites = [... this.state.sprites];
      for(i=0;i<newSprites.length; i++){
        let mySprite = newSprites[i];
        let mySpriteData = spriteData[mySprite.spriteName];
        mySprite.x += mySprite.dx;
        mySprite.y += mySprite.dy;
        let newDirection =false;
        if (mySprite.x<0){ mySprite.dx = 2; mySprite.direction='right'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true; }
        if (mySprite.y<0){ mySprite.dy = 2; mySprite.direction='down'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true; }
        if (mySprite.x + this.state.tile_width> this.state.window_width ){
          mySprite.dx = -2; mySprite.direction='left'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true;
        }
        if (mySprite.y + this.state.tile_height > this.state.window_height){
         mySprite.dy = -2; mySprite.direction='up'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true;
        }
        if (mySprite.dx!=0 || mySprite.dy!=0){
          if (!newDirection){
            if (mySprite.delay_counter++ >=mySprite.anim_delay_frames){
              mySprite.anim_counter++;
              mySprite.delay_counter=0;
              if (mySprite.anim_counter>=mySpriteData[mySprite.direction].length){
                mySprite.anim_counter= 0;
              }
            }
          }
        }
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
                     style_counter++;
              }
              return (
                 <View style={ { opacity: 0.5, backgroundColor: '#000000', flex: 1 }} >{spriteRender}</View>
              );
    }

}

export default SpriteEngine;