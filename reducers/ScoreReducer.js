import {ADD_SCORE} from '../actions/Actions';
import redux from 'redux';

const initial_state = {
  score: 0
}

scoreReducer = (state = initial_state, action)=>{
  switch(action.type){
    case ADD_SCORE:
       let newScore =action.score + state.score;
       return {...state, score: newScore};
  }
  return state;
}

export default scoreReducer;