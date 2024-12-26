import Card from "./Card";
import "./style.css";

function ToDoList({ onDragStart, onDrop, tasks=[],handleDelete }) {
 
  return (
    <div className="todolist" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      <div className="todo-head">
        <div className="todoname">
          <h3>To-Do</h3>
        </div>
      </div>
      <div className="todo-container">
        
        <div className="todolist-tasks">
          {/* fetching tasks */}
          {tasks.map((item, index) => (
            <div
              key={item.id}
              draggable="true"
              onDragStart={() => onDragStart(item)}
            >
               {/* making card dragable and defining drag start on card  */}
              <Card handleDelete={() =>handleDelete(index)} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
