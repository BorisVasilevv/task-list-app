

import { setTaskToStorage, getTasksFromStorage } from './storage';


export const getTasks = () => getTasksFromStorage();

export const saveTask = (name) => {
  const task = getTasksFromStorage();

  let id = 0;

  if (task && task.length > 0) {
    id = task[task.length - 1].id + 1;
  }

  const newTask = {
    name,
    id,
    // isChecked: false,
  }

  task.push(newTask);

  setTaskToStorage(task);

  return new Promise((resolve, reject) => {
    const newTask = getTasksFromStorage();

    resolve(newTask);
    reject("ОШИБКА В СОХРАНЕНИИ БЛЯТЬ");
  });
}

export const deleteTaskItem = (id) => {
    let task = getTasksFromStorage();

    task = task.filter(item => item.id !== id);

    setTaskToStorage(task);

    return new Promise((resolve, reject) => {
        const newTask = getTasksFromStorage();

        resolve(newTask);
    });
}

export const editTaskItem = (taskItem) => {
    let task = getTasksFromStorage();

    task = task.map(item => {
        if (item.id === taskItem.id) {
            item.name = taskItem.name;
        }

        return item;
    });

    setTaskToStorage(task);

    return new Promise((resolve, reject) => {
    const newTask = getTasksFromStorage();
        resolve(newTask);
    });
}

