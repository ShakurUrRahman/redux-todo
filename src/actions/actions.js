export const addToDo = (data) => {
    return {
        type: "ADD_TO_DO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: "DELETE_TO_DO",
        id
    }
}

export const removeAllToDo = () => {
    return {
        type: "REMOVE_ALL_TO_DO"
    }
}

