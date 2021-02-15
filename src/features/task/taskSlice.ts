//1.0. createSliceをimport
//reducerとactionを一緒に扱える
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
  },
});
//1.4.actionをexport
export const { createTask } = taskSlice.actions;
//1.5.useSelectorを用いてstateの中身をReactに反映
//                                                               => state.nameで書いたこと.Taskstateに書いてあるtasksをselectTaskが持つ
export const selectTask = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;
//1.6.store.tsへ
//useSelector(selectTask)

export default taskSlice.reducer;
