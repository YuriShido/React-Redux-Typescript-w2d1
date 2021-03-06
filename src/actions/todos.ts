import axios from 'axios'
import { Dispatch } from 'redux'
import { todosReducer } from '../reducers/todos'
import { ActionTypes } from './types'

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}


export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[]
}

export interface ClearTodosAction {
    type: ActionTypes.clearTodos
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodos
    payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = () => {
    return async(dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url)
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}

export const clearTodos = () => {
    return (dispatch: Dispatch) => {
        dispatch<ClearTodosAction>({
            type: ActionTypes.clearTodos
        })
    }
}

export const deleteTodos = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch<DeleteTodoAction>({
            type: ActionTypes.deleteTodos,
            payload: id
        })
    }
}