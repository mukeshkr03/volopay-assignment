import React from "react";

function Subscription({ name, status, cardType, ownerId, limit, expiry }) {
  return (
    <div
      style={{
        border: "1px solid blue",
        width: "500px",
        height: "150px",
        padding: "20px",
        borderRadius: 10,
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#0096ff",
        color: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>Name : {name}</strong>
        </div>
        <div>
          <strong>{cardType.toUpperCase()}</strong>
        </div>
      </div>
      <div>
        <strong>Owner_Id : {ownerId}</strong>
      </div>
      <div>
        <strong>Status : {status}</strong>
      </div>
      <div>
        <strong>Limit :{limit}</strong>
      </div>
    </div>
  );
}

export default Subscription;
