import { Filter } from './Filter'
import { type FilterValue } from '../types'

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
}
export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, onFilterChange, onClearCompleted }) => {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            <Filter filterSelected={filterSelected} onFilterChange={onFilterChange} />
            {completedCount > 0 && (
                <button className='clear-completed' onClick={() => { onClearCompleted() }}>
                    Eliminar completados
                </button>
            )}
        </footer>
    )
}

export default Footer
