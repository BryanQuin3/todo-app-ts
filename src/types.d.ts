import { type FILTERS_BUTTOMS } from './consts'
export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>

export type ListOfTodos = Todo[]

/*  es un tipo que puede ser cualquier 
    valor que una propiedad del objeto 
    FILTERS_BUTTOMS pueda tener. 
*/
export type FilterValue = typeof FILTERS_BUTTOMS[keyof typeof FILTERS_BUTTOMS]
