import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import '../../../scss/taskForm.scss';
import TextField from '@material-ui/core/TextField';
import { createTask } from '../taskSlice';
import { Inputs } from '../type';

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle)); //createTaskの中の引数がtitleのaction.payloadとなって渡される
    console.log(data);
    reset();
  };
  return (
    <div className="form-wrapper">
      <form
        onSubmit={handleSubmit(handleCreate)}
        className="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          className="text-field"
          id="outlined-basic"
          label="NewTask"
          variant="outlined"
          inputRef={register}
          name="taskTitle"
        />
        <button id="submit-button" className="submit-button">
          送信
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
