//1.0. createSliceをimport
//reducerとactionを一緒に扱える
import { AccordionActions } from '@material-ui/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

//1.1.stateの初期値を記述
interface TaskState {
  //taskの数を管理
  idCount: number;
  //storeに保存するタスクの一覧
  //配列の中に連想配列が入っている時は、このように書く
  tasks: { id: number; title: string; completed: boolean }[];
  //編集時にどのタスクを選択しているか
  selectedTask: { id: number; title: string; completed: boolean };
  //モーダルの開閉
  isModalOpen: boolean;
}

//1.2.stateの初期値を記述
const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: '最初のタスク', completed: false }],
  selectedTask: { id: 0, title: '', completed: false },
  isModalOpen: false,
};

//1.3.createSliceを用いてsliceを作成
export const taskSlice = createSlice({
  //1.3.1createSliceを作るときは、nameとinitialStateとreducers生成する必要がある
  name: 'task', //作成するsliceの名前でactionTypeを生成するときのprefix: ’tasks/createTask’
  initialState, //sliceで用いる初期値
  reducers: {
    //どのようにしてsliceを変更するか
    //1.3.1 taskが生成された時
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //3.1.modalの開閉
    toggleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },

    //3.2.どのtaskを選択しているか管理
    editTask: (state, action) => {
      state.selectedTask = action.payload;
    },

    //3.4.taskの編集
    replaceTask: (state, action) => {
      //state.tasksの中から指定したtaskを抜き出す
      const task = state.tasks.find((t) => t.id === action.payload.id);
      console.log(task, 'taskはこれです');
      if (task) {
        //抜き出したtasのtitleを書き換える
        task.title = action.payload.title;
      }
    },

    //4.1task完了未完了のチェック変更
    completedTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      //taskが存在すれば
      if (task) {
        task.completed = !task.completed;
      }
    },
    //4.2.taskの削除
    deleteTask: (state, action) => {
      //指定したtask以外で新しくstate.tasksの配列を作成し直している
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});
//1.4.actionをexport
export const {
  createTask,
  toggleModalOpen,
  editTask,
  replaceTask,
  completedTask,
  deleteTask,
} = taskSlice.actions;
//1.5.useSelectorを用いてstateの中身をReactに反映
//                                                               => state.nameで書いたこと.Taskstateに書いてあるtasksをselectTaskが持つ
export const selectTask = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;

export const selectIsModalOpen = (state: RootState): TaskState['isModalOpen'] =>
  state.task.isModalOpen;
//3.3.  3.2でやったのをexport
export const selectEditTask = (state: RootState): TaskState['selectedTask'] =>
  state.task.selectedTask;
//1.6.store.tsへ
//useSelector(selectTask)

export default taskSlice.reducer;
