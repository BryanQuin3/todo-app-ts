import { CreateTodo } from './CreateTodo'
import { type TodoTitle } from '../types'
interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header>
      <h1>TODO</h1>
      <img
        style={{ width: '60px', height: 'auto' }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
      ></img>
      <CreateTodo saveTodo={saveTodo} />
    </header>
  )
}

export default Header
