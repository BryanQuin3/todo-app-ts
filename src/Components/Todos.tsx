import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface TodosProps {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo, onToggleComplete }) => {
    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleComplete={onToggleComplete}
                    />
                </li>
            ))}
        </ul>
    )
}

export default Todos
