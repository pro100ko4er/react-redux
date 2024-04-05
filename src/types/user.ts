import { IUsers } from '../store/reducers/userReducer';

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
}


export interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
export interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}
export interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

export interface userState {
    users: IUsers[],
    loading: boolean,
    error: null | string
}

export interface UserAction {
    type: string,
    payload?: string | any
}
export type typeAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction

