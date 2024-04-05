import axios from 'axios';
import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { TodoAction, TodoTypes } from '../../types/todo';
export const fetchTodos = (limit: number = 10, page: number = 1) => {
    return async function (dispatch: Dispatch<TodoAction>) {
        try {
            dispatch({ type: TodoTypes.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _limit: limit, _page: page }
            })
            dispatch({ type: TodoTypes.FETCH_TODOS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: TodoTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}

export const setTodoPage = (page: number) => {
    return function (dispatch: Dispatch<TodoAction>) {
        dispatch({ type: TodoTypes.SET_TODO_PAGE, payload: page })
    }

}