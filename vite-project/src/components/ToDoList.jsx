import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Card from "./Card";
import "./Style.css";
function ToDoList() {
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState(1);
  const [todolist, setTodolist] = useState([]);
  const [searchText, setSearchText] = useState("");
  function onDragStart(item, listType) {
    console.log(`Drag started: ${item.title} from ${listType}`);
  }

  function handleAdd() {
    if (title && description) {
      setTodolist([...todolist, { id: taskId, title, description }]);
      setTitle("");
      setDescription("");
      setTaskId(taskId + 1);
    }
  }
  const handleDelete = (indexVal) => {
    const afterDelete = todolist.filter((todolist,index) => index !==indexVal );
    // console.log(afterDelete);
    setTodolist(afterDelete);
  }
  function updateSearch(e) {
    setSearchText(e.target.value);
    filteredTasks();
  }
  // converting to lowercase and filtering the matched data from searchtext by user
  function filteredTasks() {
    const filtered = todolist.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTodolist(filtered);
    console.log(filtered);
  }
  return (
    <>
      <div className="todolist">
        <div className="todo-head">
          {searchVisible && (
            <div className="todoname">
              <h2>todo </h2>
              <FontAwesomeIcon
                onClick={() => {
                  setSearchVisible(false);
                }}
                icon={faMagnifyingGlass}
              />
            </div>
          )}
          {!searchVisible && (
            <div className="search-bar">
              <input
                className="search"
                type="search"
                value={searchText}
                onChange={updateSearch}
                placeholder="Search"
              />
              <FontAwesomeIcon
                onClick={() => {
                  setSearchVisible(true);
                }}
                icon={faCircleXmark}
              />
            </div>
          )}
        </div>
        <div className="todo-container" >
          <div className="addtask">
            {!visible && (
              <button
                type="button"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Add New Task
              </button>
            )}
            {visible && (
                <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    className="input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="input-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
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
          <div className="todolist-tasks">
            {todolist.map((item, index) => {
              return (
                <div
                  key={item.id}
                  draggable="true"
                  onDragStart={(e) => {
                    onDragStart(item, "toDo");
                  }}
                >
                  <Card handleDelete={handleDelete} key={item.id} item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
