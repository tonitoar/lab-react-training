import React from "react";

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
// function IdCard(id) {
//     const {firstName, lastName, picture} = id

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
      <p>Birth: {birth}</p>
    </div>
  </div>    
  );
}

export default IdCard;
