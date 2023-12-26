import React from "react";
import TaskList from "./TaskList";
import {Alert} from './Alert/Alert'
import {AddNewPhone} from './AddTask/AddNewTaskElem'

function ToDoListPage() {
  return (
    <div>
        
        <Alert>
          <AddNewPhone/>
        </Alert>
        <TaskList/>
    </div>
  );
}


export default ToDoListPage;
