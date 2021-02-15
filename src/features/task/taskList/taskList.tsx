import React from 'react';
import TaskItem from '../taskItem/taskItem';
import { useSelector } from 'react-redux';
import { selectTask } from '../taskSlice';
import '../../../scss/taskList.scss';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
