import { UserAction, UserActionTypes, userState, typeAction } from '../../types/user'
export interface IUsers {
    id: number,
    name: string,
    username: string,
    email: string
}

const initialState: userState = {
    users: [],
    loading: false,
    error: null
}
export const userReducer = (state: any = initialState, action: typeAction): userState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
        default:
            return state
    }
}