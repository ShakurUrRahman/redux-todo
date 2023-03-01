const initialState = {
    list: []
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_DO":

            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TO_DO":

            const newList = state.list.filter((l) => l.id !== action.id)

            return {
                ...state,
                list: newList
            }
        case "REMOVE_ALL_TO_DO":
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
}

export default toDoReducer;