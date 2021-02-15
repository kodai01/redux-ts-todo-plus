import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../scss/taskForm.scss';
import TextField from '@material-ui/core/TextField';

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  type Inputs = {
    taskTitle: string;
  };
  const handleCreate = (data: Inputs) => {
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
