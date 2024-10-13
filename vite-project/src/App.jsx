import "./App.css";
import ToDoList from "./components/ToDoList";
import Progress from "./components/Progress";
import PeerReview from "./components/PeerReview";
import Done from "./components/Done";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState({
    toDo: [],
    progress: [],
    peerReview: [],
    done: []
  });
  const [draggedItem, setDraggedItem] = useState(null);
  function onDragStart(e,item, listType) {
    setDraggedItem({ item, listType });
    e.dataTransfer.setData('itemId', item.id);
  };
  function onDrop(e, listType) {
    e.preventDefault();
    if (draggedItem) {
      const { item, currentList } = draggedItem;
      const newTasks = { ...tasks };
      newTasks[currentList] = newTasks[currentList].filter((task) => task.id !== item.id);
      newTasks[listType].push(item)
      setTasks(newTasks);
    }
    setDraggedItem(null);
  };
  
  return (
    <div>
      <h2  style={{textAlign:"center"}} >Kanban Board </h2>
      <div className="all-sections">
        <ToDoList
          onDragStart={onDragStart}
          onDrop={(e) => onDrop(e, 'toDo')}
          tasks={tasks.toDo}
        ></ToDoList>
        <Progress
          onDragStart={onDragStart}
          onDrop={(e) => onDrop(e, 'progress')}
          tasks={tasks.progress}
        ></Progress>
        <PeerReview
          onDragStart={onDragStart}
          onDrop={(e) => onDrop(e, 'peerReview')}
          tasks={tasks.peerReview}
        ></PeerReview>
        <Done
          onDragStart={onDragStart}
          onDrop={(e) => onDrop(e, 'done')}
          tasks={tasks.done}
        ></Done>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;