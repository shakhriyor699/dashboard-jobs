import { ADD_FILTERS, REMOVE_FILTERS, CLEAR_FILTERS } from './filtersActions'

export const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case CLEAR_FILTERS:
            return []
            break;
        case ADD_FILTERS:
            if (!state.includes(action.payload)) {
                return [...state, action.payload]
            }
            return state
            break;
        case REMOVE_FILTERS:
            return state.filter(item => item !== action.payload)
            break;
        default:
            return state
            break;
    }
} 