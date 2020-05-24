import React, {Component } from 'react';
import {StyleSheet, PanResponder, View, Dimensions } from 'react-native';
import spriteData from './SpriteData';
import ImageOverlay from './ImageOverlay';
import spriteGraphics from './SpriteGraphics';
import constants from './Constants';


class SpriteEngine extends Component {

    _panResponder = {};

    constructor(props){
       super(props);
       let handlers = {
          onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
          onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
          onPanResponderGrant: this._handlePanResponderGrant,
          onPanResponderMove: this._handlePanResponderMove,
          onPanResponderRelease: this._handlePanResponderEnd,
          onPanResponderTerminate: this._handlePanResponderEnd,
          onShouldBlockNativeResponder: (e, gs) => { return true; }
        };
        console.log(handlers);
       this._panResponder = PanResponder.create(handlers);
       props.setHandlersCallback(this._panResponder);
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
         interval: null
       };
    }



   _handleStartShouldSetPanResponder = (event, gestureState) => {
     if (!isOnPlayer(gestureState.x0, gestureState.y0)){
       console.log("Fire ",gestureState.x0, gestureState.y0);
       // this.fire(gestureState.x0, gestureState,y0); // Not implemented fire weapon
       return false;
     } else {
       console.log("Start Pan Responder");
       return true;
     }
   };

   _handleMoveShouldSetPanResponder = (event, gestureState) => {
        if (!isOnPlayer(gestureState.x0, gestureState.y0)){
          console.log("Move not on player ",gestureState.x0, gestureState.y0);
          return false;
        } else {
          console.log("Start Pan Move Responder");
          return true;
        }
   }


   isOnPlayer = (x,y)=> {
     return (x>this.state.sprites[0].x && x<this.state.sprites[0].x+this.state.tile_width)
       && (y>this.state.sprites[0].y && y<this.state.sprites[1].y+this.state.tile_height);
   }

   _handlePanResponderGrant = (event, gestureState)=>{ return true;};

   _handlePanResponderMove = (event, gestureState)=> {
     if (gestureState.dx==0 || gestureState.dy==0){ console.log("No move"); return; }
     let newSprites = [... this.state.sprites];
     let speed = spriteData['player'].speed;
     if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)){
       if (gestureState.dx<0){
         newSprites[0].dx = -speed;
         newSprites[0].direction='left';
         newSprites[0].anim_counter = 0;
         newSprites[0].delay_counter = 0;
       } else if (gestureState.dx>0){
         newSprites[0].dx = speed;
         newSprites[0].direction='right';
         newSprites[0].anim_counter = 0;
         newSprites[0].delay_counter = 0;
       }
     } else {
       if (gestureState.dy<0){
         newSprites[0].dy = -speed;
         newSprites[0].direction = 'up';
         newSprites[0].anim_counter = 0;
         newSprites[0].delay_counter= 0;
       } else if (gestureState.dy>0){
         newSprites[0].dy = speed;
         newSprites[0].direction = 'down';
         newSprites[0].anim_counter = 0;
         newSprites[0].delay_counter= 0;
       }
     }
     console.log(newSprites[0]);
     this.setState({ sprites: newSprites});
     return true;
   };

   _handlePanResponderEnd = (event, guestState) => { return  true;};

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
        if (mySprite.x<0){ mySprite.dx = 2; mySprite.direction='left'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true; }
        if (mySprite.y<0){ mySprite.dy = 2; mySprite.direction='right'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true; }
        if (mySprite.x + this.state.tile_width> this.state.window_width ){
          mySprite.dx = -2; mySprite.direction='up'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true;
        }
        if (mySprite.y + this.state.tile_height > this.state.window_height){
         mySprite.dy = -2; mySprite.direction='down'; mySprite.anim_counter=0; mySprite.delay_counter=0; newDirection=true;
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