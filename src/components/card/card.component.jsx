import "./card.styles.css";

import React from "react";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  <div className="card-container" key={id}>
    <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>;
};

export default Card;
