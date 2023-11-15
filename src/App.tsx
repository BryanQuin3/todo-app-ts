/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Header } from './Components/Header'
import Todos from './Components/Todos'
import Fotter from './Components/Footer'
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import { MagicMotion } from 'react-magic-motion'
const mockTodo = [
  {
    id: '1',
    title: 'Realizar triggers en la base de datos',
    completed: false
  },
  {
    id: '2',
    title: 'Terminar el curso de react',
    completed: false
  },
  {
    id: '3',
    title: 'Terminar el curso de typescript',
    completed: true
  }

]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodo)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.SHOW_ALL)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleCompleteTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    }))
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const removeAllCompleted = (): void => {
    const filteredTodos = todos.filter((todo) => !todo.completed)
    setTodos(filteredTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodo = todos.filter((todos) => {
    if (filterSelected === TODO_FILTERS.SHOW_ACTIVE) {
      return !todos.completed
    }
    if (filterSelected === TODO_FILTERS.SHOW_COMPLETED) {
      return todos.completed
    }
    return todos
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <MagicMotion>
      <div className="todoapp">
        <Header saveTodo={handleAddTodo} />
        <Todos todos={filteredTodo} onRemoveTodo={handleRemoveTodo} onToggleComplete={handleCompleteTodo} />
        <Fotter
          activeCount={activeCount}
          filterSelected={filterSelected}
          completedCount={completedCount}
          onFilterChange={handleFilterChange}
          onClearCompleted={removeAllCompleted}
        />
      </div>
    </MagicMotion>

  )
}

export default App
