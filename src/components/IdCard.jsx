import React from "react";

function IdCard(props) {
//onsole.log(props)
const {firstName, lastName, gender, height, birth, picture} = props
  return (
    <div className="id-card">
    <div className="image">
      <img src={picture} alt="Profile" />
    </div>
    <div className="info">
      <p>First Name:{firstName} </p>
      <p>Last Name:{lastName} </p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toDateString()}</p>
    </div>
  </div>    
  );
}

export default IdCard;
