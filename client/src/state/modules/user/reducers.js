import { USER_INFO, FAILURE } from './types';

const initalState = {
  data: {},
  error: ''
};

export default (state = initalState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        data: action.data
      };
    case FAILURE:
      return {
        ...state,
        error: action.message
      };
    default:
      return state;
  }
};
