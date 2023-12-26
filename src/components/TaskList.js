import React from "react";
import TaskElem from "./TaskElem";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items:center;
    justify-content:center;
    margin-top: 250px;
`

function TaskList() {
  return (
    <Container>
        <TaskElem />
        <TaskElem />
    </Container>

  );
}


export default TaskList;