import { combineReducers } from 'redux';
import { TodoReducer } from './todoreducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    todo: TodoReducer
})

export type RootState = ReturnType<typeof rootReducer>