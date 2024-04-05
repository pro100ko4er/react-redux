import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { usePagination } from '../hooks/usePagbination';
import { useTypedSelector } from '../hooks/useTypedSeletor';
import { setTodoPage } from '../store/action-creators/todo';
import { ITodos } from '../types/todo';

export const TodoList: React.FC = () => {
    const { limit, loading, page, todos, error } = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useActions()
    const pagination = usePagination(100, limit)
    useEffect(() => {
        fetchTodos(limit, page)
    }, [page])
    if (loading) {
        return <h2>Идет загрузка</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    let i = 0;
    const paginationArray = []
    while (i < pagination) {
        i++;
        paginationArray.push(i)
    }
    return (
        <div>
            {todos.map((item: ITodos) => {
                return <div className='TodoList'>
                    {item.id}. {item.title}{item.completed}
                </div>
            })}
            <div className='wrap__pag'>
                {paginationArray.map(item => {
                    return <div style={{ backgroundColor: item === page ? 'teal' : 'white', color: item === page ? 'white' : 'teal' }} onClick={() => setTodoPage(item)} className='pag-item'>{item}</div>
                })}
            </div>
        </div>
    )
}