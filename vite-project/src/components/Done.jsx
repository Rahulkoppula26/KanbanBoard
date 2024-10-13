import Drag from "./Drag";
import "./Style.css"
import Card from "./Card";
function Done(props) {
  console.log("done",props);
  return (
    <>
      <div className="done" 
       onDragOver={(e)=>e.preventDefault()}
       onDrop={(e) => props.onDrop(e,"done")}>
        <h2>done</h2>
        {props.tasks.map((item, index) => (
              <div
                key={index}
                draggable="true"
                onDragStart={() => props.onDragStart(props.item, "done")}
              >
                <Card title={item.title} description={item.description} />
                {/* <Drag onDrop = {()=> props.onDrop(index + 1)} /> */}
              </div>

          )
        )}
      </div>
    </>
  );
}
export default Done;
