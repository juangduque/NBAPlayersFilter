import React from 'react';

import '../style/css/components/playerCard.css'
const PlayerCard = ({
  name,
  lastName,
  height_inches,
  height_meters
}) => (
  <li className="cardContainer">
    <p className="namePlayer">{`${name}  ${lastName} `}</p>
    <div className="heightData">
      <p>{`Height (in): ${height_inches}`}</p>
      <p>{`Height (m):   ${height_meters}`}</p>   
    </div>
  </li>
);

export default PlayerCard;