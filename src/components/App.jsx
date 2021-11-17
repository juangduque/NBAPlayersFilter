import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerCard from '../components/PlayerCard.jsx';
import Loader from '../components/Loader.jsx';

import { 
  fetchDataPlayers
} from '../redux/actions/dataPlayersActions';

import '../style/css/page/app.css';

const App = () => {
  const searchInput = useRef(null);
  const [searchValue, setSearch] = useState('');
  const data = useSelector(({dataPlayersReducers}) => dataPlayersReducers.dataPlayers);
  const pageStatus = useSelector(({dataPlayersReducers}) => dataPlayersReducers.pageStatus);
  const dispatch = useDispatch();
  const dataPlayers = data.values;
 
  useEffect( () => {
    dispatch( fetchDataPlayers() );
  }, [dispatch]);

  const handleChange = () => {
    setSearch(searchInput.current.value);
  };
   
  const displayPlayersFiltered = (search) => {
    const players = [];
    Object.keys(dataPlayers).map( index => {
      if( dataPlayers[index]['h_in'] === search ){
        players.push(
          <PlayerCard 
            key={ index }
            name={ dataPlayers[index]['first_name'] }
            lastName={ dataPlayers[index]['last_name'] }
            height_inches={ dataPlayers[index]['h_in'] }
            height_meters={ dataPlayers[index]['h_meters'] }
          />
        )
      }
    });
    return players;
  };

  if (pageStatus.loading === true ) {
    return <Loader />;
  }

  if (pageStatus.error === true ) {
    return <h1 className="error-label">There was an error: {pageStatus.errorMessage}</h1>
  }
    
  return (
    <main>
      {/* HEADER OF THE APP */}
      <header className="appHeader">
        <h1>NBA Players filter</h1>
        <h2>You can see a list of basketball players filtered by height</h2>
      </header>

      {/* SEARCH BAR SECTION */}
      <section className="searchSection">
        <input
          type="number"
          placeholder="Search"
          ref={ searchInput }
          value={ searchValue }
          onChange={handleChange}
        />
        <p>Type the height in inches</p>
      </section>

      {/* SHOW LIST OF PLAYERS SECTION */}
      <section>
        <ul>
          {
            ( searchValue !== "" ) 
            ? ( displayPlayersFiltered(searchValue).length === 0 
              ? <h2>No matches found</h2>
              : displayPlayersFiltered(searchValue)        
              )            
            : null
          }
        </ul>
      </section>
    </main>
  );
};

export default App;
