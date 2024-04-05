import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './style.css';
import { UserList } from './components/UserList';
import { TodoList } from './components/TodoList';


const App: React.FC = () => {


  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div >
  )
}

export default App;
