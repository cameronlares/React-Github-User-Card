import React from "react";

const CardList = (props) => {
  return (
    <div className="card">
    
     <img className="follower-img" width="200" src= {props.follower.avatar_url} alt="Follower"/>

        <p className="username">
      Username: {props.follower.login}
      </p>
    </div>
  );
};

export default CardList;
