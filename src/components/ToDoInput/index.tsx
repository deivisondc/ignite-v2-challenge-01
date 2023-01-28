import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './ToDoInput.module.css'
import { ToDo } from '../../App'

interface ToDoInputProps {
  onCreateTodo: (newTodo: ToDo) => void
}

export function ToDoInput({ onCreateTodo }: ToDoInputProps) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newTodo: ToDo = {
      id: Date.now(),
      content: inputValue,
      isCompleted: false
    }

    onCreateTodo(newTodo)
    setInputValue('')
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
      	placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit" disabled={!inputValue}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}