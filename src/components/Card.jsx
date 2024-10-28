import "./Style.css";
// import { useState } from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Card({handleDelete,item}) {
  return (
    <>
      <div
        className="card"
        draggable="true"
        // onDragStart={(e) => props.onDragStart(e, props.item, "toDo")}
      >
        {/* delete icon */}
       <a> <span>
          <FontAwesomeIcon icon={faTrash} className="trash" onClick={handleDelete} />
        </span>
        </a>
        {/* title and description */}
        <div className="title" >{item.title} </div>
        <div>{item.description} </div>
      </div>
    </>
  );
}
export default Card;
