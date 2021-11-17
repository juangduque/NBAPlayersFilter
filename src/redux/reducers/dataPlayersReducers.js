import {
  SET_PLAYERS,
  SET_PLAYERS_LOADING,
  SET_PLAYERS_ERROR
} from '../types/dataPlayersTypes';

const INITIAL_STATE = {
  dataPlayers: [],
  pageStatus: {
    loading: false,
    error: false,
    errorMessage: '',
  }
};


const dataPlayersReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return {
        ...state,
        dataPlayers: action.payload
      };

    case SET_PLAYERS_LOADING:
      return {
        ...state,
        pageStatus: {
          ...state.loading,
          loading: action.isLoading
        }
      };
    
    case SET_PLAYERS_ERROR:
      return {
        ...state,
        pageStatus: {
          ...state.pageStatus,
          error: action.isError,
          errorMessage: action.errorMessage
        }
      };

    default:
      return state;
  };
};

export default dataPlayersReducers;