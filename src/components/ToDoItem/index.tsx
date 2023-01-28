import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import { ToDo } from '../../App'
import styles from './ToDoItem.module.css'

interface ToDoItemProps {
  todo: ToDo;
  onCompleteTodo: (id: number) => void
  onDeleteTodo: (id: number) => void
}

export function ToDoItem({ todo, onCompleteTodo, onDeleteTodo }: ToDoItemProps) {
  return (
    <div className={`${styles.toDoItem} ${todo.isCompleted ? styles.toDoItemCompleted : ''}`}>
      <button
      	className={styles.completeButton}
        onClick={() => onCompleteTodo(todo.id)}
      >
        {todo.isCompleted && (
          <Check size={14} />
        )}
      </button>
      <p>{todo.content}</p>
      <button className={styles.deleteButton} onClick={() => onDeleteTodo(todo.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}