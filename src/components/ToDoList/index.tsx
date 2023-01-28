import { useState } from "react";
import { ToDo } from "../../App";
import { Badge } from "../Badge";
import { ToDoItem } from "../ToDoItem";
import { ToDoListEmpty } from "../ToDoListEmpty";

import styles from './ToDoList.module.css'

interface ToDoList {
  todos: ToDo[];
  onCompleteTodo: (id: number) => void
  onDeleteTodo: (id: number) => void
}

export function ToDoList({ todos, onCompleteTodo, onDeleteTodo }: ToDoList) {
  const completedTasks = todos.filter(todo => todo.isCompleted).length ?? 0
  const completedBadgeContent = !todos.length ? '0' : `${completedTasks} de ${todos.length}`

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <span>Tarefas criadas</span>
          <Badge content={completedTasks.toString()}  />
        </div>

        <div className={styles.headerInfo}>
          <span>Concluídas</span>
          <Badge content={completedBadgeContent} />
        </div>
      </header>

      <div className={styles.list}>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
          	todo={todo}
          	onCompleteTodo={onCompleteTodo}
          	onDeleteTodo={onDeleteTodo}
          />
        ))}

        {!todos.length && <ToDoListEmpty />}
      </div>
    </div>
  )
}