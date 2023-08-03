import React from "react";
import Card from "./Card";

const CardList = ({cats}) => {
  const cardsInfo = cats.map(user => {
    return (
      <Card 
        key = {user.id} 
        id = {user.id} 
        name = {user.name} 
        email = {user.email} 
      />
    );
  });

  return (<>{cardsInfo}</>);
}

export default CardList;
