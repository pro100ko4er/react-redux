import { FetchUsersErrorAction, FetchUsersSuccessAction } from './user';
export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}
export enum TodoTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

export interface ITodos {
    id: number,
    title: string,
    completed: false
}

export interface FetchTodoAction {
    type: TodoTypes.FETCH_TODOS
}
export interface FetchSuccessTodoAction {
    type: TodoTypes.FETCH_TODOS_SUCCESS,
    payload: any[],
}
export interface FetchErrorTodoAction {
    type: TodoTypes.FETCH_TODOS_ERROR
    payload: string
}
export interface SetTodoPage {
    type: TodoTypes.SET_TODO_PAGE
    payload: number
}
export type TodoAction = FetchTodoAction | FetchSuccessTodoAction | FetchErrorTodoAction | SetTodoPage