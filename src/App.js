import { useState } from 'react';
import './App.css';

//capture whatever the user is typing in the input field and display it✔
//now once the button is clicked save the values in the array  ✔
//display what is in the array by looping with .map ✔
//once clicked you want to delete the item from that array. 

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: inputValue
    };
    setTodoList([...todoList, task]);
  }

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <input className="input" onChange={handleClick}/>
      <button className="btn" onClick={addTask}>
        Send
      </button>
      {todoList.map(item =>{
        return (
          <>
          <h1>{item.taskName}</h1>
          <button onClick={() => handleDelete(item.id)}>X</button>
          </>
        )
      })}
    </div>
  );
}

export default App;
