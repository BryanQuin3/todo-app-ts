import { type TodoTitle } from '../types'
import { useState } from 'react'
interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        saveTodo({ title: inputValue })
        setInputValue('')
    }

    return (
        <form action="" onSubmit={handleSubmit} >
            <input type="text" className='new-todo' onChange={(e) => { setInputValue(e.target.value) }} autoFocus placeholder='¿Qué quieres hacer?' value={inputValue} />
        </form >
    )
}

export default CreateTodo
