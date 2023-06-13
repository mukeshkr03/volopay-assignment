import React, { useState } from "react";
import { Link } from "react-router-dom";
import JSONDATA from "./DATA.json";

function Home() {
  const [ownerId, setOwnerId] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  return (
    <center>
    <div style = {{
        background : 'orange',
        border : "5px solid white",
        width : "600px",
        height : "230px",
        padding : 50,
        borderRadius : 10
    }}>
      <h1>Search by ..</h1>
      <div>
        <form>
          <input style = {{border : '2px solid white',
          borderRadius : 3}}
            placeholder="Owner_id"
            type="text"
            value={ownerId}
            onChange={(e) => {
              setOwnerId(e.target.value);
            }}
          />
          <Link to={`/ownerId/${ownerId}`}>
            <button style = {{
                backgroundColor : "#0096ff",
                border : '2px solid #0096ff',
                color : "white",
                borderRadius : 3
            }}>Search</button>
          </Link>
        </form>
      </div>
      <div>
        <form>
          <input style = {{border : '2px solid white',
          borderRadius : 3}}
            placeholder="Card Name"
            type="text"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
            }}
          />
          <Link to={`/cardName/${cardName}`}>
          <button style = {{
                backgroundColor : "#0096ff",
                border : '2px solid #0096ff',
                color : "white",
                borderRadius : 3
            }}>Search</button>
          </Link>
        </form>
      </div>
      <div>
        <form>
          <input style = {{border : '2px solid white',
          borderRadius : 3}}
            placeholder="Card Type"
            type="text"
            value={cardType}
            onChange={(e) => {
              setCardType(e.target.value);
            }}
          />
          <Link to={`/cardType/${cardType}`}>
          <button style = {{
                backgroundColor : "#0096ff",
                border : '2px solid #0096ff',
                color : "white",
                borderRadius : 3
            }}>Search</button>
          </Link>
        </form>
      </div>
    
    </div>
    </center>
  );
}

export default Home;
