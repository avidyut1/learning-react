export function incrementId() {
    return {
        type: 'INCREMENT_ID'
    }
}
export function setId(id) {
    return {
        type: 'SET_ID',
        id: id
    }
}