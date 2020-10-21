import React from 'react';
import { RecoilRoot } from 'recoil';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <RecoilRoot>
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
