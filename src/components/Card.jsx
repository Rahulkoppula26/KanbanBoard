import "./Style.css";
// import { useState } from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Card(props) {
  return (
    <>
      <div
        className="card"
        draggable="true"
        // onDragStart={(e) => onDragStart(e, props.item, "toDo")}
      >
       <a> <span>
          <FontAwesomeIcon icon={faTrash} onClick={()=>props.handleDelete()} />
        </span>
        </a>
        <div>{props.item.title} </div>
        <div>{props.item.description} </div>
      </div>
    </>
  );
}
export default Card;
