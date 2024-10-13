import Drag from "./Drag";
import "./Style.css";
import Card from "./Card";
function PeerReview(props) {

  return (
    <>
      <div
        className="peerreview"
        onDragOver={(e)=>e.preventDefault()}
        onDrop={(e) => props.onDrop(e,"peerReview")}
      >
        <h2>review</h2>
        {props.tasks.map((item, index) => (
          
              <div
                key={item.id}
                draggable="true"
                onDragStart={() => props.onDragStart(item, "peerReview")}
              >
               <Card title={item.title} description={item.description} />
               {console.log(item)}
                <Drag  />
              </div>
          
          
          ))
        }
      </div>
    </>
  );
}
export default PeerReview;
