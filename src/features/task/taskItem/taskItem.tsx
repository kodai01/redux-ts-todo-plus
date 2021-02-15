import React from 'react';
import '../../../scss/taskItem.scss';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  return (
    <div className="task-item">
      <div className="title">
        <EventNoteIcon />
        <div className="title-text">{task.title}</div>
      </div>
      <div className="icon-list">
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(task.id)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <button onClick={() => console.log('edit', task.id)}>
          <EditIcon />
        </button>
        <button onClick={() => console.log('delete', task.id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
