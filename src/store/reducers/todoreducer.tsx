import React from 'react';
import { TodoAction, TodoState, TodoTypes } from '../../types/todo';

const initialState: TodoState = {
    todos: [],
    error: null,
    loading: false,
    page: 1,
    limit: 10
}

export function TodoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
    switch (action.type) {
        case TodoTypes.FETCH_TODOS:
            return { ...state, loading: true }
        case TodoTypes.FETCH_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case TodoTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, error: null, todos: action.payload }
        case TodoTypes.SET_TODO_PAGE:
            return { ...state, page: action.payload }
        default:
            return state;
    }
}