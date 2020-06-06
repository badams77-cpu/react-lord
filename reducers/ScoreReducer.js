import {ADD_SCORE, ADD_LIFE, SUB_LIFE, RESTART, END_RESTART} from '../actions/Actions';
import redux from 'redux';
import constants from '../components/Constants';

const initial_state = {
  score: 0,
  player_life: constants.PLAYER_LIFE,
  game_over: false,
  restart: false,
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
         return {...state, player_life: new_life};
       }
    case RESTART:
        return {...state, player_life: PLAYER_LIFE, game_over: false, restart: true }
    case END_RESTART:
        return {...state, restart: false }
  }
  return state;
}

export default scoreReducer;