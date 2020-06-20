import {ADD_SCORE, ADD_LIFE, SUB_LIFE, RESTART, END_RESTART, CHANGE_ROOM, END_CHANGE_ROOM} from '../actions/Actions';
import redux from 'redux';
import constants from '../components/Constants';

const initial_state = {
  score: 0,
  player_life: constants.PLAYER_LIFE,
  game_over: false,
  restart: false,
  room: constants.START_ROOM,
  player_start_x: constants.PLAYER_START_X,
  player_start_y: constants.PLAYER_START_Y,
  change_room: false,
}

scoreReducer = (state = initial_state, action)=>{
  switch(action.type){
    case ADD_SCORE:
       let newScore =action.score + state.score;
       return {...state, score: newScore};
    case ADD_LIFE:
       return {...state, player_life: state.player_life+action.life};
    case SUB_LIFE:
       let newLife = state.player_life-action.life;
       if (newLife<=0){
         return {...state, player_life: 0, game_over: true, restart: false }
       } else {
         return {...state, player_life: newLife};
       }
    case RESTART:
        return {...state, player_life: constants.PLAYER_LIFE, game_over: false, restart: true };
    case END_RESTART:
        return {...state, restart: false };
    case CHANGE_ROOM:
        if (state.game_over){ return {...state};}
        console.log("new room ", action.room);
        return {...state, room: action.room, player_start_x: action.player_start_x,
          player_start_y: action.player_start_y, change_room: true};
    case END_CHANGE_ROOM:
         if (state.game_over){ return {...state};}
         return {...state, change_room: false};

  }
  return state;
}

export default scoreReducer;