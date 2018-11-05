import { USER_INFO, FAILURE } from './types';

export const userData = data => ({
  type: USER_INFO,
  data: data
});

export const failure = message => ({
  type: FAILURE,
  message
});
