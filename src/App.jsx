import "./App.css";
import "./components/style.css"
import ToDoList from "./components/ToDoList";
import Progress from "./components/Progress";
import PeerReview from "./components/PeerReview";
import Done from "./components/Done";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState(1);
  const [searchText, setSearchText] = useState("");
  // Initializing the components states to empty at begining
  const [tasks, setTasks] = useState({
    toDo: [],
    progress: [],
    peerReview: [],
    done: []
  });
  const [draggedItem, setDraggedItem] = useState(null);
  // implementing  drag start function to drag & move to other components
  function onDragStart(item, listType) {
    setDraggedItem({ item, listType });
  };
  // implementing  ondrop function to drop task in other components
  function onDrop(targetListType) {
    if (draggedItem) {
      const { item, listType:sourceList } = draggedItem;
      if(sourceList !== targetListType){
        const newTasks = { ...tasks };
      newTasks[sourceList] = newTasks[sourceList].filter((task) => task.id !== item.id);
      newTasks[targetListType] = [...newTasks[targetListType], item];
      setTasks(newTasks);
    }
    setDraggedItem(null);
    }
  };
  // implementing add task feature 
  function handleAdd() {
    if (title && description) {
      const newTask = { id: taskId, title, description };
      setTasks((prevTasks) => ({
        ...prevTasks,
        toDo: [...prevTasks.toDo, newTask]
      }));
      setTitle("");
      setDescription("");
      setTaskId(taskId + 1);
    }
  }
  // deleting the task function
  const handleDelete = (listType,indexVal) => {
    setTasks((prev) => ({
      ...prev,
      [listType]: prev[listType].filter((_, index) => index !== indexVal)
    }));
  };
  // filtering the tasks depending upon search input
  function filterTasks(list) {
    return list ? list.filter(
      (task) =>
        task.title.toLowerCase().includes(searchText.toLowerCase())
    ) : [];
  }
  return (
    <div>
      {/* project name and serach input bar section */}
      <div className="search-bar" >
          <h1  style={{textAlign:"center",color:"white",marginLeft:"5%"}} >Kanban Board </h1>
          <input className="search" placeholder="Search" onChange={(e) => setSearchText(e.target.value)} type="search" value={searchText} name="" id="" />
        </div>
        
      <div className="adding-task">
        {/* add task form */}
      <div className="addtask">
          {!visible && (
            <button type="button" onClick={() => setVisible(true)}>
              Add New Task
            </button>
          )}
          {visible && (
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                required
                className="input-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              <input
                type="text"
                required
                className="input-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <button
                type="button"
                onClick={() => {
                  setVisible(false);
                  handleAdd();
                }}
              >
                Add
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="all-sections">
        <ToDoList
          handleDelete={(index) => handleDelete("toDo", index)}
          onDragStart={(item)=>onDragStart(item,"toDo")}
          onDrop={() => onDrop('toDo')}
          tasks={filterTasks(tasks.toDo)}
          setTasks={(updatedTasks) => setTasks((prev) => ({ ...prev, toDo: updatedTasks }))}
        ></ToDoList>
        <Progress
          handleDelete={(index) => handleDelete("progress", index)}
          onDragStart={(item)=>onDragStart(item,"progress")}
          onDrop={() => onDrop('progress')}
          tasks={filterTasks(tasks.progress)}
        ></Progress>
        <PeerReview
         onDragStart={(item)=>onDragStart(item,"peerReview")}
         handleDelete={(index) => handleDelete("peerReview", index)}
          onDrop={() => onDrop('peerReview')}
          tasks={filterTasks(tasks.peerReview)}
        ></PeerReview>
        <Done
           onDragStart={(item) => onDragStart(item, "done")}
           handleDelete={(index) => handleDelete("done", index)}
          onDrop={() => onDrop( 'done')}
          tasks={filterTasks(tasks.done)}
        ></Done>
        <Outlet   />
      </div>
    </div>
  );
}

export default App;