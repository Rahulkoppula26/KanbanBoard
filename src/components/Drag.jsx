import React from "react";
import "./Style.css";
import { useState } from "react";
function Drag(props) {
  const [drag, setDrag] = useState(false);
//   console.log(props.onDrop());
  return (
    <>
      <div
        onDragEnter={() => setDrag(true)}
        onDragLeave={() => setDrag(false)}
        onDrop={() => {
          props.onDrop();
          setDrag(false);
        }}
        onDragOver={(e) => e.preventDefault()}
        className={drag ? "drop-here" : "hidding-it"}
      >
        Drop here
      </div>
    </>
  );
}
export default Drag;
