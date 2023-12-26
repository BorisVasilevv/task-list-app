import React from "react";
import TaskList from "./TaskList";
import {Alert} from './Alert/Alert'
import {AddNewTask} from './AddTask/AddNewTaskElem'

function ToDoListPage() {
  return (
    <div>
        
        <Alert>
          <AddNewTask/>
        </Alert>
        <TaskList/>
    </div>
  );
}


export default ToDoListPage;
