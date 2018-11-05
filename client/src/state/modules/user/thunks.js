import { push, goForward } from 'react-router-redux';
import { userData, failure } from './actions';
import spotifyServices from '../../../services/spotifyServices';
import { saveState } from '../../../localStorage';
import store from '../../configureStore';

export const getUserInfo = token => (dispatch, getState) => {
  spotifyServices.getUserData(token).then(response => {
    if (response.success) {
      dispatch(userData(response.body));
      store.subscribe(() => {
        saveState(store.getState());
      });
      dispatch(push('/home'));
      dispatch(goForward());
    } else dispatch(failure('Could not fetch your data :('));
  });
};
