import clipboard from '../../assets/Clipboard.svg'

import styles from './ToDoListEmpty.module.css'

export function ToDoListEmpty() {
  return (
    <div className={styles.listEmpty}>
      <img src={clipboard} alt="clipboard image" />

      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}