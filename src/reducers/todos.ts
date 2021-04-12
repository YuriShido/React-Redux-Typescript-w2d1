import { ActionTypes, Todo, Action } from '../actions'

export const todosReducer = (state: Todo[] = [], action: Action ) => {
    switch(action.type){
        case ActionTypes.fetchTodos:
            return action.payload
        case ActionTypes.clearTodos:
            return []
        case ActionTypes.deleteTodos:
            return state.filter((item: Todo) => item.id !== action.payload)
        default:
            return state
    }
}