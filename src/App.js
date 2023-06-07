import './App.css';
import {useState} from 'react'
import Todolist from './components/Todolist';
import Addtodo from './components/Addtodo';
import Todocount from './components/Todocount';
function App() {

  let [todolist, setTodolist] = useState([])

  return (
    <div className="App container text-center">
      <h1 className='display-1'>To-do App</h1>
      <div className="row mt-5">
        <div className="col-sm-4">
          <Addtodo setTodolist={setTodolist} todolist={todolist}/>
        </div>
        <div className="col-sm-4">
          <Todolist todolist={todolist}/>
        </div>
        <div className="col-sm-4">
          <Todocount todolist={todolist} />
        </div>
      </div>
    </div>
  );
}

export default App;
