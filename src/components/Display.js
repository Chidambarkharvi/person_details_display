import React, { useState } from "react";

function Display(props) {
  // const [displays,setdisplays] = useState([{name:"sachin",age:22}]);
  const { displays } = props;
  return (
    <div style={{backgroundColor:"rgb(9, 164, 202)",borderRadius:"20px",height:"630px",marginTop:"30px", marginRight:"30px", width:"600px"}}>

<h1 style={{color:"white"}}> Person details</h1>

              <img height="400px" width="400px" src={displays.img} /> 

        <h1>
        name:{displays.name}

        </h1>
        <h1>
        age:{displays.age}

        </h1>

      
    </div>
  );
}

export default Display;
