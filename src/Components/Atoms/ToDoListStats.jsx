import React from 'react'
import { useRecoilValue } from 'recoil';
import { toDoListStatsState } from '../../atoms/ToDoListData';

function ToDoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(toDoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>todo項目の合計: {totalNum}</li>
      <li>完了項目の合計: {totalCompletedNum}</li>
      <li>未完了項目の合計: {totalUncompletedNum}</li>
      <li>達成率: {formattedPercentCompleted}%</li>
    </ul>
  );
}

export default ToDoListStats;