import { Filters } from './Filters'
import { type FilterValue } from '../types'

interface Props {
    handleFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
}
export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, handleFilterChange, onClearCompleted }) => {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
            {completedCount > 0 && (
                <button className='clear-completed' onClick={() => { onClearCompleted() }}>
                    Eliminar completados
                </button>
            )}
        </footer>
    )
}

export default Footer
