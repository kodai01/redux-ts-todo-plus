import React from 'react';
import './scss/main.scss';
import Header from './header';
import TaskForm from './features/task/taskForm/taskForm';
import TaskList from './features/task/taskList/taskList';

const App: React.FC = () => {
  return (
    <div className="root">
      <Header />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
