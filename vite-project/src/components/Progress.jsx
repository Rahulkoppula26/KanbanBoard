import Drag from "./Drag";
import "./Style.css";
import Card from "./Card";
function Progress(props) {
  console.log("progress", props.tasks);
  return (
    <>
      <div
        className="progress"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => props.onDrop(e, "progress")}
      >
        <h2>progress</h2>
        {props.tasks.map((item, index) => {
          return (
              <div
                key={item.id}
                draggable="true"
                onDragStart={(e) => {
                  props.onDragStart(item, "progress");
                }}
              >
                <Card key={item.id} item={item} />
                {/* <Drag onDrop={() => props.onDrop("progress")} /> */}
              </div>
          );
        })}
      </div>
    </>
  );
}
export default Progress;
