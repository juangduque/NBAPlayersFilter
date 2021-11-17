import React from 'react';

import '../style/css/components/playerCard.css'
const PlayerCard = (props) => {
  return(
    <li className="cardContainer">
      <p className="namePlayer">{`${props.name}  ${props.lastName} `}</p>
      <div className="heightData">
        <p>{`Height (in): ${props.height_inches}`}</p>
        <p>{`Height (m):   ${props.height_meters}`}</p>   
      </div>
    </li>
  )
}

export default PlayerCard;