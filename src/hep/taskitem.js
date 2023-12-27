

import { setTaskToStorage, getTasksFromStorage } from './storage';


export const getTodos = () => getTasksFromStorage();

export const saveTodo = (name) => {
  const todos = getTasksFromStorage();

  let id = 0;

  if (todos && todos.length > 0) {
    id = todos[todos.length - 1].id + 1;
  }

  const newTodo = {
    name,
    id,
    // isChecked: false,
  }

  todos.push(newTodo);

  setTaskToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTasksFromStorage();

    resolve(newTodos);
    reject("ОШИБКА В СОХРАНЕНИИ БЛЯТЬ");
  });
}

// export const toggleTodoItem = (id) => {
//   let todos = getTasksFromStorage();

//   todos = todos.map(item => {
//     if (item.id === id) {
//       item.isChecked = !item.isChecked;
//     }

//     return item;
//   });

//   setTaskToStorage(todos);

//   return new Promise((resolve, reject) => {
//     const newTodos = getTasksFromStorage();

//     resolve(newTodos);
//     reject("ОШИБКА В ИЗМЕНЕНИИ ПОЛЯ БЛЯТЬ");
//   })
// }

export const deleteTodoItem = (id) => {
  let todos = getTasksFromStorage();

  todos = todos.filter(item => item.id !== id);

  setTaskToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTasksFromStorage();

    resolve(newTodos);
    reject("ОШИБКА В УДАЛЕНИИ БЛЯТЬ");
  });
}

export const editTodoItem = (todoItem) => {
  let todos = getTasksFromStorage();

  todos = todos.map(item => {
    if (item.id === todoItem.id) {
      item.name = todoItem.editedText;
    }

    return item;
  });

  setTaskToStorage(todos);

  return new Promise((resolve, reject) => {
    const newTodos = getTasksFromStorage();

    resolve(newTodos);
    reject("ОШИБКА В РЕДАКТИРОВАНИИ БЛЯТЬ");
  });
}

