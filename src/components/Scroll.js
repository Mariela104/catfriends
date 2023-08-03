import React from "react";

const Scroll = (props) => {
  return (
    <div style={{overflowY: "scroll", height: "800px"}}>
      {props.children}  {/* Renders children */}  
      
    </div>
  );
}

export default Scroll;
