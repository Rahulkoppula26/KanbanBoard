import "./Style.css";
import Card from "./Card";
function Progress({ onDragStart, onDrop, tasks=[],handleDelete}) {  
  return (
    <>
      <div
        className="progress"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, "progress")}
      >
        <h3 >Progress</h3>
        {tasks.map((item, index) => {
          return (
              <div
                key={item.id}
                draggable="true"
                onDragStart={() => onDragStart(item)}
              >
                 {/* making card dragable and defining drag start on card  */}
                <Card  draggable="true"
                onDragStart={(e) => {
                  onDragStart(item, "progress");
                }} key={item.id} item={item}  handleDelete={()=>handleDelete(index)} />
              </div>
          );
        })}
      </div>
    </>
  );
}
export default Progress;
