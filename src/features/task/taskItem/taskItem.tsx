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
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsModalOpen,
  toggleModalOpen,
  editTask,
  selectEditTask,
  replaceTask,
} from '../taskSlice';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const editValue = useSelector(selectEditTask);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(editTask(task));
    dispatch(toggleModalOpen(true));
  };

  const handleClose = () => {
    dispatch(toggleModalOpen(false));
  };

  const handleReplace = (data: any) => {
    const sendData = { ...replaceTask, title: data.taskTitle };
    dispatch(editTask(data));
    dispatch(toggleModalOpen(false));
    console.log(data);
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
        open={isModalOpen}
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
              defaultValue={editValue.title}
            />
            <button className="submit" type="button" onClick={handleReplace}>
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
