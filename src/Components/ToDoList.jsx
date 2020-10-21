import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoListState } from '../atoms/ToDoListData';
import ToDoItemCreator from './Atoms/ToDoItemCreator';
import ToDoItem from './Atoms/ToDoItem';

function ToDoList() {
  const toDoList = useRecoilValue(toDoListState);

  return (
    <>
      {/* <ToDoListStats /> */}
      {/* <ToDoListFilters /> */}
      <ToDoItemCreator />

      {toDoList.map(toDoItem => (
        <ToDoItem key={toDoItem.id} item={toDoItem} />
      ))}
    </>
  );
}

export default ToDoList;
