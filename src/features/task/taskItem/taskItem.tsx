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
import { Inputs } from '../type';
import { useForm } from 'react-hook-form';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const editValue = useSelector(selectEditTask);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleOpen = () => {
    dispatch(editTask(task));
    dispatch(toggleModalOpen(true));
  };

  const handleClose = () => {
    dispatch(toggleModalOpen(false));
  };

  const handleReplace = (data: Inputs) => {
    const sendData = { ...editValue, title: data.taskTitle }; //...replaceTaskではない
    console.log(sendData);
    dispatch(replaceTask(sendData));
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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-content">
          <h2>編集画面</h2>
          <form
            onSubmit={handleSubmit(handleReplace)}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="text-field"
              id="outlined-basic"
              label="Edittask"
              variant="outlined"
              name="taskTitle"
              inputRef={register}
              defaultValue={editValue.title}
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
