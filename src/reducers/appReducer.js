const initialState = {
    welcomeText: 'With React'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                welcomeText: action.payload
            }
        default:
            return state
    }
}