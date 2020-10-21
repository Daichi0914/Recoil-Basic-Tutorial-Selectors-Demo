import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { toDoListState } from '../../atoms/ToDoListData';

function ToDoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setToDoList = useSetRecoilState(toDoListState);

  const addItem = () => {
    setToDoList(oldToDoList => [
      ...oldToDoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>追加</button>
    </div>
  );
}

// 一意のIDを作成するためのユーティリティ
let id = 0;
function getId() {
  return id++;
}

export default ToDoItemCreator;
