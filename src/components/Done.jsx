import "./Style.css"
import Card from "./Card";
function Done({ onDragStart, onDrop, tasks=[],handleDelete}) {
  return (
    <>
      <div className="done" 
       onDragOver={(e)=>e.preventDefault()}
       onDrop={(e) => onDrop(e,"done")}>
        <h3>Done</h3>
        {/* fetching tasks from the done componnent and defining dragable and drag start on card*/}
        {tasks.map((item, index) => (
              <div
                key={index}
                draggable="true"
                onDragStart={() => onDragStart(item)}
              >
                <Card draggable="true"
                onDragStart={() => onDragStart(props.item, "done")}  key={item.id} item={item} handleDelete={() =>handleDelete(index)} />
              </div>

          )
        )}
      </div>
    </>
  );
}
export default Done;
