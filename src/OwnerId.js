import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import JSONDATA from "./DATA.json";
import Burner from "./Burner";
import Subscription from "./Subscription";


function OwnerId() {
  const { ownerId } = useParams();
  const [flag, setFlag] = useState(false);

  return (
    <center>
      <div>
        {JSONDATA.filter((val) => {
          if (val.owner_id == ownerId) {
            if(flag === false){setFlag(true)}
            return val;
          }
          
        })?.map((item, key) => {
          if (item.card_type === "burner") {
            return (
              <Burner
                status={item.status}
                name={item.name}
                cardType={item.card_type.toUpperCase()}
                ownerId={item.owner_id}
                limit={item.limit}
                expiry={item.expiry}
              />
            );
          } else {
            return (
              <Subscription
                status={item.status}
                name={item.name}
                cardType={item.card_type.toUpperCase()}
                ownerId={item.owner_id}
                limit={item.limit}
                expiry={item.expiry}
              />
            );
          }
        })}
      </div>
      {flag === false && <h1>OWNER ID DONOT EXIST
        <br/><Link to = "/"><button style = {{
                backgroundColor : "#0096ff",
                border : '2px solid #0096ff',
                color : "white",
                borderRadius : 3
            }}>GO BACK</button></Link>
            </h1>
                
            }
    </center>
  );
}

export default OwnerId;
