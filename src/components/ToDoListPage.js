import React from "react";
import {TaskList} from "./TaskList";
import {Alert} from './Alert/Alert'
import {AddNewTask} from './AddTask/AddNewTaskElem'
import styled from "styled-components";

const Container =styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`


function ToDoListPage() {
  return (
    <Container>
        <Alert title="Добавить">
          <AddNewTask/>
        </Alert>
        <TaskList/>
    </Container>
  );
}


export default ToDoListPage;
