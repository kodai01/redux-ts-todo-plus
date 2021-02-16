import React from 'react';
import '../../../scss/taskItem.scss';
import '../../../scss/modal.scss';
import Checkbox from '@material-ui/core/Checkbox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SimpleModal from '../../modal/simpleModal';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <button onClick={handleOpen}>
          <EditIcon />
        </button>
        <button onClick={() => console.log('delete', task.id)}>
          <DeleteIcon />
        </button>
      </div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-content">
          <h2>編集画面</h2>
          <form action="POST">
            <TextField
              className="text-field"
              id="outlined-basic"
              label="Edittask"
              variant="outlined"
              name="taskTitle"
            />
            <button className="submit" type="submit">
              登録
            </button>
            <button className="cancel" type="button" onClick={handleClose}>
              キャンセル
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
