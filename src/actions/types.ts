import { FetchTodosAction, ClearTodosAction, DeleteTodoAction} from './todos'

export enum ActionTypes {
    fetchTodos,
    clearTodos, 
    deleteTodos
}

export type Action = FetchTodosAction | ClearTodosAction | DeleteTodoAction