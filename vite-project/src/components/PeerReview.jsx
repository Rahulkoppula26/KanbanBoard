import "./style.css";
import Card from "./Card";
function PeerReview({ onDragStart, onDrop, tasks=[],handleDelete}) {

  return (
    <>
      <div
        className="peerreview"
        onDragOver={(e)=>e.preventDefault()}
        onDrop={(e) => onDrop(e,"peerReview")}
      >
        <h3>Peer Review</h3>
        {/* fetching tasks */}
        {tasks.map((item, index) => (
          
              <div
                key={item.id}
                draggable="true"
                onDragStart={() => onDragStart(item)}  
              >
                {/* making card dragable and defining drag start on card  */}
               <Card  draggable="true"
                onDragStart={(e) => onDragStart(item, "peerReview")} 
                 key={item.id} item={item} 
                 handleDelete={() =>handleDelete(index)}/>
              </div>
          
          
          ))
        }
      </div>
    </>
  );
}
export default PeerReview;
