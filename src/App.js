import { useState } from 'react';
import './App.css';

//capture whatever the user is typing in the input field and display it✔
//now once the button is clicked save the values in the array  ✔
//display what is in the array by looping with .map ✔
//once clicked you want to delete the item from that array. 

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (event) => {
    setInputValue(event.target.value);
  }

  const handleText = () => {
    const newTask = [...task, inputValue];
    setTask(newTask);
  }

  const handleDelete = () => {

  }

  return (
    <div className="App">
      <input className="input" onChange={handleClick}/>
      <button className="btn" onClick={handleText}>
        Send
      </button>
      {task.map(item =>{
        return (
          <>
          <h1>{item}</h1>
          <button onClick={handleDelete}>X</button>
          </>
        )
      })}
    </div>
  );
}

export default App;
