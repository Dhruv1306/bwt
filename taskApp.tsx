import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import { task4 as Task4} from "./components/task4";    { /* We need to put an alias in this case cause React expects component's name to start with a capital letter and since we have exported the task4 component with small letter, so we need to import it with an alias and that alias should start with a capital letter. */ }
import {task5 as Task5} from "./components/task5";    

const User = {
  name: "John Doe",
  age: 21
}

const Users = [
  { name: "Jane Smith", age: 21 },
  { name: "John Doe", age: 30 },
  { name: "Alice Johnson", age: 25 }
]

const App = () => {
  return (
    <div>
      <Task1 user={User}/>  <br /><br /><hr />
      <Task2 user={Users}/> <br /><br /><hr />
      <Task3>
        <Task1>Hey I'm the component that gets passed to the Task_3 from Task_2</Task1>
      </Task3> <br /><br /><hr />
      <Task4 onButtonClick={() => alert("Button clicked from App component!!")}/> <br /><br /><hr />
      <Task5 /> <br /><br /><hr />
    </div>
  )
}

export default App;