import {SET_USER} from '../action/action.types';

const initalState = {
  name: '',
  email: '',
  password: '',
  gender: '',
  dob: '',
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.payload};

    default:
      return state;
  }
};
