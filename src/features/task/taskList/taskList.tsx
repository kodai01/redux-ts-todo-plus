import React from 'react';
import TaskItem from '../taskItem/taskItem';
import defaultDataset from './defaultDataset.json';
import '../../../scss/taskList.scss';

const TaskList: React.FC = () => {
  return (
    <div className="task-list">
      {defaultDataset.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
