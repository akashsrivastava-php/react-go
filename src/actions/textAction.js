export const changeText = () => dispatch => {
    dispatch({
        type: 'CHANGE_TEXT',
        payload: 'With React Redux'
    })
}