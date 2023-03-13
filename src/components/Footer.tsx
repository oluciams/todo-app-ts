import { Filters } from './Filters'
import { Todos } from './Todos'

export const Footer: React.FC<Props> = ({todos}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{Todos.length}</strong> Tareas pendientes
      </span>

      <Filters
        filterSelected={}
        onFilterSelected={}
      />

    </footer>
  )
}
