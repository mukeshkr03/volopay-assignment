import React from "react";

function Burner({name, status, cardType, ownerId, limit, expiry}) {
  return (
    <div
      style={{
        border: "1px solid blue",
        width: "500px",
        height: "150px",
        padding: "20px",
        borderRadius: 10,
        marginTop : "20px",
        marginBottom : "20px",
        backgroundColor :  "#0096ff",
        color : "white",
        fontWeight : 600
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Name : {name}</div>
        <div>{cardType.toUpperCase()}</div>
      </div>
      <div>Owner_Id : {ownerId}</div>
      <div>Status : {status}</div>
      <div>Expiry : {expiry}</div>
    </div>
  );
}

export default Burner;
