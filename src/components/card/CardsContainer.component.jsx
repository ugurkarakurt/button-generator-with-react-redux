import React from 'react';
import CardText from './CardText.component';
import CardSize from './CardSize.component';
import CardColor from './CardColor.component';
import CardBorder from './CardBorder.component';
import CardBoxShadow from './CardBoxShadow.component';

export default function CardsContainer() {
  return (
    <div className="cards-container">
      <CardText />
      <CardBoxShadow />
      <CardSize />
      <CardColor />
      <CardBorder />
    </div>
  )
}
