import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";


function App() {

  const [todos, setTodos] = useState([
    {input : 'Hello, add your first todo', complete : true}
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  
  function handleAddTodo(newTodo){

    const newTodoList = [...todos, {input : newTodo, complete : false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleDeleteTodo(index){

    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleEditTodo(index){
    const newTodoList = [...todos]
    let editTodo = todos[index]
    editTodo['complete'] = true
    newTodoList[index] = editTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({
      todos : currTodos
    }))
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')){
      return 
    }
    console.log('local storage init...')

    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  
  return (
    <div>
      <>
      
        <Header todos={todos}/>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
        <TodoList handleEditTodo={handleEditTodo} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
        <TodoInput handleAddTodo={handleAddTodo}/>

      </>

    </div>
  )
}

export default App
