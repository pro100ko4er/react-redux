import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSeletor';
import { fetchUsers } from '../store/action-creators/user';

export const UserList: FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(item => {
                return <div>{item.id}. {item.name}<br /> {item.email} <br /> {item.username}</div>
            })}
        </div>
    )
}