import React from 'react'
import { useRecoilState } from 'recoil';
import { toDoListFilterState } from '../../atoms/ToDoListData';

function ToDoListFilters() {
  const [filter, setFilter] = useRecoilState(toDoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value='Show All'>全て</option>
        <option value='Show Completed'>完了済み</option>
        <option value='Show Uncompleted'>未完了</option>
      </select>
    </>
  );
}


export default ToDoListFilters;