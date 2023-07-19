import "./card-list.styles.css";
import Card from "../card/card.component";

import React from "react";

const CardList = (monsters) => {
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>;
};

export default CardList;
