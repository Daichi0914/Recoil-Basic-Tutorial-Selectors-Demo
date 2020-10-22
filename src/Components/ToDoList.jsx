import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredToDoListState } from '../atoms/ToDoListData';
import ToDoListStats from './Atoms/ToDoListStats';
import ToDoListFilters from './Atoms/ToDoListFilters';
import ToDoItemCreator from './Atoms/ToDoItemCreator';
import ToDoItem from './Atoms/ToDoItem';

function ToDoList() {
  const toDoList = useRecoilValue(filteredToDoListState);

  return (
    <>
      <ToDoListStats />
      <ToDoListFilters />
      <ToDoItemCreator />

      {toDoList.map(toDoItem => (
        <ToDoItem key={toDoItem.id} item={toDoItem} />
      ))}
    </>
  );
}

export default ToDoList;
