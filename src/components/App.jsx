import React, { useState, useEffect } from 'react';
import PlayerCard from '../components/PlayerCard.jsx';
import Loader from '../components/Loader.jsx';

import '../style/css/page/app.css';

const App = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: [],
    searchValue: ""
  });

  // const fetchData = async () => {
  //   const URL_FETCH = 'https://mach-eight.uc.r.appspot.com/';
  //   setState({ loading: true, error:null })

  //   try {
  //     await fetch( URL_FETCH )
  //       .then( ( response ) => response.json() )
  //       .then( ( data ) => {
  //         setState({ loading: false, data: data.values });          
  //       });     
  //   } catch (error) {
  //     setState({ loading: false, error: error });
  //   };
  // };
  
  // useEffect( () => {
  //   fetchData(); 
  // });

  const handleChange = e => {
    const numRegex = /^[0-9\b]+$/;
    if (e.target.value === '' || numRegex.test(e.target.value)) {
      setState({ searchValue: e.target.value})
    };
  }; 
    
  if (state.loading === true ) {
    return <Loader />;
  }

  const players = []
  let playersData = state.data;

  for(let index = 0; index < playersData.length; index++){
    if( playersData[index]['h_in'] === state.searchValue ){        
      players.push(
        <PlayerCard 
          key={ index }
          name={ playersData[index]['first_name'] }
          lastName={ playersData[index]['last_name'] }
          height_inches={ playersData[index]['h_in'] }
          height_meters={ playersData[index]['h_meters'] }
        />
      )
    }    
  };
    
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
          type="text"
          placeholder="Search"
          value={ state.searchValue }
          onChange={handleChange}
        />
        <p>Type the height in inches</p>
      </section>

      {/* SHOW LIST OF PLAYERS SECTION */}
      <section>
        <ul>
          { state.searchValue === "" ? "":
            players.length != 0 ?
              players:
              <h2>No matches found</h2>
          }
        </ul>
      </section>
    </main>
  );
};

export default App;
