export const ADD_FILTERS = 'ADD_FILTERS'
export const REMOVE_FILTERS = 'REMOVE_FILTERS'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const addFilter = (filter) => ({
    type: ADD_FILTERS,
    payload: filter
})

export const removeFilter = (filter) => ({
    type: REMOVE_FILTERS,
    payload: filter
})

export const clearFilter = () => ({
    type: CLEAR_FILTERS
})

