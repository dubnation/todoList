import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"

import { useState } from 'react'

function App() {
  
   /*const todos = [
   { input: 'Hello! Add your first todo!', complete: true },
   { input: 'Get the groceries!', complete: false },
   { input: 'Learn how to web design', complete: false },
   { input: 'Say hi to gran gran', complete: true },
   ]*/

  const [todos, setTodos] = useState([])
  const [currTab, setCurrTab] = useState('All')


  function handleAddTodo(newTodo) {
    let newToDoList = []
    todos.forEach(todo => {
      newToDoList.push(todo)
  });
  newToDoList.push({input: newTodo, complete: false})
  setTodos(newToDoList)

  }

  function equalObjects(obj1, obj2) {
    return obj1.input === obj2.input && obj1.complete === obj2.complete;
  }
  
  function handleDeleteToDo(deleteToDo) {
    const newToDoList = todos.filter(todo => todo !== deleteToDo);
    setTodos(newToDoList);
  }
  
  

  function handleDoneTodo(doneTodo) {
    // Use map to create a new array with the updated todos
    const updatedTodos = todos.map((todo) =>
      todo === doneTodo ? { ...todo, complete: true } : todo // Create a new object if it's the matched todo
    );
  
    setTodos(updatedTodos); // Update state with the new array
  }
  

  function editDoneToDo(editToDo, newInput) {
    const editToDoList = todos.map((todo) => 
      todo === editToDo ? { ...todo, input: newInput } : todo // Fix the typo and update input
    );
    setTodos(editToDoList);
  }


   

  return (
    <> 
      <Header todos = {todos} />
      <Tabs currTab = {currTab} setCurrTab = {setCurrTab} todos = {todos} />
      <ToDoList todos = {todos} currTab = {currTab} handleDeleteToDo = {handleDeleteToDo}
      handleDoneTodo = {handleDoneTodo} editDoneToDo = {editDoneToDo}/>
      <ToDoInput handleAddTodo = {handleAddTodo}/>
      </>
  )
}


export default App