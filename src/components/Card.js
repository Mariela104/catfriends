import React from "react";

const Card = ({id, name, email}) => {
  return (  // It's written in JSX
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="kitty" src={`https://robohash.org/${id}?set=set4`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
