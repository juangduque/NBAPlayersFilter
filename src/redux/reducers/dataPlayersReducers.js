

const dataPlayersReducers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA_PLAYERS':
      return action.payload;
    default:
      return state;
  }
}

export default dataPlayersReducers;