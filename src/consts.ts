export const TODO_FILTERS = {
    SHOW_ALL: 'all',
    SHOW_ACTIVE: 'active',
    SHOW_COMPLETED: 'completed'
} as const

export const FILTERS_BUTTOMS = {
    [TODO_FILTERS.SHOW_ALL]: {
        literal: 'todos',
        href: `/?filter=${TODO_FILTERS.SHOW_ALL}`
    },
    [TODO_FILTERS.SHOW_ACTIVE]: {
        literal: 'activos',
        href: `/?filter=${TODO_FILTERS.SHOW_ACTIVE}`
    },
    [TODO_FILTERS.SHOW_COMPLETED]: {
        literal: 'completados',
        href: `/?filter=${TODO_FILTERS.SHOW_COMPLETED}`
    }
} as const   
