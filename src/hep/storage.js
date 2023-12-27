
export const setTaskToStorage = (todos) => {
    console.log(todos);
    localStorage.setItem('tasks', JSON.stringify(todos));
  }
  
  export const getTasksFromStorage = () => {
    let result = [];
    const stringedTodos = localStorage.getItem('tasks');
  
    if (stringedTodos !== null) {
      result = JSON.parse(stringedTodos);
    }
  
    return result;
  }