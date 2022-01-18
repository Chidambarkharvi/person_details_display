import React from "react";

function Card(props) {
  return (
    <> 
      {/* <div style={{flexDirection:"row" , backgroundColor:"red",display:"flex",paddingLeft:"100px"}} > */}
      <div
        onClick={() => {
          props.onpress({
            name: props.name,
            age: props.age,
            img: props.img,
         lwt:"helooo"
          });
        }}
        style={{
          marginTop:"30px",
          border: "2px solid black",
          marginBottom: "45px",
          width: "200px",
        }}
      >
        {/* <img
          src={props.img}
          height="100px"
          width="200px"
          alt="pic"
          className="card_img"
        /> */}
        <div style={{ backgroundColor: "black" }}>
          <h4
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "-5px",
            }}
          >
           {props.ind+1} . Name : {props.name}
          </h4>
          {/* <h5
            style={{
              backgroundColor: "black",
              color: "white",
              marginBottom: "-2px",
              paddingBottom: "6px",
            }}
          >
            {" "}
            Age : {props.age}
          </h5> */}
        </div>

        {/* </div> */}
      </div>

    </>
  );
}

export default Card;
