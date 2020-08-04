import React from "react";

const CardList = (props) => {
  return (
    <div className="card">
        <p>
      {props.follower.login}
      </p>
      <p>

      {props.follower.id}
      </p>

    <p>
       { props.user}
    </p>
    </div>
  );
};

export default CardList;
