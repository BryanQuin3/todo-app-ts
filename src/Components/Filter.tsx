import { type FilterValue } from '../types'
import { FILTERS_BUTTOMS } from '../consts'

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters" >
            {Object.entries(FILTERS_BUTTOMS).map(([key, { literal, href }]) => {
                const isSelect = filterSelected === key as unknown as FilterValue
                const className = isSelect ? 'selected' : ''
                return (
                    <li key={key}>
                        <a href={href} className={className}
                            onClick={(e) => {
                                e.preventDefault()
                                onFilterChange(key as unknown as FilterValue)
                            }}>
                            {literal}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Filter
