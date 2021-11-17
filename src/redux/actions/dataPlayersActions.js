import {
  SET_PLAYERS,
  SET_PLAYERS_LOADING,
  SET_PLAYERS_ERROR
} from '../types/dataPlayersTypes';

export const setLoading = (loading) => ({
  type: SET_PLAYERS_LOADING,
  loading
});