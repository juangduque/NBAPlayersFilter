import {
  SET_PLAYERS,
  SET_PLAYERS_LOADING,
  SET_PLAYERS_ERROR
} from '../types/dataPlayersTypes';

export const setLoading = (loading) => ({
  type: SET_PLAYERS_LOADING,
  isLoading: loading
});

export const setError = (error, errorMessage) => ({
  type: SET_PLAYERS_ERROR,
  isError: error,
  errorMessage
});

export const fetchDataPlayers = () => async (dispatch) => {
  const URL_FETCH = 'https://mach-eight.uc.r.appspot.com/';
  dispatch(setLoading(true));
  await fetch( URL_FETCH )
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: SET_PLAYERS,
        payload: data
      });
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setError(true, err.message));
      dispatch(setLoading(false));
    });
};