import React from 'react';
import './scss/main.scss';
import Header from './header';
import TaskForm from './features/task/taskForm/taskForm';

const App: React.FC = () => {
  return (
    <div className="root">
      <Header />
      <TaskForm />
    </div>
  );
};

export default App;
