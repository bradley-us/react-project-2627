function filterReducer(state='SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VIS_FILTER':
            return action.payload.filter
        default:
            return state
    }
}

export default filterReducer;