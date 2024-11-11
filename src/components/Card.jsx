import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Card({handleDelete,item}) {
  return (
    <>
      <div
        className="card"
        draggable="true"
      >
        {/* delte icon */}
       <a> <span>
          <FontAwesomeIcon icon={faTrash} className="trash" onClick={handleDelete} />
        </span>
        </a>
        {/* title and discription */}
        <div className="title" >{item.title} </div>
        <div className="description" >{item.description} </div>
      </div>
    </>
  );
}
export default Card;
