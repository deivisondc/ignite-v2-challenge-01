import { Header } from "./components/Header"
import { ToDoInput } from "./components/ToDoInput"

import styles from './App.module.css'
import { ToDoList } from "./components/ToDoList"
import { useState } from "react"

export interface ToDo {
  id: number;
  isCompleted: boolean;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])

  function handleCreateToDo(newTodo: ToDo) {
    setTodos([...todos, newTodo])
  }

  function handleCompleteToDo(id: number) {
    setTodos((state) => {
      return state.map(todo => {
        const newTodoValue = {...todo}
        if (todo.id === id) {
          newTodoValue.isCompleted = !newTodoValue.isCompleted
        }

        return newTodoValue
      })
    })
  }

  function handleDeleteToDo(id: number) {
    setTodos((state) => {
      return state.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <ToDoInput onCreateTodo={handleCreateToDo} />

        <ToDoList
        	todos={todos}
          onCompleteTodo={handleCompleteToDo}
          onDeleteTodo={handleDeleteToDo}
        />
      </main>
    </>
  )
}

export default App
